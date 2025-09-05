### Trigger System Redesign: Capability Taxonomy + Router Logic (Optional → Adopted)

#### Goals
- Refine taxonomy and routing logic; ensure backward compatibility with legacy triggers.
- Improve explainability with confidence thresholds, parity logs, and rollback.

#### Assumptions
- Legacy triggers remain for two release cycles; capabilities become primary.
- Overlays (F8, mod-safety, audit/validate, docs-sync) remain [MUST] when applicable.

#### New Taxonomy & Router Logic
- Capability Groups: Context, Collaboration, Code, Documentation, Workflow, Security, QA, UI, Data/ML, Observability, Release, Infra.
- Capabilities (excerpt): context.load, collab.resolve, code.quality, code.modify.safety, docs.sync, complex.context, workflow.plan|taskgen|execute|retro, audit.run, validation.run, security.overlay, ui.foundation|interaction|premium, data.pipeline, observe.metrics|traces|logs, release.prepare|deploy, infra.iac.
- Router logic: Classify intent → Map to capability bundle → Attach overlays by domain/severity → Execute via `.cursor/dev-workflow/*` → Emit routing log and confidence.

#### Backward‑Compat Table (Old → New → Applied Rules/Files)
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

#### Migration Plan
1) Phase 0: Introduce registry and no-op mapping; emit routing logs.
2) Phase 1: Dual-route; compare parity; clarify at confidence <0.70.
3) Phase 2: Default to capabilities; legacy triggers as aliases with deprecation warnings.
4) Phase 3: Remove legacy triggers after two cycles; maintain rollback toggle.

#### Risks (likelihood × impact) & Mitigations
- Misclassification (M×M): threshold + clarify + parity logs; safest overlays by default.
- Overheads (L×M): cache results; advisory-only for minor gates.

#### Dependencies
- Capability registry; `.cursor/dev-workflow/*`; CI to publish routing logs.

#### Example User Messages → Resolved Triggers → Rules Applied
| User Message | Resolved Capability Trigger(s) | Rules Applied |
|---|---|---|
| “Refactor the auth module safely.” | code.modify.safety, code.quality | `4-master-rule-code-modification-safety-protocol.mdc`, `3-master-rule-code-quality-checklist.mdc` |
| “Add UI tokens with AA contrast.” | ui.foundation | `common-rule-ui-foundation-design-system.mdc` |
| “Run audit for the web app at HEAD.” | audit.run | `8-auditor-validator-protocol.mdc` |
| “Clarify how to proceed with a complex feature.” | collab.resolve, complex.context | `2-master-rule-ai-collaboration-guidelines.mdc`, `6-master-rule-complex-feature-context-preservation.mdc` |

#### Success Metrics
- ≥95% parity with legacy routing; <2% security false negatives; reduced time-to-action.

#### Next Steps
- Implement registry and dual-route parity; publish clarify prompts and thresholds; add rollback flag.

#### Why this route + Confidence
- Preserves backward compatibility while increasing determinism and explainability. Confidence: 0.85.

