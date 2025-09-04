#!/usr/bin/env bash
set -euo pipefail
cd /workspace
echo "[BE AUDIT] Validating OpenAPI..."
npx -y swagger-cli validate openapi/api-v1.0.yaml >/dev/null && echo "OK"
echo "[BE AUDIT] Running core tests..."
cd src/backend/core && npm test --silent || exit 1
cd /workspace
echo "[BE AUDIT] Writing report..."
mkdir -p reports
commit=$(git rev-parse --short HEAD)
ts=$(date -u +%Y%m%dT%H%M%SZ)
cat > reports/audit-backend-HEAD.md <<EOF
# Backend Audit @ HEAD

- Commit: ${commit}
- Date: ${ts}

OpenAPI: PASS
Tests: PASS
EOF
echo "[BE AUDIT] Done -> reports/audit-backend-HEAD.md"