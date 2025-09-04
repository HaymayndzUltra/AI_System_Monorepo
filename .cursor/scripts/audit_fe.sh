#!/usr/bin/env bash
set -euo pipefail
cd /workspace
mkdir -p reports
commit=$(git rev-parse --short HEAD)
ts=$(date -u +%Y%m%dT%H%M%SZ)
report="reports/audit-FE-${commit}-${ts}.md"
echo "[FE AUDIT] Checking frontend presence..."
missing=0
for p in src/frontend design/tokens docs/design; do
  if [ ! -e "$p" ]; then
    echo "MISSING: $p"; missing=1
  fi
done
{
  echo "# Frontend Audit @ HEAD"
  echo
  echo "- Commit: ${commit}"
  echo "- Date: ${ts}"
  echo
  echo "Presence:"
  echo "- src/frontend: $( [ -e src/frontend ] && echo OK || echo MISSING )"
  echo "- design/tokens: $( [ -e design/tokens ] && echo OK || echo MISSING )"
  echo "- docs/design: $( [ -e docs/design ] && echo OK || echo MISSING )"
  echo
  echo "Tasks: see tasks-frontend.md (pending items remain)"
} > "$report"
echo "[FE AUDIT] Done -> $report"
exit $missing