#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PHASE="$1" || { echo "Usage: $0 <0-9|all>"; exit 1; }
RUNS_DIR="$ROOT_DIR/reports/runs"
mkdir -p "$RUNS_DIR"

log() { echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] $*"; }

run_phase() {
	local p="$1"
	local marker="$RUNS_DIR/phase-${p}.done"
	log "Executing Phase ${p}"
	case "$p" in
		0)
			log "Deliverables: docs/AGGREGATE_2/phase-0/*"
			;;
		1)
			log "Deliverables: phase-1 registry + routing-log schema"
			;;
		2)
			log "Deliverables: dual routing parity logs spec"
			;;
		3)
			log "Deliverables: policy DSL + CI gates config"
			;;
		4)
			log "Deliverables: UI tokens + AA/Perf budgets"
			;;
		5)
			log "Deliverables: dev-workflow integration mapping"
			;;
		6)
			log "Deliverables: cutover & rollback plan"
			;;
		7)
			log "Deliverables: SLOs + release checklist"
			;;
		8)
			log "Deliverables: security hardening + IR runbook"
			;;
		9)
			log "Deliverables: auditor/validator templates + retro"
			;;
		*)
			echo "Unknown phase: $p"; exit 2;
			;;
	esac
	date -u > "$marker"
	log "Marked $marker"
}

if [[ "$PHASE" == "all" ]]; then
	for p in 0 1 2 3 4 5 6 7 8 9; do
		run_phase "$p"
	done
else
	run_phase "$PHASE"
fi