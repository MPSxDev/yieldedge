#!/bin/bash
# ============================================================================
# VALIDATE SKILLS - Valida integridad del sistema de skills
# ============================================================================
# Uso: .claude/scripts/validate-skills.sh [--fix] [--verbose]
# ============================================================================

set -e

SKILLS_DIR=".claude/skills"
REGISTRY="$SKILLS_DIR/_registry.json"

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

# Contadores
ERRORS=0
WARNINGS=0

# Flags
FIX_MODE=false
VERBOSE=false

# Parsear argumentos
while [[ $# -gt 0 ]]; do
    case $1 in
        --fix)
            FIX_MODE=true
            shift
            ;;
        --verbose|-v)
            VERBOSE=true
            shift
            ;;
        *)
            shift
            ;;
    esac
done

# Funciones de logging
log_error() {
    echo -e "${RED}❌ ERROR: $1${NC}"
    ((ERRORS++))
}

log_warning() {
    echo -e "${YELLOW}⚠️  WARN: $1${NC}"
    ((WARNINGS++))
}

log_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

log_info() {
    if [ "$VERBOSE" = true ]; then
        echo -e "${CYAN}ℹ️  $1${NC}"
    fi
}

# Header
echo ""
echo -e "${CYAN}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${CYAN}║           VALIDACIÓN DEL SISTEMA DE SKILLS                 ║${NC}"
echo -e "${CYAN}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""

# ============================================================================
# 1. Verificar que existe el registry
# ============================================================================
echo -e "${CYAN}[1/5] Verificando registry...${NC}"

if [ ! -f "$REGISTRY" ]; then
    log_error "No existe $REGISTRY"
    if [ "$FIX_MODE" = true ]; then
        echo "   Creando registry vacío..."
        mkdir -p "$SKILLS_DIR"
        echo '{"version":"1.0","skills":{},"naming":{"convention":"kebab-case"}}' > "$REGISTRY"
        log_success "Registry creado"
    fi
else
    log_success "Registry encontrado"

    # Verificar que es JSON válido
    if ! jq empty "$REGISTRY" 2>/dev/null; then
        log_error "Registry no es JSON válido"
    else
        log_info "Registry es JSON válido"
    fi
fi

# ============================================================================
# 2. Verificar cada skill registrado
# ============================================================================
echo ""
echo -e "${CYAN}[2/5] Verificando skills registrados...${NC}"

if [ -f "$REGISTRY" ] && jq empty "$REGISTRY" 2>/dev/null; then
    skills=$(jq -r '.skills | keys[]' "$REGISTRY" 2>/dev/null)

    for skill in $skills; do
        skill_path="$SKILLS_DIR/$skill"
        log_info "Verificando skill: $skill"

        # Verificar directorio existe
        if [ ! -d "$skill_path" ]; then
            log_error "Skill '$skill' registrado pero no existe en $skill_path"
            continue
        fi

        # Verificar SKILL.md
        if [ ! -f "$skill_path/SKILL.md" ]; then
            log_error "Skill '$skill' sin SKILL.md"
        else
            log_success "Skill '$skill' tiene SKILL.md"
        fi

        # Verificar naming convention (kebab-case)
        if [[ ! "$skill" =~ ^[a-z][a-z0-9-]*$ ]]; then
            log_warning "Skill '$skill' no sigue kebab-case"
        fi

        # Verificar que tiene descripción en registry
        desc=$(jq -r ".skills[\"$skill\"].description // empty" "$REGISTRY")
        if [ -z "$desc" ]; then
            log_warning "Skill '$skill' sin descripción en registry"
        fi

        # Verificar referencias si están definidas
        refs=$(jq -r ".skills[\"$skill\"].contextFiles[]? // empty" "$REGISTRY" 2>/dev/null)
        for ref in $refs; do
            if [ ! -f "$skill_path/$ref" ]; then
                log_warning "Skill '$skill': referencia '$ref' no existe"
            fi
        done
    done
else
    log_warning "No se pudo leer el registry, saltando verificación de skills"
fi

