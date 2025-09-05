### Capability Map

- Goal(s): Define capability→rules→triggers→outputs→gates so any project type can activate standardized plans with auditability.

### Assumptions
- Multi-domain projects (web, backend, data) may activate capabilities independently.
- Always-apply rules (Context Discovery, Security F8) must overlay all capabilities.
- Dev workflow gates from `.cursor/dev-workflow` are authoritative.

### Alternatives
- Keep ad-hoc triggers per team (inconsistent, low reuse).
- Only per-framework maps (misses cross-cutting concerns). Chosen: capability-based map with cross-cutting overlays.

### Risks (likelihood × impact) and mitigations
- Ambiguous triggers (M×M): Provide backward-compat table and examples.
- Over-gating slows delivery (M×M): Calibrate gates by risk; add fast-track for low-risk changes.
- Capability sprawl (L×M): Version and sunset unused capabilities.

### Dependencies
- `.cursor/rules/master-rules/*`, `.cursor/rules/common-rules/*`, `.cursor/rules/project-rules/*`
- `.cursor/dev-workflow/*`
- CI/CD with SAST/DAST/SBOM, test, and deploy gates.

### Capability → Rules → Triggers → Outputs → Gates

| Capability | MUST Rules | GUIDELINE Rules | Triggers | Files/Outputs | Audit/Validate Gates |
|---|---|---|---|---|---|
| Discovery & PRD | `master-rules/1-master-rule-context-discovery`, `project-rules/F1-discovery`, `2-master-rule-ai-collaboration-guidelines` | `5-master-rule-doc...` | discovery, prd | `docs/proposals/strategy-*.md`, `docs/proposals/decision-matrix.md` | `8-auditor-validator-protocol`: PRD completeness; sign-off |
| Planning & Tasks | `project-rules/F2-planning`, `7-dev-workflow-command-router` | `6-master-rule-complex-feature-context-preservation` | planning, tasks | `docs/proposals/milestones.md` | Task granularity, risk register present |
| Architecture & Contracts | `project-rules/F4-architecture`, `4-master-rule-code-modification-safety-protocol` | `3-master-rule-code-quality-checklist` | architecture, adr, contract | `docs/proposals/domain-architecture.md` | ADR presence, versioning policy |
| Implementation Strategy | `project-rules/F6-implementation` | `3-master-rule-code-quality-checklist` | implement, refactor | `docs/proposals/strategy-*.md` | Lint/type/test gates configured |
| UI Foundation | `common-rules/common-rule-ui-foundation-design-system` | `common-rules/common-rule-ui-premium-brand-dataviz-enterprise-gated` | foundation, tokens, AA | `docs/proposals/fe-ux-plan.md` | AA contrast, token export checks |
| UI Interaction & A11y/Perf | `common-rules/common-rule-ui-interaction-a11y-perf` |  | interaction, a11y, LCP, INP, CLS | `docs/proposals/fe-ux-plan.md` | Perf budgets, keyboard/ARIA audit |
| Data & ML | `project-rules/F5-data-ml` |  | schema, pipeline | `docs/proposals/data-plan.md` | Schema migration plan, lineage |
| Security & Compliance | `F8-security-and-compliance-overlay`, `project-rules/F8-security` |  | security, threat, audit | `docs/proposals/security-plan.md` | SAST/DAST/SBOM/no-secrets gates |
| Testing | `project-rules/F7-qa` |  | tests, coverage | `docs/proposals/testing-strategy.md` | Coverage thresholds, contract tests |
| Observability | `project-rules/F10-observability` |  | observability, SLO | `docs/proposals/observability-plan.md` | SLI/SLO configured, alert runbooks |
| Release | `project-rules/F9-release` |  | release, deploy | `docs/proposals/delivery-pipeline.md` | Rollback, promotion, change freeze |
| Enterprise & RBAC | `common-rule-ui-premium-brand-dataviz-enterprise-gated` |  | enterprise, RBAC, audit | `docs/proposals/security-plan.md` | Role mapping, audit trails |

### Success Metrics
- 100% proposals include mapping tables and gates.
- Audit gates executable in CI for selected capabilities.
- Time-to-approve < 2 reviews per document.

### Next Steps
- Adopt triggers in `docs/proposals/trigger-redesign.md`.
- Wire CI gates per `docs/proposals/delivery-pipeline.md`.
