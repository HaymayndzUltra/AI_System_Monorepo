### Title
Milestones and Acceptance Gates

### Goal(s)
- Define milestones with measurable acceptance criteria and gates.

### Why this route + Confidence
- Why: Aligns delivery with enforceable gates and clear definitions of done.
- Confidence: 0.84.

### Milestones
- M1: Capability Map approved → Gates: Docs sync pass; F8 review N/A.
- M2: Delivery Pipeline configured → Gates: Safety protocol integrated; CI gates wired.
- M3: Strategy selected (A/B/C) → Gates: decision matrix signed.
- M4: Domain architecture drafted → Gates: contracts identified.
- M5: UX tokens and interaction specs → Gates: AA/INP budgets set.
- M6: Data contracts and pipelines → Gates: validation configured.
- M7: Security overlay operational → Gates: no criticals.
- M8: Observability dashboards and SLOs → Gates: SLO definitions present.
- M9: Testing layers operational → Gates: coverage and flake rate goals.

### Trigger → Rule(s) → Outputs → Gates

| Milestone | Rule(s) | Outputs | Gates |
|---|---|---|---|
| M1 | `5-master-rule-documentation-and-context-guidelines.mdc` | capability-map.md | Docs checks |
| M2 | `4-master-rule-code-modification-safety-protocol.mdc` | delivery-pipeline.md | Safety gates |
| M3 | `7-dev-workflow-command-router.mdc` | decision-matrix.md | Stage complete |
| M4 | (rules per domains) | domain-architecture.md | Contract checklist |
| M5 | `common-rule-ui-*` | fe-ux-plan.md | AA/Perf |
| M6 | `8-auditor-validator-protocol.mdc` | data-plan.md | Validation |
| M7 | `F8-security-and-compliance-overlay.mdc` | security-plan.md | Block on criticals |
| M8 | (project-rules placeholder/optional) | observability-plan.md | SLO checks |
| M9 | (future testing rules) | testing-strategy.md | Gate pass rates |

### Alternatives
- Date-only milestones: lack enforceability; avoid.

### Risks and mitigations
- Gate sprawl (Med × Low): consolidate via `ci/gates_config.yaml`.

### Dependencies
- CI gates; telemetry; rule set.

### Success Metrics
- Milestones achieved on time; gate adherence ≥95%.

### Next Steps
- Baseline gates; track metrics in routing log.