# ============================================================================
# 3. Detectar skills huérfanos
# ============================================================================
echo ""
echo -e "${CYAN}[3/5] Detectando skills huérfanos...${NC}"

orphan_found=false
for dir in "$SKILLS_DIR"/*/; do
    if [ -d "$dir" ]; then
        skill_name=$(basename "$dir")

        # Ignorar archivos que empiezan con _
        if [[ "$skill_name" == _* ]]; then
            continue
        fi

        # Verificar si está registrado
        if [ -f "$REGISTRY" ]; then
            registered=$(jq -e ".skills[\"$skill_name\"]" "$REGISTRY" 2>/dev/null)
            if [ $? -ne 0 ]; then
                log_warning "Skill '$skill_name' existe pero NO está registrado"
                orphan_found=true
            fi
        fi
    fi
done

if [ "$orphan_found" = false ]; then
    log_success "No hay skills huérfanos"
fi

# ============================================================================
# 4. Verificar triggers y patrones
# ============================================================================
echo ""
echo -e "${CYAN}[4/5] Verificando triggers...${NC}"

if [ -f "$REGISTRY" ] && jq empty "$REGISTRY" 2>/dev/null; then
    skills=$(jq -r '.skills | keys[]' "$REGISTRY" 2>/dev/null)

    for skill in $skills; do
        # Verificar que tiene triggers
        has_keywords=$(jq -e ".skills[\"$skill\"].triggers.keywords | length > 0" "$REGISTRY" 2>/dev/null)
        if [ "$has_keywords" != "true" ]; then
            log_warning "Skill '$skill' sin keywords de trigger"
        else
            keyword_count=$(jq ".skills[\"$skill\"].triggers.keywords | length" "$REGISTRY")
            log_info "Skill '$skill' tiene $keyword_count keywords"
        fi
    done

    log_success "Verificación de triggers completada"
fi

# ============================================================================
# 5. Verificar configuración de reinyección
# ============================================================================
echo ""
echo -e "${CYAN}[5/5] Verificando configuración de reinyección...${NC}"

if [ -f "$REGISTRY" ]; then
    reinjection_enabled=$(jq -r '.reinjection.enabled // false' "$REGISTRY")
    if [ "$reinjection_enabled" = "true" ]; then
        log_success "Reinyección automática habilitada"

        mode=$(jq -r '.reinjection.mode // "suggest"' "$REGISTRY")
        log_info "Modo de reinyección: $mode"

        priority=$(jq -r '.reinjection.priorityOrder | join(", ")' "$REGISTRY" 2>/dev/null)
        log_info "Orden de prioridad: $priority"
    else
        log_info "Reinyección automática deshabilitada"
    fi
fi

# ============================================================================
# RESUMEN
# ============================================================================
echo ""
echo -e "${CYAN}════════════════════════════════════════════════════════════════${NC}"
echo -e "${CYAN}                         RESUMEN                                ${NC}"
echo -e "${CYAN}════════════════════════════════════════════════════════════════${NC}"
echo ""

# Contar skills
if [ -f "$REGISTRY" ]; then
    total_skills=$(jq '.skills | keys | length' "$REGISTRY" 2>/dev/null || echo 0)
    required_skills=$(jq '[.skills[] | select(.required == true)] | length' "$REGISTRY" 2>/dev/null || echo 0)
    echo -e "Skills registrados:  ${CYAN}$total_skills${NC}"
    echo -e "Skills requeridos:   ${CYAN}$required_skills${NC}"
fi

echo -e "Errores:             ${RED}$ERRORS${NC}"
echo -e "Advertencias:        ${YELLOW}$WARNINGS${NC}"
echo ""

if [ $ERRORS -gt 0 ]; then
    echo -e "${RED}❌ Validación fallida con $ERRORS errores${NC}"
    echo ""
    exit 1
else
    if [ $WARNINGS -gt 0 ]; then
        echo -e "${YELLOW}⚠️  Validación completada con $WARNINGS advertencias${NC}"
    else
        echo -e "${GREEN}✅ Todos los skills validados correctamente${NC}"
    fi
    echo ""
    exit 0
fi
