### Title
Domain Architecture: Modular Boundaries with Shared Services

### Goal(s)
- Define domain boundaries and integration patterns across UI, API, data, and infra.

### Assumptions
1. Start modular-monolith; extract services when justified.
2. Asynchronous messaging optional; prefer simple APIs first.

### Alternatives
- Microservices from day 0. Rejected: operational overhead.

### Risks and mitigations
- Over-segmentation (M×M): Extraction by SLO/throughput triggers.
- Hidden dependencies (M×M): Contract-first and ADRs.

### Dependencies
- ADR process; CI contracts; observability stack.

### Architecture Views
- Context: users, systems, trust boundaries.
- Container: UI app(s), API gateway, core services, data pipeline, observability.
- Component: modules per domain (auth, billing, content, analytics).
- Code: layering (presentation, application, domain, infrastructure).

### Trigger → Rule → Outputs → Gates
| Capability | Rule(s) | Outputs | Gates |
|---|---|---|---|
| context.load | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` | Context/ADR inputs | — |
| security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | Threat model notes | Block criticals |
| code.modify.safety | `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` | Change plan | Checklist pass |
| audit.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | Architecture audit | Audit pass |

### Success Metrics
- Clear owners per boundary; <2 cross-boundary violations per quarter.

### Next Steps
- Draft ADRs; define service extraction criteria; add contract tests.

### Why this route + Confidence
- Evolves safely with measured extractions.
- Confidence: 0.83.
