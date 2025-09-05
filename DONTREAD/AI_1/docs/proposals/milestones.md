### Title
Milestones & Timeline

### Goal(s)
- Provide a milestone breakdown with acceptance gates per capability.

### Assumptions
1. Timeboxes are indicative; adjust with validated learning.

### Alternatives
- Single delivery date. Rejected: high risk.

### Risks and mitigations
- Slippage (M×M): Gate by outcomes, not outputs; cut scope safely.

### Dependencies
- All preceding proposals; team availability; CI readiness.

### Milestones
1. Week 1–2: Capability map, delivery pipeline, security/testing plans → docs gates.
2. Week 3–4: Domain architecture and stack decisions → ADRs, contracts.
3. Week 5–6: Implement CI gates (docs-only scope this session) → dry runs.
4. Week 7–8: Observability SLOs and dashboards → playbooks.

### Trigger → Rule → Outputs → Gates
| Capability | Rule(s) | Outputs | Gates |
|---|---|---|---|
| context.load | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` | Milestone docs | — |
| security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | SEC notes | Block criticals |
| docs.sync | `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | Updated docs | Docs lint |

### Success Metrics
- Milestones met within ±20% timebox; gates passed at each stage.

### Next Steps
- Confirm staffing and calendars; align dependencies; schedule reviews.

### Why this route + Confidence
- De-risks via staged value delivery.
- Confidence: 0.82.
