### Title
Decision Matrix: Strategy A vs B vs C

### Goal(s)
- Compare three executable strategies aligned to master/common rules and dev-workflow.

### Criteria (weights)
- Delivery speed (0.25), Compliance/Security (0.30), Maintainability (0.20), Explainability (0.15), LoE (0.10)

### Scores (0–5)
- Strategy-A (Capability-first): Speed 4.0, Security 4.5, Maintainability 4.0, Explainability 4.5, LoE 3.5 → Weighted ≈ 4.18
- Strategy-B (Domain×Lifecycle-first): Speed 3.5, Security 4.0, Maintainability 4.5, Explainability 4.0, LoE 3.0 → Weighted ≈ 3.95
- Strategy-C (Policy-overlay-first): Speed 3.0, Security 4.8, Maintainability 3.5, Explainability 4.2, LoE 2.8 → Weighted ≈ 3.83

### Recommendation
- Choose Strategy-A for default; retain B/C as alternates for org/architecture constraints.

### Why this route + Confidence
- Why: Capability-first directly maps triggers to rules and outputs, maximizing explainability and speed with guardrails.
- Confidence: 0.86.

### Assumptions
1) Overlays are available and tunable via `ci/gates_config.yaml`.
2) Project rules are optional placeholders for now.

### Alternatives
- Hybrid A+B: Adds complexity; adopt only if domain boundaries are mature.

### Risks and mitigations
- Over-rotating on capability taxonomy (Med × Med): Periodic audits via `8-auditor-validator-protocol.mdc`.

### Dependencies
- Master/common rules and dev-workflow docs.

### Trigger → Rule(s) → Outputs → Gates

| Trigger | Rule(s) | Outputs | Gates |
|---|---|---|---|
| choose strategy | `7-dev-workflow-command-router.mdc` | Strategy doc | Stage complete |
| apply overlays | `F8-security-and-compliance-overlay.mdc` | Security notes | Block on criticals |

### Success Metrics
- Strategy chosen in ≤1 day; measurable gate adherence ≥95%.

### Next Steps
- Implement Strategy-A; track gates and outcomes; re-evaluate quarterly.

