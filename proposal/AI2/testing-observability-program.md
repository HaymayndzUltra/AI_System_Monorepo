### Testing & Observability Program

## Goals
- Standardize test strategies and observability SLOs per capability/domain.
- Use `workflow.audit` to continuously validate requirements.

## Framework
```yaml
testing:
  unit: min coverage thresholds per stack
  integration: contract tests (OpenAPI/GraphQL)
  e2e: critical flows + a11y audits
observability:
  metrics: LCP/INP/CLS, p95 latency, error rate, saturation
  tracing: distributed traces with service maps
  logging: structured, redacted, correlated
```

## Trigger ↔ Rule(s) ↔ Files/Outputs
| Trigger | Rules | Outputs |
|---|---|---|
| `ui.interaction` | `common-rule-ui-interaction-a11y-perf.mdc` | A11y/perf budgets + audits |
| `backend.api` | `4-master-rule-code-modification-safety-protocol.mdc` | Contract tests checklist |
| `workflow.audit` | `8-auditor-validator-protocol.mdc` | Validation report with SLO deltas |

## Risks
- Flaky E2E; mitigate with hermetic data and retries.

## Dependencies
- Test harnesses, trace/export infra.

## Success Metrics
- ≥80% unit coverage per service (adjust by risk).
- SLO dashboards per capability.

## Next Steps
- Define per-capability test matrices.
- Add CI jobs to publish audit artifacts.
