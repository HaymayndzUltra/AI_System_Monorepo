### Title
Strategy B: Domain-First Tracks with Shared Gates

### Goal(s)
- Maintain separate tracks for UI, API, Data/ML, and Infra while sharing MUST gates.

### Assumptions
1. Teams may deliver on different cadences.

### Alternatives
- Single unified track only. Rejected: bottlenecks.

### Risks and mitigations
- Divergent standards (M×M): Shared MUST gate templates; periodic audits.

### Dependencies
- Dev-workflow router, security and quality rules.

### Trigger → Rule → Outputs → Gates
| Capability | Rule(s) | Outputs | Gates |
|---|---|---|---|
| workflow.router | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | Protocol refs | — |
| code.quality | `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc` | Quality checklist | CI pass |
| security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | SEC notes | Block criticals |

### Success Metrics
- Independent velocity per track; consistent release quality.

### Next Steps
- Define track-specific templates and handoffs.

### Why this route + Confidence
- Preserves autonomy with guardrails.
- Confidence: 0.80.
