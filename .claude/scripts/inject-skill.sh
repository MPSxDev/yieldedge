#!/bin/bash
# ============================================================================
# INJECT SKILL - Detector de skills basado en patrones
# ============================================================================
# Analiza contenido (errores, código, archivos) y sugiere skills apropiados
#
# Uso:
#   echo "error message" | .claude/scripts/inject-skill.sh
#   .claude/scripts/inject-skill.sh --file path/to/file.tsx
#   .claude/scripts/inject-skill.sh --error "Hydration failed"
#   .claude/scripts/inject-skill.sh --prompt "crear componente react"
# ============================================================================

set -e

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
MAGENTA='\033[0;35m'
BOLD='\033[1m'
NC='\033[0m'

# Configuración
PATTERNS_FILE=".claude/patterns/skill-triggers.yaml"
SKILLS_DIR=".claude/skills"

# Variables
INPUT=""
MODE="stdin"
VERBOSE=false
MATCHED_SKILLS=""
HIGHEST_SEVERITY="info"

# ============================================================================
# PATRONES EMBEBIDOS (para no depender de yq/parser YAML)
# ============================================================================

# Arrays asociativos para patrones
declare -A ERROR_PATTERNS
declare -A CODE_PATTERNS
declare -A SECURITY_PATTERNS

# --- Patrones de Error ---
ERROR_PATTERNS["senior-frontend"]="
Type '.*' is not assignable
Property '.*' does not exist on type
Cannot find name
Invalid hook call
Rules of Hooks
Hydration failed
Text content does not match
useEffect has a missing dependency
You're importing a component that needs useState
You're importing a component that needs useEffect
async/await is not yet supported in Client Components
Cannot find module
"

ERROR_PATTERNS["senior-backend"]="
ECONNREFUSED
Connection refused
connection pool exhausted
Too many connections
relation .* does not exist
duplicate key value
deadlock detected
PrismaClient
Failed to fetch
status code [45][0-9]{2}
"

ERROR_PATTERNS["senior-security"]="
CORS
Access-Control-Allow-Origin
blocked by CORS policy
unauthorized
Unauthorized
401
invalid token
jwt expired
JsonWebTokenError
"

