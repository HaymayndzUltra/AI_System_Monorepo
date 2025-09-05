### Title
Observability Plan (Metrics, Traces, Logs)

### Goal(s)
- Establish SLOs and implement metrics, tracing, and logging standards.

### Assumptions
1. Centralized telemetry backend available or planned (e.g., OTEL-compatible).

### Alternatives
- Logging only. Rejected: lacks correlation and SLO visibility.

### Risks and mitigations
- Cardinality explosion (M×M): Label discipline; sampling and retention tiers.

### Dependencies
- Telemetry SDKs; dashboards; alerting platform.

### Trigger → Rule → Outputs → Gates
| Capability | Rule(s) | Outputs | Gates |
|---|---|---|---|
| observe.metrics | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | SLOs, dashboards | Alert runbooks |
| observe.traces | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | Trace configs | Sampling policies |
| observe.logs | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | Log schema | PII redaction |
| security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | Privacy notes | Block criticals |

### Success Metrics
- Defined SLOs for key flows; alert fatigue below threshold.

### Next Steps
- Instrument golden paths; create tiered dashboards and alerts.

### Why this route + Confidence
- Ties directly to SLO-driven operations.
- Confidence: 0.80.
