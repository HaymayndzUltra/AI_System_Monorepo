### Title
Capability Map and Router Alignment (Capability-First)

### Goal(s)
- Provide a canonical, capability-first map that deterministically routes any user intent to rules, overlays, and outputs.
- Minimize ambiguity: one intent → 1..N capabilities → rule bundles with clear gates.
- Make security, modification-safety, and audit overlays explicit and measurable.

### Assumptions
- Master/common rules exist under `.cursor/rules/master-rules` and `.cursor/rules/common-rules` and are authoritative.
- Project-specific rules under `.cursor/rules/project-rules` are placeholders/optional at this time.
- No external network access; proposals and reports live under `/workspace/DONTREAD/AI_2/*`.
- Dev-workflow protocols under `.cursor/dev-workflow` are in use for lifecycle orchestration.

### Precedence (Router / Resolution Policy)
1) Capability-First (primary)
2) Domain × Lifecycle (disambiguation via `.cursor/dev-workflow`)
3) Policy Engine Overlays: Security F8, Code-Modification Safety, QA, Observability, Release, Audit/Validate

### Master Capability Table
| Capability | Rules (MUST/GUIDELINE) | Trigger(s) | Files/Outputs | Gates |
|---|---|---|---|---|
| context.load | MUST: `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` | rule, context, analyze | Loaded READMEs; selected rules | Blocks if critical context missing |
| collab.resolve | MUST: `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc` | conflict, clarify, proceed, how to | Collaboration protocol adherence | N/A |
| code.quality | MUST: `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc` | code, develop, refactor, implement, fix, quality | PR annotations, checklist | Fails on critical quality gates |
| code.modify.safety | MUST: `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` | modify, edit, change, update, refactor, implement | Change plan, validation checklist | Blocks risky, unvalidated changes |
| docs.sync | MUST: `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | readme, documentation, structure, docs | Updated docs and context | Required when significant changes |
| complex.context | MUST: `.cursor/rules/master-rules/6-master-rule-complex-feature-context-preservation.mdc` | complex, feature, algorithm, api-integration | Context bundle; preserved threads | Required for complex scope |
| workflow.* | MUST: `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | bootstrap, plan, taskgen, execute, retro | `/workspace/.cursor/dev-workflow/*` outputs | Required for lifecycle flow |
| audit.run | MUST: `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | audit {framework}@{commit|HEAD} | `reports/audit-*.md` | Blocks on critical findings |
| validation.run | MUST: `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | validate {framework} using {audit_report} | `reports/validation-*.md` | Blocks on contract/test failures |
| security.overlay | MUST: `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | security, compliance, threat, audit | [SECURITY CHECK] logs | Blocks on criticals |
| ui.foundation | GUIDELINE: `.cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc` | foundation, tokens, AA, grid | tokens, grids, AA checks | AA must be ≥ WCAG AA |
| ui.interaction | GUIDELINE: `.cursor/rules/common-rules/common-rule-ui-interaction-a11y-perf.mdc` | interaction, aria, keyboard, perf | INP/LCP/CLS budgets | Perf budgets must pass |
| ui.premium | GUIDELINE: `.cursor/rules/common-rules/common-rule-ui-premium-brand-dataviz-enterprise-gated.mdc` | premium, brand, dataviz, RBAC | premium specs | Must not violate AA/perf |
| data.pipeline | GUIDELINE: `.cursor/rules/project-rules/F5-data-ml.mdc` (placeholder/optional) | data schema, pipeline | data schemas, ETL notes | Falls back to master/common |
| observe.* | GUIDELINE: `.cursor/rules/project-rules/F10-observability.mdc` (placeholder/optional) | observability, retro | telemetry specs | Falls back to master/common |
| release.* | GUIDELINE: `.cursor/rules/project-rules/F9-release.mdc` (placeholder/optional) | release, deploy | release notes | Falls back to master/common |

### Trigger → Rule(s) → File(s)/Outputs (this proposal)
| Trigger | Capability | Rule(s) | Files/Outputs | Gates |
|---|---|---|---|---|
| "capability map" | context.load, docs.sync | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc`, `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | `/workspace/DONTREAD/AI_2/docs/proposals/capability-map.md` | F8 overlay applies |

### Alternatives
- Keep old trigger list only: lower change, less clarity, higher ambiguity.
- Pure ML intent routing: flexible but opaque and harder to maintain.

### Risks (Likelihood × Impact) and Mitigations
- Misclassification (M×M): apply thresholds and clarifications for <0.7 confidence.
- Over-application of overlays (L×M): scope overlays by capability and severity.

### Dependencies
- Lightweight classifier; capability-to-rule registry; dev-workflow router.

### Success Metrics
- ≥95% correct routing vs human baseline
- <2% false-negative on security overlay triggers
- 100% proposals include Assumptions/Alternatives/Risks/Dependencies and mapping table

### Next Steps
- Adopt this capability map across sessions
- Integrate with dev-workflow router for lifecycle gating
- Add golden test cases for routing

### Why this route + Confidence
Signals: explicit capability taxonomy, presence of master/common rules, cross-domain requirement. Confidence: 0.86 (no clarify needed).

### References
- `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc`
- `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc`
- `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc`
- `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc`
- `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc`
- `.cursor/rules/master-rules/6-master-rule-complex-feature-context-preservation.mdc`
- `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc`
- `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc`
- `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc`
- `.cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc`
- `.cursor/rules/common-rules/common-rule-ui-interaction-a11y-perf.mdc`
- `.cursor/rules/common-rules/common-rule-ui-premium-brand-dataviz-enterprise-gated.mdc`
- `.cursor/rules/project-rules/*` (placeholders/optional)
