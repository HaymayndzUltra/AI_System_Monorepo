### Title
Data & ML Plan with Governance Overlays

### Goal(s)
- Define data schema, pipeline, and ML experiment governance with security and validation gates.

### Assumptions
- Project rules for data/ML are placeholders; fall back to master/common gates.

### Plan
- Data modeling: versioned schemas; migrations; lineage.
- Pipelines: idempotent tasks; backfills; SLAs.
- ML: experiment tracking; model eval; drift monitoring.

### Trigger → Rule(s) → File(s)/Outputs
| Trigger | Rule(s) | Files/Outputs | Gates |
|---|---|---|---|
| data schema/pipeline | `.cursor/rules/project-rules/F5-data-ml.mdc` (placeholder/optional) | data specs | Fallback to master/common |
| audit/validate | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | audit/validation reports | Blocks on criticals |
| security | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | [SECURITY CHECK] logs | Blocks criticals |

### Alternatives
- Free-form analytics pipelines: flexible but brittle.

### Risks and Mitigations
- Data quality regressions (M×H): contract tests; assertions.
- PII leakage (L×H): data minimization; masking; access controls.

### Dependencies
- Data warehouse; orchestration; catalog/lineage tools.

### Success Metrics
- <1% failed data quality checks on main; ML drift detected <24h.

### Next Steps
- Define schema versioning and dq checks; set audit cadence.

### Why this route + Confidence
Signals: cross-domain requirements with data governance. Confidence: 0.78.

### References
- Master/common rules cited above; project data rules are placeholders.
