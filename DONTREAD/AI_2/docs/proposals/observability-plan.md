### Title
Observability Plan with SLOs

### Goal(s)
- Ensure metrics, traces, and logs support rapid detection and diagnosis with SLOs.

### Assumptions
- Project observability rule is placeholder/optional; fall back to master/common and docs.

### Plan
- Metrics: RED/USE metrics per service; error budgets.
- Traces: distributed tracing across key workflows.
- Logs: structured, PII-safe; correlation IDs.

### Trigger → Rule(s) → File(s)/Outputs
| Trigger | Rule(s) | Files/Outputs | Gates |
|---|---|---|---|
| observe.* (optional) | `.cursor/rules/project-rules/F10-observability.mdc` (placeholder/optional) | telemetry specs | Fallback to docs |
| docs.sync | `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | updated runbooks | Required |

### Alternatives
- Logs-only: low cost but low signal.

### Risks and Mitigations
- Cardinality explosion (M×M): sampling, aggregation, indexing strategies.

### Dependencies
- Observability backend; dashboards; alerting.

### Success Metrics
- p90 incident time-to-detect < 10m; time-to-resolve < 60m.

### Next Steps
- Define SLOs; create dashboards & alerts.

### Why this route + Confidence
Signals: multi-domain need; SLO-driven ops. Confidence: 0.8.

### References
- Master/common rules; project observability rule optional.
