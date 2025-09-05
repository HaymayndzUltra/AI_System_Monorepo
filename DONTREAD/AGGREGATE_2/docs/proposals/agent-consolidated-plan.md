### Consolidated Plan: Hybrid Router + Governance (AGGREGATE_2)

#### Goals
- Unify AI_1/AI_2/AI_3 into a single capability-first router with Domain×Lifecycle disambiguation and policy overlays (Security F8, Modification Safety, Audit/Validate, Docs Sync, UI AA/Perf, Observability, Release).
- Provide a capability registry, backward-compat mapping, baseline policy DSL, and adapter sketches per stack.

#### Assumptions
- `.cursor/rules/master-rules/*` and `.cursor/rules/common-rules/*` are authoritative; `.cursor/rules/project-rules/*` are placeholders/optional.
- Outputs are documentation-only.

#### Alternatives
- Domain×Lifecycle-first (good in mature orgs) and Policy-first (regulated). Kept as Strategy-B/C; default to Strategy-A (capability-first) for broader fit.

#### Router Strategy (Precedence)
1) Capability-First classification → 2) Domain × Lifecycle via `.cursor/dev-workflow/*` → 3) Policy overlays: `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc`, `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc`, `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc`, `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc`, UI common rules.

#### Capability Registry (Draft)
| Capability | Rules ([MUST]/[GUIDELINE]) FULL PATHS | Triggers | Outputs | Audit/Validate Gates |
|---|---|---|---|---|
| context.load | [MUST] `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` | rule, context, analyze | Selected rules list | — |
| collab.resolve | [MUST] `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc` | conflict, clarify, proceed, how to | Protocol adherence | — |
| code.quality | [MUST] `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc` | code, refactor, quality | Quality checklist | CI must pass |
| code.modify.safety | [MUST] `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` | modify, edit, change, update, implement | Change plan; validation checklist | Safety checklist must pass |
| docs.sync | [MUST] `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | readme, documentation, docs | Updated docs | Docs lint required |
| complex.context | [MUST] `.cursor/rules/master-rules/6-master-rule-complex-feature-context-preservation.mdc` | complex, algorithm, api-integration | Context bundle; invariants | Reviewer checklist |
| workflow.* | [MUST] `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | bootstrap, plan, taskgen, execute, retro | Dev-workflow artifacts | Stage gates |
| audit.run | [MUST] `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | audit {framework}@{rev} | `reports/audit-*.md` | Audit gate must pass |
| validation.run | [MUST] `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | validate using {audit} | `reports/validation-*.md` | Validation gate must pass |
| security.overlay | [MUST] `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | security, compliance, threat | `[SECURITY CHECK]` notes | Block on criticals |
| ui.foundation | [GUIDELINE] `.cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc` | foundation, tokens, AA | tokens, grids | AA contrast |
| ui.interaction | [GUIDELINE] `.cursor/rules/common-rules/common-rule-ui-interaction-a11y-perf.mdc` | interaction, aria, keyboard, perf | interaction/perf specs | INP/LCP budgets |
| ui.premium | [GUIDELINE] `.cursor/rules/common-rules/common-rule-ui-premium-brand-dataviz-enterprise-gated.mdc` | premium, brand, RBAC | premium specs | Preserve AA/perf |
| data.pipeline | [GUIDELINE] `.cursor/rules/project-rules/F5-data-ml.mdc` (placeholder/optional) | data schema, pipeline | data specs | Falls back to master/common |
| observe.* | [GUIDELINE] `.cursor/rules/project-rules/F10-observability.mdc` (placeholder/optional) | observability | telemetry specs | Falls back to docs |
| release.* | [GUIDELINE] `.cursor/rules/project-rules/F9-release.mdc` (placeholder/optional) | release, deploy | release notes | Falls back to master/common |

#### Backward‑Compat: Old Trigger → New Capability Triggers → Affected Rules/Files
| Old Trigger(s) | New Capability Trigger(s) | Applied Rules (FULL PATHS) |
|---|---|---|
| rule, context, analyze | context.load | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` |
| conflict, clarify, proceed, how to | collab.resolve | `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc` |
| code, develop, refactor, implement, fix, quality | code.quality | `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc` |
| modify, edit, change, update, implement | code.modify.safety | `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` |
| readme, documentation, structure, docs | docs.sync | `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` |
| complex, feature, algorithm, api-integration | complex.context | `.cursor/rules/master-rules/6-master-rule-complex-feature-context-preservation.mdc` |
| bootstrap, plan, taskgen, execute, retro | workflow.* | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` |
| audit {framework}@{commit|HEAD} | audit.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` |
| validate {framework} using {audit_report} | validation.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` |
| security, compliance, threat, audit | security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` |
| foundation, tokens, AA | ui.foundation | `.cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc` |
| interaction, aria, keyboard, perf | ui.interaction | `.cursor/rules/common-rules/common-rule-ui-interaction-a11y-perf.mdc` |
| premium, brand, RBAC | ui.premium | `.cursor/rules/common-rules/common-rule-ui-premium-brand-dataviz-enterprise-gated.mdc` |

