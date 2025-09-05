### Title
Strategy-A: Capability-First with Mandatory Overlays

### Goal(s)
- Route user intents to capabilities, then attach overlays and dev-workflow stages.

### Why this route + Confidence
- Why: Maximizes determinism and explainability across heterogeneous projects.
- Confidence: 0.90.

### Assumptions
1) Capability taxonomy from `capability-map.md` is authoritative.
2) F8 and modification safety are mandatory when applicable.

### Plan
- Classify intents → capabilities.
- Map capabilities → rules per `capability-map.md`.
- Execute via dev-workflow stages; gate via F8, safety, audit/validate.

### Alternatives
- Domain-first (see Strategy-B) or overlay-first (Strategy-C).

### Risks and mitigations
- Misclassification risk: include confidence + clarify when <0.70; default to safest overlay set.

### Dependencies
- `.cursor/rules/master-rules/*`, `.cursor/rules/common-rules/*`, `/.cursor/dev-workflow/*`.

### Trigger → Rule(s) → Outputs → Gates

| Trigger | Rule(s) | Outputs | Gates |
|---|---|---|---|
| classify | `1-master-rule-context-discovery.mdc` | Selected rules | N/A |
| overlay | `F8-security-and-compliance-overlay.mdc` | Security notes | Block on criticals |
| modify | `4-master-rule-code-modification-safety-protocol.mdc` | Safety checklist | Must pass |
| docs | `5-master-rule-documentation-and-context-guidelines.mdc` | Updated docs | Docs checks |
| audit/validate | `8-auditor-validator-protocol.mdc` | Reports | Must pass |

### Success Metrics
- Time-to-action reduced by ≥20%; zero criticals bypassed.

### Next Steps
- Ship as default router configuration; collect routing metrics.

