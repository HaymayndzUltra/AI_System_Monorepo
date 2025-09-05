### Hybrid Two-Stage Router (HTR)

## Goals
- Combine domain-first recall with capability-first precision.
- Provide deterministic overlays and clearer audit.

## Router Logic
```yaml
stages:
  - name: domain_stage
    output: domain_candidates
    strategy: coarse classification
  - name: capability_stage
    input: domain_candidates
    output: capabilities
    strategy: fine-grained pattern + embeddings
  - name: overlay_stage
    attach: [security.f8, docs.context, perf.core] per capability defaults and risk
```

## Decision Matrix
- If domain confidence ≥ 0.8 → restrict capability search within domain.
- Else → open capability search and log uncertainty.

## Backward-Compat
Same as CBR, but router tracks both mappings for audit and rollback.

## Trigger ↔ Rule(s) ↔ Files/Outputs
| Trigger | Rules | Outputs |
|---|---|---|
| `frontend/ui.interaction` | `common-rule-ui-interaction-a11y-perf.mdc`, `2-master-rule-ai-collaboration-guidelines.mdc` | A11y matrix, perf budget |
| `backend/api` | `4-master-rule-code-modification-safety-protocol.mdc`, `5-master-rule-documentation-and-context-guidelines.mdc` | Contract draft, docs |

## Examples
- "Refactor modal animations to reduce motion sickness" → domain: frontend; capability: `ui.interaction`; overlays: `perf.core`, `security.f8`.

## Alternatives
- Keep existing router with linting only.

## Risks
- Router complexity; requires robust telemetry.

## Dependencies
- Confidence-calibrated classifiers
- Telemetry + replay tooling

## Success Metrics
- ≥10% higher correct capability selection vs domain-only.
- Reduced false-positive security omissions to near-zero.

## Next Steps
- Implement staged router with A/B flag.
- Capture routing traces to `workflow.audit`.