# --- Patrones de Código (análisis estático) ---
CODE_PATTERNS["critical"]="
eval\s*\(
new\s+Function\s*\(
innerHTML\s*=
dangerouslySetInnerHTML
password\s*[=:]\s*['\"][^'\"]{4,}['\"]
api_?key\s*[=:]\s*['\"][^'\"]{8,}['\"]
exec\s*\(.*\$\{
"

CODE_PATTERNS["warning"]="
:\s*any\b
as\s+any\b
console\.(log|debug|info)\s*\(
useEffect\s*\([^,]+\)\s*$
\.then\s*\([^)]+\.then
"

CODE_PATTERNS["info"]="
<img\s+[^>]*src=
style\s*=\s*\{\{
<a\s+[^>]*href=['\"]\/
"

# --- Patrones de Seguridad (máxima prioridad) ---
SECURITY_PATTERNS["block"]="
eval\s*\(
exec\s*\(.*\$\{
password\s*=\s*['\"][^'\"]+['\"]
api_key\s*=\s*['\"][^'\"]+['\"]
"

SECURITY_PATTERNS["warn"]="
innerHTML
dangerouslySetInnerHTML
\$\{.*\}.*SELECT|INSERT|UPDATE|DELETE
"

# ============================================================================
# FUNCIONES
# ============================================================================

usage() {
    echo "Uso: $0 [opciones]"
    echo ""
    echo "Opciones:"
    echo "  --file FILE     Analizar archivo específico"
    echo "  --error MSG     Analizar mensaje de error"
    echo "  --prompt MSG    Analizar prompt del usuario"
    echo "  --verbose, -v   Mostrar detalles de matching"
    echo "  --help, -h      Mostrar esta ayuda"
    echo ""
    echo "También acepta input via stdin:"
    echo "  echo 'error' | $0"
}

log_match() {
    local severity="$1"
    local pattern="$2"
    local skill="$3"
    local message="$4"

    case "$severity" in
        critical)
            echo -e "${RED}⛔ CRÍTICO:${NC} $message"
            echo -e "   Skill recomendado: ${MAGENTA}$skill${NC}"
            HIGHEST_SEVERITY="critical"
            ;;
        error)
            echo -e "${RED}❌ ERROR:${NC} $message"
            echo -e "   Skill recomendado: ${MAGENTA}$skill${NC}"
            if [ "$HIGHEST_SEVERITY" != "critical" ]; then
                HIGHEST_SEVERITY="error"
            fi
            ;;
        warning)
            echo -e "${YELLOW}⚠️  ADVERTENCIA:${NC} $message"
            echo -e "   Skill recomendado: ${MAGENTA}$skill${NC}"
            if [ "$HIGHEST_SEVERITY" = "info" ]; then
                HIGHEST_SEVERITY="warning"
            fi
            ;;
        info)
            if [ "$VERBOSE" = true ]; then
                echo -e "${CYAN}ℹ️  INFO:${NC} $message"
                echo -e "   Skill sugerido: ${MAGENTA}$skill${NC}"
            fi
            ;;
    esac

    # Añadir skill a la lista (sin duplicados)
    if [[ ! "$MATCHED_SKILLS" =~ "$skill" ]]; then
        MATCHED_SKILLS="$MATCHED_SKILLS $skill"
    fi
}

check_security_patterns() {
    local content="$1"

    # Patrones que BLOQUEAN
    for pattern in ${SECURITY_PATTERNS["block"]}; do
        if echo "$content" | grep -qE "$pattern" 2>/dev/null; then
            log_match "critical" "$pattern" "senior-security" "Patrón de seguridad crítico detectado"
            return 1
        fi
    done

    # Patrones que ADVIERTEN
    for pattern in ${SECURITY_PATTERNS["warn"]}; do
        if echo "$content" | grep -qE "$pattern" 2>/dev/null; then
            log_match "warning" "$pattern" "senior-security" "Posible problema de seguridad"
        fi
    done

    return 0
}

check_error_patterns() {
    local content="$1"

    # Frontend
    while IFS= read -r pattern; do
        [ -z "$pattern" ] && continue
        if echo "$content" | grep -qE "$pattern" 2>/dev/null; then
            log_match "error" "$pattern" "senior-frontend" "Error de frontend detectado"
        fi
    done <<< "${ERROR_PATTERNS["senior-frontend"]}"

    # Backend
    while IFS= read -r pattern; do
        [ -z "$pattern" ] && continue
        if echo "$content" | grep -qE "$pattern" 2>/dev/null; then
            log_match "error" "$pattern" "senior-backend" "Error de backend detectado"
        fi
    done <<< "${ERROR_PATTERNS["senior-backend"]}"

    # Security
    while IFS= read -r pattern; do
        [ -z "$pattern" ] && continue
        if echo "$content" | grep -qE "$pattern" 2>/dev/null; then
            log_match "warning" "$pattern" "senior-security" "Error relacionado con seguridad"
        fi
    done <<< "${ERROR_PATTERNS["senior-security"]}"
}

check_code_patterns() {
    local content="$1"

    # Críticos
    for pattern in ${CODE_PATTERNS["critical"]}; do
        [ -z "$pattern" ] && continue
        if echo "$content" | grep -qE "$pattern" 2>/dev/null; then
            log_match "critical" "$pattern" "senior-security" "Antipatrón crítico en código"
        fi
    done

    # Warnings
    for pattern in ${CODE_PATTERNS["warning"]}; do
        [ -z "$pattern" ] && continue
        if echo "$content" | grep -qE "$pattern" 2>/dev/null; then
            log_match "warning" "$pattern" "senior-frontend" "Antipatrón en código"
        fi
    done

    # Info
    for pattern in ${CODE_PATTERNS["info"]}; do
        [ -z "$pattern" ] && continue
        if echo "$content" | grep -qE "$pattern" 2>/dev/null; then
            log_match "info" "$pattern" "senior-frontend" "Sugerencia de mejora"
        fi
    done
}

check_file_context() {
    local filepath="$1"
    local ext="${filepath##*.}"
    local dir=$(dirname "$filepath")

    # Por extensión
    case ".$ext" in
        .tsx|.jsx|.css|.scss)
            log_match "info" "extension" "senior-frontend" "Archivo de frontend detectado"
            ;;
        .sql|.prisma|.graphql)
            log_match "info" "extension" "senior-backend" "Archivo de backend detectado"
            ;;
    esac

    # Por path
    if [[ "$filepath" =~ (auth|security|middleware) ]]; then
        log_match "warning" "path" "senior-security" "Archivo en contexto de seguridad"
    elif [[ "$filepath" =~ (components|app/.*\.tsx|pages) ]]; then
        log_match "info" "path" "senior-frontend" "Archivo de UI/componentes"
    elif [[ "$filepath" =~ (api|server|lib/db) ]]; then
        log_match "info" "path" "senior-backend" "Archivo de API/servidor"
    fi
}

check_prompt_patterns() {
    local prompt="$1"
    prompt=$(echo "$prompt" | tr '[:upper:]' '[:lower:]')

    # Frontend keywords
    if echo "$prompt" | grep -qE "(componente|component|react|hook|estado|state|ui|interfaz|responsive|tailwind|css|estilo)"; then
        log_match "info" "prompt" "senior-frontend" "Prompt relacionado con frontend"
    fi

    # Backend keywords
    if echo "$prompt" | grep -qE "(api|endpoint|base de datos|database|query|prisma|graphql|rest|servidor|server|backend)"; then
        log_match "info" "prompt" "senior-backend" "Prompt relacionado con backend"
    fi

    # Security keywords (alta prioridad)
    if echo "$prompt" | grep -qE "(seguridad|security|autenticación|auth|jwt|token|xss|csrf|vulnerabilidad|penetration)"; then
        log_match "warning" "prompt" "senior-security" "Prompt relacionado con seguridad"
    fi
}

# ============================================================================
# PARSEAR ARGUMENTOS
# ============================================================================

while [[ $# -gt 0 ]]; do
    case $1 in
        --file)
            INPUT="$2"
            MODE="file"
            shift 2
            ;;
        --error)
            INPUT="$2"
            MODE="error"
            shift 2
            ;;
        --prompt)
            INPUT="$2"
            MODE="prompt"
            shift 2
            ;;
        --verbose|-v)
            VERBOSE=true
            shift
            ;;
        --help|-h)
            usage
            exit 0
            ;;
        *)
            INPUT="$1"
            shift
            ;;
    esac
done

# ============================================================================
# MAIN
# ============================================================================

echo ""
echo -e "${CYAN}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║         DETECTOR DE SKILLS - Análisis de Patrones          ║${NC}"
echo -e "${CYAN}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Obtener contenido a analizar
case "$MODE" in
    stdin)
        if [ -t 0 ]; then
            echo -e "${YELLOW}No se proporcionó input. Usa --help para ver opciones.${NC}"
            exit 0
        fi
        CONTENT=$(cat)
        echo -e "${CYAN}Modo:${NC} stdin"
        ;;
    file)
        if [ ! -f "$INPUT" ]; then
            echo -e "${RED}Error: Archivo no encontrado: $INPUT${NC}"
            exit 1
        fi
        CONTENT=$(cat "$INPUT")
        echo -e "${CYAN}Modo:${NC} archivo"
        echo -e "${CYAN}Archivo:${NC} $INPUT"
        check_file_context "$INPUT"
        ;;
    error)
        CONTENT="$INPUT"
        echo -e "${CYAN}Modo:${NC} error"
        ;;
    prompt)
        CONTENT="$INPUT"
        echo -e "${CYAN}Modo:${NC} prompt"
        check_prompt_patterns "$CONTENT"
        ;;
esac

echo ""
echo -e "${CYAN}Analizando contenido...${NC}"
echo "────────────────────────────────────────────────────────────"
echo ""

# Ejecutar análisis
check_security_patterns "$CONTENT"
SECURITY_RESULT=$?

check_error_patterns "$CONTENT"
check_code_patterns "$CONTENT"

# ============================================================================
# RESULTADOS
# ============================================================================

echo ""
echo "────────────────────────────────────────────────────────────"
echo ""

# Limpiar y mostrar skills detectados
MATCHED_SKILLS=$(echo "$MATCHED_SKILLS" | xargs)

if [ -z "$MATCHED_SKILLS" ]; then
    echo -e "${GREEN}✅ No se detectaron patrones que requieran skills específicos${NC}"
    echo ""
    exit 0
fi

echo -e "${GREEN}📦 SKILLS RECOMENDADOS:${NC}"
echo ""

for skill in $MATCHED_SKILLS; do
    skill=$(echo "$skill" | xargs)
    if [ -n "$skill" ]; then
        # Verificar que el skill existe
        if [ -d "$SKILLS_DIR/$skill" ]; then
            echo -e "   ${MAGENTA}→ $skill${NC} ${GREEN}(disponible)${NC}"
            echo -e "     Invocar: ${CYAN}/$skill${NC}"
        else
            echo -e "   ${MAGENTA}→ $skill${NC} ${RED}(no instalado)${NC}"
        fi
    fi
done

echo ""

# Mostrar severidad general
case "$HIGHEST_SEVERITY" in
    critical)
        echo -e "${RED}⛔ Severidad: CRÍTICA - Acción requerida${NC}"
        ;;
    error)
        echo -e "${RED}❌ Severidad: ERROR - Revisar antes de continuar${NC}"
        ;;
    warning)
        echo -e "${YELLOW}⚠️  Severidad: ADVERTENCIA - Considerar revisión${NC}"
        ;;
    info)
        echo -e "${CYAN}ℹ️  Severidad: INFO - Sugerencias opcionales${NC}"
        ;;
esac

echo ""

# Exit code basado en severidad
if [ "$HIGHEST_SEVERITY" = "critical" ]; then
    exit 1
else
    exit 0
fi
