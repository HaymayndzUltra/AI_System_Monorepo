# Master Capability Registry (Draft)

## Purpose
Isang sentrong talahanayan: capability → (MUST/GUIDELINE) rules → triggers → expected outputs → audit/validate gates. Applicable sa web, mobile, backend/API, data/ML, CLI/desktop, infra.

## Capability → Rules (MUST/GUIDELINE) → Triggers → Outputs → Gates
| Capability | MUST Rules | GUIDELINE Rules | Triggers (old/new) | Files/Outputs | Gates |
|---|---|---|---|---|---|
| context.load | 1-master-rule-context-discovery | 2-ai-collaboration | rule, context, analyze → context.load | Loaded READMEs; selected rules | – |
| security.overlay | F8-security-and-compliance-overlay | – | security, compliance, threat, audit → security.overlay | Security checklist; STRIDE notes | Always on |
| code.modify.safety | 4-code-modification-safety-protocol | 3-code-quality-checklist | modify/edit/update/refactor → code.modify.safety | Change plan; validation checklist | A/V if risk ≥ med |
| code.quality | 3-code-quality-checklist | – | code/develop/implement/fix → code.quality | Naming, error handling, tests plan | – |
| docs.sync | 5-documentation-and-context-guidelines | – | readme/documentation → docs.sync | Updated docs/* (or plan) | – |
| ui.foundation | common-rule-ui-foundation-design-system, F3 | premium (optional) | foundation/tokens/AA → ui.foundation | tokens.json, style guide, AA proofs | A/V: AA checks |
| ui.interaction | common-rule-ui-interaction-a11y-perf, F3 | – | interaction/a11y/LCP/INP/CLS → ui.interaction | interaction spec, keyboard/ARIA map, perf checklist | Perf/a11y gates |
| ui.premium | ui-premium-brand-dataviz-enterprise-gated | F8 (enterprise) | premium/brand/dataviz/RBAC → ui.premium | premium deltas, enterprise pack | RBAC/audit |
| backend.api | F4-architecture, 4-mod-safety, 5-docs | 3-quality | architecture/adr/contract → backend.api | ADRs; OpenAPI vX.Y; mocks/tests | Contract tests |
| data.pipeline | F5-data-ml, F8 | – | data/schema/pipeline → data.pipeline | schema versions; lineage docs | Data quality gates |
| ml.train | F5 (ML), F8 | – | model/train/inference → ml.train | training plan; eval protocols | Safety/perf gates |
| infra.iac | F8 + release policies | – | infra/k8s/terraform → infra.iac | tfplan/manifests; policy checks | Policy‑as‑code |
| workflow.bootstrap | dev-workflow router | – | bootstrap/setup → workflow.bootstrap | /.cursor/dev-workflow/0-bootstrap | – |
| workflow.plan | dev-workflow router, F2-planning | – | prd/requirements → workflow.plan | PRD outline; planning docs | A/V on PRD |
| workflow.taskgen | dev-workflow router | – | task generation → workflow.taskgen | tasks-*.md | – |
| workflow.execute | dev-workflow router, F6-implementation | 3-quality, 4-mod-safety | execute/implement → workflow.execute | execution plan per tasks | A/V per parent task |
| workflow.retro | dev-workflow router, F10-observability | – | retrospective → workflow.retro | retro notes; SLO learnings | – |
| audit.run | 8-auditor-validator-protocol | F8 | audit {scope} @ {SHA} → audit.run | reports/audit-*.md | – |
| validation.run | 8-auditor-validator-protocol | F8 | validate {scope} using {audit} → validation.run | reports/validation-*.md | GO‑gate |
| test.unit | QA/testing framework (future), 3-quality | – | testing/qa → test.unit | junit.xml | CI gate |
| test.integration | QA/testing framework (future) | – | testing/qa → test.integration | junit.xml/logs | CI gate |
| test.e2e | QA/testing framework (future) | – | testing/qa → test.e2e | artifacts/screens | RC gate |
| coverage.enforce | 3-quality + CI policy | – | coverage → coverage.enforce | coverage reports | CI gate |
| release.prepare/deploy | F9-release, F8 | – | release/deploy → release.* | release notes, canary plan | SLO/rollback gates |
| observe.metrics/traces/logs | F10-observability | – | observability/retro → observe.* | dashboards, SLO doc | – |

