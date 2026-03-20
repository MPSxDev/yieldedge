#!/bin/bash
# ============================================================================
# GIT PRE-COMMIT HOOK - Bloquea commits directos
# ============================================================================
# Este hook fuerza el uso de safe-commit.sh para todos los commits
# Instalar: cp .claude/hooks/git-pre-commit.sh .git/hooks/pre-commit
# ============================================================================

# Si SAFE_COMMIT está seteado, permitir el commit (viene de safe-commit.sh)
if [ "$SAFE_COMMIT" = "1" ]; then
    exit 0
fi

# Colores
RED='\033[0;31m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

echo ""
echo -e "${RED}╔═══════════════════════════════════════════════════════════════╗${NC}"
echo -e "${RED}║                                                               ║${NC}"
echo -e "${RED}║   ⛔ COMMIT DIRECTO BLOQUEADO                                 ║${NC}"
echo -e "${RED}║                                                               ║${NC}"
echo -e "${RED}║   Este proyecto requiere usar el sistema de commit seguro.   ║${NC}"
echo -e "${RED}║                                                               ║${NC}"
echo -e "${RED}╚═══════════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${CYAN}Para hacer commit, usa:${NC}"
echo ""
echo "    .claude/scripts/safe-commit.sh"
echo ""
echo -e "${YELLOW}Si realmente necesitas hacer commit directo (no recomendado):${NC}"
echo ""
echo "    SAFE_COMMIT=1 git commit -m 'mensaje'"
echo ""

exit 1
