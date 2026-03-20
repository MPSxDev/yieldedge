#!/bin/bash
# ============================================================================
# INJECT SKILL - Detector de skills basado en patrones
# ============================================================================
# Compatible con bash 3.x (macOS default)
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
NC='\033[0m'

# Configuración
SKILLS_DIR=".claude/skills"

# Variables
INPUT=""
MODE="stdin"
VERBOSE=false
MATCHED_SKILLS=""
HIGHEST_SEVERITY="info"

# ============================================================================
# FUNCIONES DE AYUDA
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

add_skill() {
    local skill="$1"
    case "$MATCHED_SKILLS" in
        *"$skill"*) ;;  # Ya existe
        *) MATCHED_SKILLS="$MATCHED_SKILLS $skill" ;;
    esac
}

log_match() {
    local severity="$1"
    local skill="$2"
    local message="$3"

    case "$severity" in
        critical)
            printf "${RED}⛔ CRÍTICO:${NC} %s\n" "$message"
            printf "   Skill recomendado: ${MAGENTA}%s${NC}\n" "$skill"
            HIGHEST_SEVERITY="critical"
            ;;
        error)
            printf "${RED}❌ ERROR:${NC} %s\n" "$message"
            printf "   Skill recomendado: ${MAGENTA}%s${NC}\n" "$skill"
            if [ "$HIGHEST_SEVERITY" != "critical" ]; then
                HIGHEST_SEVERITY="error"
            fi
            ;;
        warning)
            printf "${YELLOW}⚠️  ADVERTENCIA:${NC} %s\n" "$message"
            printf "   Skill recomendado: ${MAGENTA}%s${NC}\n" "$skill"
            if [ "$HIGHEST_SEVERITY" = "info" ]; then
                HIGHEST_SEVERITY="warning"
            fi
            ;;
        info)
            if [ "$VERBOSE" = true ]; then
                printf "${CYAN}ℹ️  INFO:${NC} %s\n" "$message"
                printf "   Skill sugerido: ${MAGENTA}%s${NC}\n" "$skill"
            fi
            ;;
    esac

    add_skill "$skill"
}

# ============================================================================
# FUNCIONES DE DETECCIÓN DE PATRONES
# ============================================================================

check_frontend_errors() {
    local content="$1"

    # TypeScript errors
    if echo "$content" | grep -qE "Type '.*' is not assignable|Property '.*' does not exist on type|Cannot find name|Cannot find module"; then
        log_match "error" "senior-frontend" "Error de TypeScript detectado"
    fi

    # React hooks errors
    if echo "$content" | grep -qE "Invalid hook call|Rules of Hooks|rendered more hooks|has a missing dependency"; then
        log_match "error" "senior-frontend" "Error de React Hooks detectado"
    fi

    # Hydration errors
    if echo "$content" | grep -qE "Hydration failed|Text content does not match|server rendered HTML"; then
        log_match "error" "senior-frontend" "Error de hidratación detectado"
    fi

    # Next.js client component errors
    if echo "$content" | grep -qE "needs useState|needs useEffect|async/await is not yet supported in Client"; then
        log_match "error" "senior-frontend" "Error de Client Component detectado"
    fi
}

check_backend_errors() {
    local content="$1"

    # Database connection errors
    if echo "$content" | grep -qE "ECONNREFUSED|Connection refused|connection pool exhausted|Too many connections"; then
        log_match "error" "senior-backend" "Error de conexión a base de datos"
    fi

    # SQL/Prisma errors
    if echo "$content" | grep -qE "relation .* does not exist|duplicate key|deadlock detected|PrismaClient"; then
        log_match "error" "senior-backend" "Error de base de datos/Prisma"
    fi

    # API errors
    if echo "$content" | grep -qE "Failed to fetch|status code [45][0-9][0-9]"; then
        log_match "error" "senior-backend" "Error de API detectado"
    fi
}

check_security_errors() {
    local content="$1"

    # CORS errors
    if echo "$content" | grep -qE "CORS|Access-Control-Allow-Origin|blocked by CORS policy"; then
        log_match "warning" "senior-security" "Error de CORS detectado"
    fi

    # Auth errors
    if echo "$content" | grep -qE "unauthorized|Unauthorized|401|invalid token|jwt expired|JsonWebTokenError"; then
        log_match "warning" "senior-security" "Error de autenticación detectado"
    fi
}

