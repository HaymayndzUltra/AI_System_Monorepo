### Title
Testing Strategy across Domains

### Goal(s)
- Establish testing layers and gates applicable to all project types.

### Assumptions
- Critical paths require audit/validate gates.

### Strategy
- Unit: fast, isolated; coverage floors.
- Integration: contract tests at boundaries.
- E2E: user journeys or system workflows.
- Non-functional: performance, accessibility (UI), security scans.

### Trigger → Rule(s) → File(s)/Outputs
| Trigger | Rule(s) | Files/Outputs | Gates |
|---|---|---|---|
| validation.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | validation report | Blocks on failures |
| docs.sync | `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | updated test docs | Required for changes |

### Alternatives
- E2E-heavy only: slow feedback; brittle.

### Risks and Mitigations
- Flaky tests (M×M): quarantine + fix; invest in integration tests.

### Dependencies
- Test frameworks per stack; CI runners.

### Success Metrics
- Stable test suite (flakiness <2%); fast feedback (<10m on PRs).

### Next Steps
- Define contracts and test matrices per domain.

### Why this route + Confidence
Signals: need for universal, measurable testing. Confidence: 0.83.

### References
- `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc`
- `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc`
