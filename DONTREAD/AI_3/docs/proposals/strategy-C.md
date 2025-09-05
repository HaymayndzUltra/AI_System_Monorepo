### Title
Strategy-C: Policy-Overlay-First

### Goal(s)
- Enforce security and safety policies first; select execution path second.

### Why this route + Confidence
- Why: Best for highly regulated environments; compliance is non-negotiable.
- Confidence: 0.78.

### Assumptions
1) F8 overlay policies are strict and tuned.
2) Safety protocol is fully adopted.

### Plan
- Apply F8 and safety checks early.
- Route to capabilities/domains only after policy clearance.

### Alternatives
- Capability-first (Strategy-A) for faster iteration.

### Risks and mitigations
- Slower delivery (Med × Med): Parallelize planning while policies run; cache approvals.

### Dependencies
- F8 overlay, safety protocol, auditor/validator.

### Trigger → Rule(s) → Outputs → Gates

| Trigger | Rule(s) | Outputs | Gates |
|---|---|---|---|
| security first | `F8-security-and-compliance-overlay.mdc` | Security notes | Block on criticals |
| safety first | `4-master-rule-code-modification-safety-protocol.mdc` | Safety checklist | Must pass |
| then route | `7-dev-workflow-command-router.mdc` | Selected path | Stage complete |

### Success Metrics
- Zero critical policy violations; acceptable lead time maintained.

### Next Steps
- Adopt in regulated projects; otherwise prefer Strategy-A.