check_security_patterns() {
    local content="$1"
    local has_critical=false

    # CRITICAL: eval() usage
    if echo "$content" | grep -qE 'eval\s*\('; then
        log_match "critical" "senior-security" "Uso de eval() detectado - Riesgo crítico"
        has_critical=true
    fi

    # CRITICAL: Command injection
    if echo "$content" | grep -qE 'exec\s*\(.*\$\{|spawn\s*\(.*\$\{'; then
        log_match "critical" "senior-security" "Posible command injection detectado"
        has_critical=true
    fi

    # CRITICAL: Hardcoded secrets
    if echo "$content" | grep -qE 'password\s*[=:]\s*["][^"]{4,}["]|api_?key\s*[=:]\s*["][^"]{8,}["]'; then
        log_match "critical" "senior-security" "Posible secreto hardcodeado detectado"
        has_critical=true
    fi

    # WARNING: innerHTML
    if echo "$content" | grep -qE 'innerHTML\s*=|dangerouslySetInnerHTML'; then
        log_match "warning" "senior-security" "innerHTML/dangerouslySetInnerHTML detectado - Riesgo XSS"
    fi

    # WARNING: SQL injection
    if echo "$content" | grep -qE '\$\{.*\}.*(SELECT|INSERT|UPDATE|DELETE)'; then
        log_match "warning" "senior-security" "Posible SQL injection detectado"
    fi

    if [ "$has_critical" = true ]; then
        return 1
    fi
    return 0
}

check_code_antipatterns() {
    local content="$1"

    # TypeScript any
    if echo "$content" | grep -qE ':\s*any\b|as\s+any\b'; then
        log_match "warning" "senior-frontend" "Uso de tipo 'any' detectado"
    fi

    # console.log
    if echo "$content" | grep -qE 'console\.(log|debug|info)\s*\('; then
        log_match "info" "senior-frontend" "console.log detectado"
    fi

    # useEffect sin dependencias
    if echo "$content" | grep -qE 'useEffect\s*\(\s*\(\s*\)\s*=>' | grep -vq '\[\]'; then
        log_match "warning" "senior-frontend" "useEffect posiblemente sin dependencias"
    fi

    # Promise chaining
    if echo "$content" | grep -qE '\.then\s*\([^)]*\.then'; then
        log_match "warning" "senior-backend" "Promise chaining detectado - Considera async/await"
    fi

    # Native img tag
    if echo "$content" | grep -qE '<img\s+[^>]*src='; then
        log_match "info" "senior-frontend" "Tag <img> nativo - Considera next/image"
    fi

    # Inline styles
    if echo "$content" | grep -qE 'style\s*=\s*\{\{'; then
        log_match "info" "senior-frontend" "Estilos inline detectados - Considera Tailwind"
    fi
}

