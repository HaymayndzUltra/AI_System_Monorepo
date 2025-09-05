### Title
Strategy A: Capability-First with Progressive Enhancement

### Goal(s)
- Start with essential capabilities and add optional overlays per domain.

### Assumptions
1. Core [MUST] rules are stable and universal.
2. Optional UI rules apply only to UI-facing work.

### Alternatives
- Big bang full overlay. Rejected: risk concentration.

### Risks and mitigations
- Scope creep (M×M): Gate optional overlays by clear criteria.
- Fragmentation (L×M): Shared registry (capability map) as source of truth.

### Dependencies
- Capability map, delivery pipeline, security/testing/observability plans.

### Trigger → Rule → Outputs → Gates
| Capability | Rule(s) | Outputs | Gates |
|---|---|---|---|
| context.load | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` | Rule selection | — |
| security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | SEC notes | Block criticals |
| code.modify.safety | `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` | Change-safety checklist | Required |
| audit/validation | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | Audit/validation reports | Must pass |

### Success Metrics
- 20% faster time-to-action; zero critical security regressions.

### Next Steps
- Implement parity logs for overlays; add domain toggles.

### Why this route + Confidence
- Balances speed and safety via overlays.
- Confidence: 0.83.
