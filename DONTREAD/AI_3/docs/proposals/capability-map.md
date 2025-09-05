### Title
Capability Map: Capability-First Routing across Project Types

### Goal(s)
- Provide a single, capability-first map from user triggers to rules and outputs applicable to web, mobile, backend/API, data/ML, CLI/desktop, and infra.
- Make security and modification safety overlays default gates.
- Ensure explainable, auditable routing with explicit MUST vs GUIDELINE rules.

### Why this route + Confidence
- Why: The session asks for multi-project applicability and explicit Trigger → Rule(s) → Outputs → Gates mapping. A capability-first approach aligns with `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` and supports overlays like `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc`.
- Key signals: keywords "capability", "triggers", "rules", "overlays", multi-domain; presence of master/common rules and dev-workflow; prior internal doc at `/workspace/0`.
- Confidence: 0.90 (no clarify needed; assumptions below cover project-rule placeholders).

### Assumptions
1) No project-specific rules exist in `/workspace/.cursor/rules/project-rules`; treat project-rules as optional placeholders.
2) The dev-workflow router is authoritative for lifecycle orchestration.
3) All outputs are documentation-only for this session; no code changes.
4) Security overlay (F8) is always-on when security/compliance risk is non-trivial.

### Alternatives
- Domain×Lifecycle-first: Useful but adds coupling to project structure; retained as Strategy-B.
- Policy-overlay-first: Prioritizes compliance but can slow delivery; retained as Strategy-C.
- Keep legacy trigger list only: Lower clarity and weaker explainability.

### Risks (likelihood × impact) and mitigations
- Misclassification of capability (Med × Med): Add confidence scores and clarify prompts when <0.70; document assumptions.
- Over-application of overlays (Low × Med): Scope overlays via gates_config and per-capability policies.
- Gaps in project-specific rules (High × Low): Fall back to master/common rules; mark as optional.

### Dependencies
- `.cursor/rules/master-rules/*`, `.cursor/rules/common-rules/*`
- `.cursor/dev-workflow/*` including `ci/gates_config.yaml` and `ci/run_gates.py`

### Capability Taxonomy
- code.edit, code.quality, code.modify.safety, docs.sync, context.load, ui.foundation, ui.interaction, ui.premium, workflow.bootstrap, workflow.plan, workflow.taskgen, workflow.execute, workflow.retro, workflow.parallel, security.overlay, security.audit, audit.run, validation.run, test.unit, test.integration, test.e2e, release.prepare, release.deploy, observe.metrics, observe.traces, observe.logs, data.pipeline, ml.train, infra.iac

### Master Mapping Table: Capability → Rules (MUST/GUIDELINE) → Triggers → Files/Outputs → Gates

| Capability | Rules (MUST/GUIDELINE) | Trigger keywords | Files/Outputs | Gates |
|---|---|---|---|---|
| context.load | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` [MUST], `2-master-rule-ai-collaboration-guidelines.mdc` [MUST] | rule, context, analyze | Loaded READMEs; selected rules list | N/A |
| security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` [MUST] | security, compliance, governance, threat | Security check notes, risks | Block on criticals |
| code.modify.safety | `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` [MUST] | modify, edit, change, update, implement | Change plan; validation checklist | Safety gates per `ci/gates_config.yaml` |
| docs.sync | `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` [MUST] | readme, documentation, structure | Updated docs under `docs/proposals/*` | Docs completeness checks |
| code.quality | `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc` [GUIDELINE] | code, refactor, quality | Lint/test readiness notes | Quality gates (advisory) |
| complex-feature | `.cursor/rules/master-rules/6-master-rule-complex-feature-context-preservation.mdc` [GUIDELINE] | complex, feature, algorithm | Context bundle; ADR pointers | Advisory context checks |
| workflow.* | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` [MUST] | bootstrap, plan, tasks, execute, retro | `/.cursor/dev-workflow/*.md` outputs | Stage gates per dev-workflow |
| audit.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` [MUST] | audit {framework} @ {HEAD} | `reports/audit-*.md` | Audit must pass |
| validation.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` [MUST] | validate {framework} using {audit_report} | `reports/validation-*.md` | Validation must pass |
| ui.foundation | `.cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc` [MUST] | tokens, AA, grid, typography | `tokens.json`, comps spec | AA contrast budgets |
| ui.interaction | `.cursor/rules/common-rules/common-rule-ui-interaction-a11y-perf.mdc` [MUST] | aria, keyboard, perf, motion | Interaction specs | INP/LCP budgets |
| ui.premium | `.cursor/rules/common-rules/common-rule-ui-premium-brand-dataviz-enterprise-gated.mdc` [GUIDELINE] | brand, dataviz, RBAC | Premium UX notes | Guardrails/feature gates |
| test.unit | (Future testing rules) [GUIDELINE] | unit, jest, pytest | junit.xml | Unit tests pass |
| test.integration | (Future testing rules) [GUIDELINE] | integration | reports | Contracts pass |
| test.e2e | (Future testing rules) [GUIDELINE] | e2e | reports | E2E green |
| release.prepare | (Future release rules) [GUIDELINE] | release notes, changelog | notes/changelog | Approvals |
| release.deploy | (Future release rules) [GUIDELINE] | deploy | release artifacts | Canary/rollback |
| observe.metrics | (Project rules placeholder/optional) | metrics | dashboards | SLO gates (optional) |
| observe.traces | (Project rules placeholder/optional) | tracing | trace config | Latency budgets |
| observe.logs | (Project rules placeholder/optional) | logging | log config | PII redaction checks |
| data.pipeline | (Project rules placeholder/optional) | schema, ETL | data contracts | Schema registry checks |
| ml.train | (Project rules placeholder/optional) | training | model artifacts | Reproducibility |
| infra.iac | (Project rules placeholder/optional) | terraform, cloud | IaC plans | Policy-as-code |

### Trigger → Rule(s) → Expected Outputs → Gates (Quick Reference)

| Trigger | Rule(s) | Expected Outputs | Gates |
|---|---|---|---|
| modify, edit, implement | `4-master-rule-code-modification-safety-protocol.mdc` | Change plan, safety checklist | Safety gates |
| security, compliance | `F8-security-and-compliance-overlay.mdc` | Security notes, threat model | Block on criticals |
| docs, readme | `5-master-rule-documentation-and-context-guidelines.mdc` | Updated docs | Docs checks |
| audit, validate | `8-auditor-validator-protocol.mdc` | Audit/validation reports | Must pass |
| UI tokens, AA | `common-rule-ui-foundation-design-system.mdc` | Tokens/spec | AA budgets |
| interaction, perf | `common-rule-ui-interaction-a11y-perf.mdc` | Interaction spec | INP/LCP |

### Success Metrics
- ≥95% correct routing vs human baseline; <2% security false negatives.
- 100% proposals include MUST sections and mapping tables.
- Security criticals block; docs completeness ≥90%.

### Next Steps
- Adopt this map in delivery pipeline (see `delivery-pipeline.md`).
- Configure `ci/gates_config.yaml` thresholds for overlays.
- Pilot Strategy-A; compare against B/C in `decision-matrix.md`.

