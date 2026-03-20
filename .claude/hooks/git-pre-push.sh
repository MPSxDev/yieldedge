#!/bin/bash
# ============================================================================
# GIT PRE-PUSH HOOK - Runs npm audit before pushing
# ============================================================================
# This hook blocks pushes if npm audit finds vulnerabilities
# Install: cp .claude/hooks/git-pre-push.sh .git/hooks/pre-push && chmod +x .git/hooks/pre-push
# ============================================================================

# Skip audit if SKIP_AUDIT is set
if [ "$SKIP_AUDIT" = "1" ]; then
    echo "⚠️  Skipping npm audit (SKIP_AUDIT=1)"
    exit 0
fi

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

echo ""
echo -e "${CYAN}🔍 Running npm audit before push...${NC}"
echo ""

# Run npm audit and capture output
AUDIT_OUTPUT=$(npm audit 2>&1)
AUDIT_EXIT_CODE=$?

# Check for vulnerabilities
if [ $AUDIT_EXIT_CODE -eq 0 ]; then
    echo -e "${GREEN}✅ No vulnerabilities found. Proceeding with push...${NC}"
    echo ""
    exit 0
fi

# Parse vulnerability counts
HIGH_COUNT=$(echo "$AUDIT_OUTPUT" | grep -oE '[0-9]+ high' | grep -oE '[0-9]+' | head -1)
CRITICAL_COUNT=$(echo "$AUDIT_OUTPUT" | grep -oE '[0-9]+ critical' | grep -oE '[0-9]+' | head -1)
MODERATE_COUNT=$(echo "$AUDIT_OUTPUT" | grep -oE '[0-9]+ moderate' | grep -oE '[0-9]+' | head -1)

# Default to 0 if not found
HIGH_COUNT=${HIGH_COUNT:-0}
CRITICAL_COUNT=${CRITICAL_COUNT:-0}
MODERATE_COUNT=${MODERATE_COUNT:-0}

# Block on high or critical vulnerabilities
if [ "$CRITICAL_COUNT" -gt 0 ] || [ "$HIGH_COUNT" -gt 0 ]; then
    echo ""
    echo -e "${RED}╔═══════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${RED}║                                                               ║${NC}"
    echo -e "${RED}║   ⛔ PUSH BLOCKED - Security Vulnerabilities Found            ║${NC}"
    echo -e "${RED}║                                                               ║${NC}"
    echo -e "${RED}╚═══════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${YELLOW}Vulnerabilities found:${NC}"
    [ "$CRITICAL_COUNT" -gt 0 ] && echo -e "  ${RED}• Critical: $CRITICAL_COUNT${NC}"
    [ "$HIGH_COUNT" -gt 0 ] && echo -e "  ${RED}• High: $HIGH_COUNT${NC}"
    [ "$MODERATE_COUNT" -gt 0 ] && echo -e "  ${YELLOW}• Moderate: $MODERATE_COUNT${NC}"
    echo ""
    echo -e "${CYAN}To fix vulnerabilities, run:${NC}"
    echo ""
    echo "    npm audit fix"
    echo ""
    echo -e "${CYAN}For breaking changes that require manual review:${NC}"
    echo ""
    echo "    npm audit fix --force"
    echo ""
    echo -e "${CYAN}To see detailed vulnerability info:${NC}"
    echo ""
    echo "    npm audit"
    echo ""
    echo -e "${YELLOW}If you must push with vulnerabilities (not recommended):${NC}"
    echo ""
    echo "    SKIP_AUDIT=1 git push"
    echo ""
    exit 1
fi

# Allow push with only moderate/low vulnerabilities (with warning)
if [ "$MODERATE_COUNT" -gt 0 ]; then
    echo -e "${YELLOW}⚠️  Found $MODERATE_COUNT moderate vulnerabilities${NC}"
    echo -e "${YELLOW}   Consider running 'npm audit fix' when possible${NC}"
    echo ""
fi

echo -e "${GREEN}✅ No critical/high vulnerabilities. Proceeding with push...${NC}"
echo ""
exit 0