#### Router Confidence & Clarify Rules
- Compute confidence for (a) capability classification and (b) Domain×Lifecycle resolution. Proceed when ≥ 0.70; if < 0.70, emit one-line clarify: “Please confirm the primary capability/domain/lifecycle focus.” Default to safest overlays (F8 + mod-safety) when uncertain.

#### Baseline Policy DSL (draft)
```yaml
policies:
  - id: security_f8
    when: any_change & risk>=minor
    rule: .cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc
    gates:
      - criticals_block: true
      - secrets_in_repo: block
      - sbom_on_release: true
  - id: mod_safety
    when: modifies_code | refactor | schema_change
    rule: .cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc
    gates:
      - change_plan: required
      - validation_checklist: required
  - id: docs_sync
    when: significant_change | new_artifact
    rule: .cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc
    gates:
      - docs_updated: required
  - id: audit_validate
    when: critical_path | contract_change
    rule: .cursor/rules/master-rules/8-auditor-validator-protocol.mdc
    gates:
      - audit_pass: required
      - validation_pass: required
  - id: ui_budgets
    when: domain==ui
    rules:
      - .cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc
      - .cursor/rules/common-rules/common-rule-ui-interaction-a11y-perf.mdc
    gates:
      - aa_contrast: pass
      - perf: { INP_p75: <=200ms, LCP_p75: <=2.5s }
```

#### Optional: Multi‑stack Adapters (Sketch)
- React/Next.js: map ui.* to tokens/spec generation; integrate Playwright/axe for budgets.
- Node/FastAPI/Go: map code.quality and mod_safety to lint/type/test; contract tests for boundaries.
- Python/Data: map data.pipeline to contracts; validation.run to DQ checks.
- Infra/IaC: map infra.iac to policy-as-code; F8 overlays for secrets and supply chain.

#### Risks & Mitigations
- Gate sprawl (M×L): Consolidate via a single `ci/gates_config.yaml`; prefer advisory for minors.
- Misclassification (M×M): Confidence thresholds + clarify prompts + parity logs.

#### Dependencies
- `.cursor/dev-workflow/*`, master/common rules, CI runners, secret manager, audit/validation tooling.

#### Mapping Tables
- See Capability Registry and Backward‑Compat tables above.

#### Success Metrics
- ≥95% correct routing; 0 criticals merged; explainable routing logs; gate pass ≥95% on main.

#### Next Steps
- Encode registry + DSL; wire router + parity logs; set thresholds; publish canary/rollback runbooks.

#### Why this route + Confidence
- Combines best of AI_1..3 with clear precedence and policy gates; backward‑compat preserved. Confidence: 0.86.

