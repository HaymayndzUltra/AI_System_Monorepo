### Title
Data & ML Plan

### Goal(s)
- Define data ingestion, storage, processing, and ML training/evaluation paths.

### Assumptions
1. Initial scope focuses on governance and contracts; no live pipelines deployed now.
2. Data classifications and retention policies are defined with privacy rules.

### Alternatives
- Build pipelines first then govern. Rejected: compliance risk.

### Risks and mitigations
- Data sprawl (M×H): Catalog + ownership; minimization by design.
- Model drift (M×M): Continuous evaluation; shadow deployments.

### Dependencies
- Storage, compute, catalogs; privacy/legal input.

### Trigger → Rule → Outputs → Gates
| Capability | Rule(s) | Outputs | Gates |
|---|---|---|---|
| context.load | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` | Data inventory | — |
| security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | Threat model | Block criticals |
| docs.sync | `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | Data contracts | Docs lint |
| audit/validation | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | Audit/validation | Must pass |

### Success Metrics
- Classified datasets; access controls; evaluation dashboards.

### Next Steps
- Define schemas; add DQ checks; plan training/evaluation schedules.

### Why this route + Confidence
- Privacy and governance-first for safer evolution.
- Confidence: 0.81.