check_file_context() {
    local filepath="$1"
    local ext="${filepath##*.}"

    # Por extensión
    case ".$ext" in
        .tsx|.jsx|.css|.scss)
            log_match "info" "senior-frontend" "Archivo de frontend detectado"
            ;;
        .sql|.prisma|.graphql)
            log_match "info" "senior-backend" "Archivo de backend detectado"
            ;;
    esac

    # Por path
    case "$filepath" in
        *auth*|*security*|*middleware*)
            log_match "warning" "senior-security" "Archivo en contexto de seguridad"
            ;;
        *components*|*app/*.tsx|*pages*)
            log_match "info" "senior-frontend" "Archivo de UI/componentes"
            ;;
        *api*|*server*|*lib/db*)
            log_match "info" "senior-backend" "Archivo de API/servidor"
            ;;
    esac
}

check_prompt_patterns() {
    local prompt
    prompt=$(echo "$1" | tr '[:upper:]' '[:lower:]')

    # Frontend keywords
    if echo "$prompt" | grep -qE "(componente|component|react|hook|estado|state|ui|interfaz|responsive|tailwind|css|estilo)"; then
        log_match "info" "senior-frontend" "Prompt relacionado con frontend"
    fi

    # Backend keywords
    if echo "$prompt" | grep -qE "(api|endpoint|base de datos|database|query|prisma|graphql|rest|servidor|server|backend)"; then
        log_match "info" "senior-backend" "Prompt relacionado con backend"
    fi

    # Security keywords (alta prioridad)
    if echo "$prompt" | grep -qE "(seguridad|security|autenticación|auth|jwt|token|xss|csrf|vulnerabilidad|penetration)"; then
        log_match "warning" "senior-security" "Prompt relacionado con seguridad"
    fi
}

# ============================================================================
# PARSEAR ARGUMENTOS
# ============================================================================

while [ $# -gt 0 ]; do
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
printf "${CYAN}╔════════════════════════════════════════════════════════════╗${NC}\n"
printf "${CYAN}║         DETECTOR DE SKILLS - Análisis de Patrones          ║${NC}\n"
printf "${CYAN}╚════════════════════════════════════════════════════════════╝${NC}\n"
echo ""

# Obtener contenido a analizar
case "$MODE" in
    stdin)
        if [ -t 0 ]; then
            printf "${YELLOW}No se proporcionó input. Usa --help para ver opciones.${NC}\n"
            exit 0
        fi
        CONTENT=$(cat)
        printf "${CYAN}Modo:${NC} stdin\n"
        ;;
    file)
        if [ ! -f "$INPUT" ]; then
            printf "${RED}Error: Archivo no encontrado: %s${NC}\n" "$INPUT"
            exit 1
        fi
        CONTENT=$(cat "$INPUT")
        printf "${CYAN}Modo:${NC} archivo\n"
        printf "${CYAN}Archivo:${NC} %s\n" "$INPUT"
        check_file_context "$INPUT"
        ;;
    error)
        CONTENT="$INPUT"
        printf "${CYAN}Modo:${NC} error\n"
        ;;
    prompt)
        CONTENT="$INPUT"
        printf "${CYAN}Modo:${NC} prompt\n"
        check_prompt_patterns "$CONTENT"
        ;;
esac

echo ""
printf "${CYAN}Analizando contenido...${NC}\n"
echo "────────────────────────────────────────────────────────────"
echo ""

# Ejecutar análisis
check_security_patterns "$CONTENT" || true
check_frontend_errors "$CONTENT"
check_backend_errors "$CONTENT"
check_security_errors "$CONTENT"
check_code_antipatterns "$CONTENT"

# ============================================================================
# RESULTADOS
# ============================================================================

echo ""
echo "────────────────────────────────────────────────────────────"
echo ""

# Limpiar y mostrar skills detectados
MATCHED_SKILLS=$(echo "$MATCHED_SKILLS" | xargs)

if [ -z "$MATCHED_SKILLS" ]; then
    printf "${GREEN}✅ No se detectaron patrones que requieran skills específicos${NC}\n"
    echo ""
    exit 0
fi

printf "${GREEN}📦 SKILLS RECOMENDADOS:${NC}\n"
echo ""

for skill in $MATCHED_SKILLS; do
    skill=$(echo "$skill" | xargs)
    if [ -n "$skill" ]; then
        # Verificar que el skill existe
        if [ -d "$SKILLS_DIR/$skill" ]; then
            printf "   ${MAGENTA}→ %s${NC} ${GREEN}(disponible)${NC}\n" "$skill"
            printf "     Invocar: ${CYAN}/%s${NC}\n" "$skill"
        else
            printf "   ${MAGENTA}→ %s${NC} ${RED}(no instalado)${NC}\n" "$skill"
        fi
    fi
done

echo ""

# Mostrar severidad general
case "$HIGHEST_SEVERITY" in
    critical)
        printf "${RED}⛔ Severidad: CRÍTICA - Acción requerida${NC}\n"
        ;;
    error)
        printf "${RED}❌ Severidad: ERROR - Revisar antes de continuar${NC}\n"
        ;;
    warning)
        printf "${YELLOW}⚠️  Severidad: ADVERTENCIA - Considerar revisión${NC}\n"
        ;;
    info)
        printf "${CYAN}ℹ️  Severidad: INFO - Sugerencias opcionales${NC}\n"
        ;;
esac

echo ""

# Exit code basado en severidad
if [ "$HIGHEST_SEVERITY" = "critical" ]; then
    exit 1
else
    exit 0
fi
