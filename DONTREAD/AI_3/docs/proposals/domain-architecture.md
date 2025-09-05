### Title
Domain Architecture (DDD-Aligned) with Capability and Overlay Integration

### Goal(s)
- Define domain boundaries and contracts that integrate with capability routing and overlays.

### Why this route + Confidence
- Why: Domain clarity reduces coupling and improves testability; overlays ensure non-functional requirements.
- Confidence: 0.82.

### Assumptions
1) Domains: UI, Identity/Auth, Catalog, Orders, Payments, Data Platform, Infra.
2) Contracts: API schemas and data contracts are versioned.

### Domain Boundaries
- UI: Presentational, accessibility, performance.
- Identity/Auth: Authentication, authorization, audit logging.
- Catalog/Orders/Payments: Core business services, idempotent APIs, SLO-backed.
- Data Platform: Pipelines, warehousing, ML features.
- Infra: IaC, networking, secrets, observability.

### Trigger → Rule(s) → Outputs → Gates

| Domain | Trigger | Rule(s) | Outputs | Gates |
|---|---|---|---|---|
| UI | ui.foundation, ui.interaction | `common-rule-ui-*.mdc` | Tokens, specs | AA/Perf |
| Identity/Auth | security.overlay | `F8-security-and-compliance-overlay.mdc` | Threat model | Criticals block |
| Core Services | code.modify.safety | `4-master-rule-code-modification-safety-protocol.mdc` | Safety checklist | Must pass |
| Data Platform | data.pipeline, validation.run | `8-auditor-validator-protocol.mdc` | Contracts, validation | Must pass |
| Infra | infra.iac | F8 overlay | Policy notes | Must pass |

### Alternatives
- Microservices-first: High overhead; use only if scale justifies.

### Risks and mitigations
- Boundary erosion (Med × Med): Enforce contracts and ownership; audit quarterly.

### Dependencies
- Master/common rules; dev-workflow.

### Success Metrics
- Fewer cross-domain defects; contract change lead time within limits.

### Next Steps
- Define concrete APIs and data contracts; link to `data-plan.md` and `testing-strategy.md`.

