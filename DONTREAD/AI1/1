### Domain-Driven Trigger Router (DDR)

## Goals
- Map user intent to domains first (frontend, backend, data/ML, infra, docs), then to rules.
- Keep migration friction low by mirroring status quo triggers.

## Domains
```yaml
domains:
  frontend: [ui.foundation, ui.interaction, ui.premium]
  backend: [backend.api, backend.data]
  data_ml: [ml.pipeline, ml.inference]
  infra: [infra.cicd, infra.runtime]
  workflow: [discovery, planning, implementation, audit]
  overlays: [security.f8, docs.context, perf.core]
```

## Router Logic
- Stage 1: Domain classifier (frontend/backend/data_ml/infra/workflow).
- Stage 2: Within domain, select sub-capability by keywords.
- Always attach `security.f8` for backend/data_ml/infra unless explicitly safe.

## Backward-Compat (Old → New)
| Old | New Domain/Sub | Rules |
|---|---|---|
| foundation | frontend/ui.foundation | `common-rule-ui-foundation-design-system.mdc` |
| interaction | frontend/ui.interaction | `common-rule-ui-interaction-a11y-perf.mdc` |
| premium | frontend/ui.premium | `common-rule-ui-premium-brand-dataviz-enterprise-gated.mdc` |
| prd,discovery | workflow/discovery | `1-master-rule-context-discovery.mdc` |
| audit,validator | workflow/audit | `8-auditor-validator-protocol.mdc` |
| security | overlays/security.f8 | `F8-security-and-compliance-overlay.mdc` |

## Trigger ↔ Rule(s) ↔ Files/Outputs
| Trigger | Rules | Outputs |
|---|---|---|
| `frontend/ui.foundation` | UI Foundation + Code Quality | Tokens, contrast matrix |
| `backend/api` | Mod Safety + Docs | API spec, change notes |
| `infra/cicd` | Security Overlay + Release | CI policy checks, SBOM plan |
| `workflow/discovery` | Context Discovery + PRD | PRD document, risks |

## Examples
- "Add responsive grid and 8pt spacing": → `frontend/ui.foundation`
- "Protect admin routes with RBAC": → `backend/api` + `security.f8`
- "Set up canary deployments on k8s": → `infra/runtime` + `security.f8`

## Alternatives
- Capability-first (see CBR)
- Hybrid staged

## Risks
- Cross-domain features require multiple routes.
- Domain classifier ambiguity.

## Dependencies
- Domain taxonomy in router
- Overlay defaults per domain

## Success Metrics
- ≥95% correct domain classification.
- ≤1% cases needing manual override.

## Next Steps
- Ship domain classifier with confidence scores.
- Add fallback to capability-based selection when confidence < threshold.
