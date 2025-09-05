### Title
Testing Strategy (Unit → Integration → E2E/Contract)

### Goal(s)
- Define a layered testing approach aligned to capabilities and gates.

### Assumptions
1. Tests run in CI with parallelization; artifacts persisted.

### Alternatives
- E2E-only. Rejected: slow, fragile, low signal.

### Risks and mitigations
- Flakes (M×M): Stabilize via retries and isolation; observability for test runs.

### Dependencies
- Test frameworks per stack; CI runners; data fixtures.

### Trigger → Rule → Outputs → Gates
| Capability | Rule(s) | Outputs | Gates |
|---|---|---|---|
| code.quality | `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc` | Test policy | CI pass |
| code.modify.safety | `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` | Safety checks | Required |
| validation.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | Validation report | Validation pass |

### Success Metrics
- Coverage targets per layer; MTTR for failed tests; flake rate < 2%.

### Next Steps
- Define golden paths; add contract tests to critical boundaries.

### Why this route + Confidence
- Balanced speed and confidence.
- Confidence: 0.82.
