### Title
Decision Matrix: Capabilities, Rules, and Overlays

### Goal(s)
- Provide a structured matrix for selecting approaches across domains and lifecycles with clear trade-offs.

### Assumptions
- Master/common rules are authoritative; project rules are optional placeholders.
- Decisions produce only documentation artifacts.

### Decision Criteria
- Governance coverage (security, safety, audit)
- Complexity fit (simple vs complex features)
- Time-to-value vs long-term maintainability
- Observability and release readiness

### Matrix (excerpt)
| Option | When to choose | Pros | Cons | Rules/Gates |
|---|---|---|---|---|
| Capability-first routing | Multi-domain, ambiguous intents | Deterministic, extensible | Needs taxonomy upkeep | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc`, `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc`, `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` |
| Strict mod-safety gating | Risky refactors | Reduces regressions | Slower velocity | `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` |
| UI AA/perf gating | UI-heavy apps | Quality UX | Dev effort | `.cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc`, `.cursor/rules/common-rules/common-rule-ui-interaction-a11y-perf.mdc` |
| Audit/validate-first | Regulated domains | Compliance | Slower feedback | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` |

### Trigger → Rule(s) → File(s)/Outputs
| Trigger | Rule(s) | Files/Outputs | Gates |
|---|---|---|---|
| "decision matrix" | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc`, `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc`, `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc`, `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc`, `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc`, `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | `/workspace/DONTREAD/AI_2/docs/proposals/decision-matrix.md` | Critical gates enforced |

### Alternatives
- Rule-light, team-convention approach
- Fully centralized governance council

### Risks and Mitigations
- Over-governance (M×M): right-size gates per capability.
- Under-specification (M×H): enforce minimum gates (F8, safety, docs).

### Dependencies
- Team alignment on capabilities and gates.

### Success Metrics
- Decisions trace to rules and outcomes 100% of the time.
- <5% decisions require rework due to missing gates.

### Next Steps
- Adopt this matrix in design reviews.

### Why this route + Confidence
Signals: need for explainability and repeatability. Confidence: 0.82.

### References
- `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc`
- `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc`
- `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc`
- `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc`
- `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc`
- `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc`
