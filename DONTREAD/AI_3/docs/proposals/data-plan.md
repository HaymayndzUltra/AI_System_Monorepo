### Title
Data Plan: Contracts, Pipelines, and Validation

### Goal(s)
- Establish data contracts and pipelines with audit/validation gates.

### Why this route + Confidence
- Why: Data correctness requires explicit contracts and automated validation.
- Confidence: 0.83.

### Assumptions
1) Data sources include OLTP (Postgres) and analytics (Warehouse).
2) Pipelines use dbt/Airflow or equivalents.

### Plan
- Define data contracts per domain; version schemas.
- Build pipelines with testing at each hop; maintain lineage.
- Run audit/validation gates via auditor/validator protocol.

### Trigger → Rule(s) → Outputs → Gates

| Trigger | Rule(s) | Outputs | Gates |
|---|---|---|---|
| data.pipeline | (project-rules placeholder/optional) | Contracts, pipeline specs | Schema checks |
| validation.run | `8-auditor-validator-protocol.mdc` | Validation reports | Must pass |
| docs.sync | `5-master-rule-documentation-and-context-guidelines.mdc` | Updated docs | Docs checks |

### Alternatives
- Ad-hoc ETL: brittle; avoid.

### Risks and mitigations
- Schema drift (Med × Med): Version contracts and enforce CI checks.

### Dependencies
- Master rules, CI gates, lineage tooling.

### Success Metrics
- Contract violations detected in CI; data incident MTTR reduced.

### Next Steps
- Define concrete contracts per domain; link to `testing-strategy.md`.

