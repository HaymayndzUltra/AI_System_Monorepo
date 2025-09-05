### Title
Strategy-B: Domain×Lifecycle-First

### Goal(s)
- Use domain boundaries and lifecycle phases to select rules; add overlays second.

### Why this route + Confidence
- Why: Fits organizations with strong domain ownership and stage gates.
- Confidence: 0.80.

### Assumptions
1) Domains are known (e.g., UI, API, Data, Infra).
2) Lifecycle stages follow dev-workflow.

### Plan
- Detect domain → map to rule bundles.
- Determine lifecycle stage via dev-workflow.
- Apply F8 and safety overlays; then audit/validate.

### Alternatives
- Capability-first (Strategy-A) for heterogeneous projects.

### Risks and mitigations
- Cross-domain features may slip (Med × Med): Add capability sanity checks.

### Dependencies
- Master/common rules; dev-workflow.

### Trigger → Rule(s) → Outputs → Gates

| Trigger | Rule(s) | Outputs | Gates |
|---|---|---|---|
| domain: UI | `common-rule-ui-*` | UI specs | AA/perf budgets |
| domain: API | `3-master-rule-code-quality-checklist.mdc` | API quality notes | Advisory |
| stage: execute | `7-dev-workflow-command-router.mdc` | Changes | Stage complete |
| overlays | `F8-security-and-compliance-overlay.mdc`, `4-master-rule-code-modification-safety-protocol.mdc` | Notes/checklist | Must pass |

### Success Metrics
- Reduced cross-domain regressions; predictable stage gate adherence.

### Next Steps
- Use when domain ownership maturity is high; otherwise prefer Strategy-A.

