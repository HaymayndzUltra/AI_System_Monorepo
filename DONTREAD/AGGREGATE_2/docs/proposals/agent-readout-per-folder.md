### Agent Readout Per Folder (AI_1, AI_2, AI_3)

#### Goals
- Synthesize key ideas from `/workspace/DONTREAD/AI_*/docs/proposals/*.md` and `/workspace/DONTREAD/AI_*/reports/*.md`.
- Identify strengths, gaps, risks, and concrete next steps per folder.
- Align to master/common rules under `.cursor/rules/*` with [STRICT]/MUST vs [GUIDELINE] clarity.

#### Assumptions
- Project-rules under `.cursor/rules/project-rules/*` are placeholders/optional; fall back to master/common rules.
- Security overlay (`.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc`) is always-on where applicable.
- All outputs in this session are documentation-only.

#### Alternatives (and why avoided)
- Keep legacy triggers only: lower explainability; rejected in favor of capability-first alignment.
- Policy-only routing: slows delivery; retained as Strategy-C for regulated contexts.

#### Risks (likelihood × impact) and mitigations
- Misclassification (M×M): Use confidence thresholds; ask clarify < 0.70; maintain parity logs.
- Over-application of overlays (L×M): Scope via capability/domain; severity thresholds.
- Missing project rules (M×L): Treat project-rules as optional; rely on master/common rules.

#### Dependencies
- `.cursor/rules/master-rules/*`, `.cursor/rules/common-rules/*`, `.cursor/dev-workflow/*`.

---

### Folder: AI_1

#### Summary of Primary Idea/Proposals
- Establish a capability-first map and governance overlays; define CI/CD pipeline, domain architecture, UX foundations, observability, security (F8), testing, and strategies A/B/C with a trigger redesign preserving backward compatibility.

#### Strengths
- Comprehensive capability map; explicit [MUST] overlays (F8, mod-safety, audit/validate, docs-sync).
- Clear delivery pipeline with deterministic gates and success metrics.

#### Gaps
- Project-rules reliance not addressed (placeholders); observability/release rules not concrete.

#### Risks & Mitigations
- Gate fatigue (M×M): Parallelize checks; tier policies (critical/major/minor).
- Scope creep (M×M): Use milestone gates and capability registry.

#### Suggestions (Concrete Next Steps)
- Encode the capability registry as the source of truth; wire parity logging for dual routing.
- Create CI policy configs for F8/mod-safety/audit; publish default thresholds.

#### Trigger → Rule(s) → Files/Outputs (AI_1)
| Trigger | Rule(s) (FULL PATH) | Files/Outputs | Gates |
|---|---|---|---|
| rule, context, analyze | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` | Selected rules list | — |
| security/compliance | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | [SECURITY CHECK] notes | Block criticals |
| modify/edit/change | `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` | Safety checklist | Required |
| audit/validate | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | Audit/validation reports | Must pass |
| docs/readme | `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | Updated docs | Docs lint |
| workflow.* | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | Dev-workflow outputs | Stage gates |
| ui foundation | `.cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc` | Tokens/grids | AA contrast |
| ui interaction | `.cursor/rules/common-rules/common-rule-ui-interaction-a11y-perf.mdc` | Interaction/perf specs | INP/LCP budgets |

#### Capability → Rules → Triggers → Outputs → Gates (AI_1)
| Capability | Rules ([MUST]/[GUIDELINE]) | Triggers | Outputs | Gates |
|---|---|---|---|---|
| context.load | [MUST] `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` | rule, context, analyze | Loaded READMEs, selected rules | — |
| collab.resolve | [MUST] `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc` | conflict, clarify, how to | Collaboration adherence | — |
| code.quality | [MUST] `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc` | code, refactor, quality | Quality checklist | CI pass |
| code.modify.safety | [MUST] `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` | modify, edit | Change plan | Checklist pass |
| docs.sync | [MUST] `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | docs, readme | Updated docs | Docs lint |
| complex.context | [MUST] `.cursor/rules/master-rules/6-master-rule-complex-feature-context-preservation.mdc` | complex, algorithm | Context bundle | Reviewer checks |
| workflow.router | [MUST] `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | workflow.* | Protocol refs | — |
| audit.run / validation.run | [MUST] `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | audit/validate | Reports | Gates pass |
| security.overlay | [MUST] `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | security, compliance | SEC notes | Block criticals |
| ui.foundation | [GUIDELINE] `.cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc` | foundation, tokens, AA | tokens, grids | AA pass |
| ui.interaction | [GUIDELINE] `.cursor/rules/common-rules/common-rule-ui-interaction-a11y-perf.mdc` | interaction, aria, perf | interaction specs | INP/LCP budgets |
| ui.premium | [GUIDELINE] `.cursor/rules/common-rules/common-rule-ui-premium-brand-dataviz-enterprise-gated.mdc` | premium, brand | premium specs | Preserve AA/perf |

#### Success Metrics (AI_1)
- ≥95% capability-to-rule match; <2% F8 misses; PR feedback < 15m; 0 criticals.

#### Next Steps (AI_1)
- Adopt capability registry; dual-route with parity logs; codify CI gates and thresholds.

#### Why this route + Confidence (AI_1)
- Aligns with master/common rules and explicit overlay gates. Confidence: 0.86 (no clarify needed).

---

### Folder: AI_2

#### Summary of Primary Idea/Proposals
- Canonical capability-first map with explicit precedence (Capability-First → Domain×Lifecycle → Policy overlays), plus delivery pipeline, UX, security, observability, testing, and a trigger redesign with migration phases.

#### Strengths
- Clear precedence and tables with FULL PATH rule references; policy overlays enumerated.

#### Gaps
- Project-rules (release/observability/data) remain placeholders.

#### Risks & Mitigations
- Misconfigured gates (M×H): Policy-as-code; peer review; report-only for minors.

#### Suggestions (Concrete Next Steps)
- Instantiate baseline policy DSL; wire dev-workflow router to CI; define canary/rollback playbooks.

#### Trigger → Rule(s) → Files/Outputs (AI_2)
| Trigger | Rule(s) (FULL PATH) | Files/Outputs | Gates |
|---|---|---|---|
| plan/taskgen | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | dev-workflow outputs | Required |
| modify | `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` | change plan | Blocks risky changes |
| audit/validate | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | audit/validation | Blocks on criticals |
| security | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | SEC logs | Blocks criticals |
| docs | `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | updated docs | Required |
| ui.* | `.cursor/rules/common-rules/common-rule-ui-*.mdc` | UI specs | AA/perf budgets |

#### Capability → Rules → Triggers → Outputs → Gates (AI_2)
| Capability | Rules ([MUST]/[GUIDELINE]) | Triggers | Outputs | Gates |
|---|---|---|---|---|
| context.load | [MUST] `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` | rule, context | Rules list | — |
| collab.resolve | [MUST] `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc` | conflict, clarify | Protocol adherence | — |
| code.quality | [MUST] `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc` | code, quality | Quality notes | CI pass |
| code.modify.safety | [MUST] `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` | modify | Safety plan | Blocks risk |
| docs.sync | [MUST] `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | docs | Updated docs | Docs lint |
| complex.context | [MUST] `.cursor/rules/master-rules/6-master-rule-complex-feature-context-preservation.mdc` | complex | Context bundle | Advisory |
| workflow.* | [MUST] `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | workflow.* | Stage outputs | Required |
| audit.run/validation.run | [MUST] `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | audit/validate | Reports | Must pass |
| security.overlay | [MUST] `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | security | SEC notes | Block criticals |
| ui.foundation | [GUIDELINE] `.cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc` | foundation | tokens/grids | AA pass |
| ui.interaction | [GUIDELINE] `.cursor/rules/common-rules/common-rule-ui-interaction-a11y-perf.mdc` | interaction | perf budgets | Perf pass |
| ui.premium | [GUIDELINE] `.cursor/rules/common-rules/common-rule-ui-premium-brand-dataviz-enterprise-gated.mdc` | premium | premium specs | Guardrails |

#### Success Metrics (AI_2)
- ≥95% correct routing; critical gate coverage 100%; reduced hotfix bypass <2%.

#### Next Steps (AI_2)
- Adopt capability registry and baseline DSL; enable dual routing and parity logs; define rollback.

#### Why this route + Confidence (AI_2)
- Explicit precedence and gates; broad applicability. Confidence: 0.84.

---

### Folder: AI_3

#### Summary of Primary Idea/Proposals
- Capability-first map with extended taxonomy (test.*, release.*, observe.*, infra.iac), delivery pipeline mapped to dev-workflow, security plan with STRIDE-lite, and strategy comparison favoring Strategy-A.

#### Strengths
- Strong articulation of extended capabilities and milestone acceptance gates; clear success metrics.

#### Gaps
- Some capabilities reference future/project rules (test.*, release.*, observe.*) as optional.

#### Risks & Mitigations
- Telemetry cost and gate sprawl (M×L/M): Sampling and consolidated `ci/gates_config.yaml`.

#### Suggestions (Concrete Next Steps)
- Parameterize `ci/gates_config.yaml`; link milestone acceptance to SLOs and test pass rates; define contract testing baselines.

#### Trigger → Rule(s) → Files/Outputs (AI_3)
| Trigger | Rule(s) (FULL PATH) | Files/Outputs | Gates |
|---|---|---|---|
| plan/tasks/execute | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | PRD, tasks, changes | Stage gates |
| security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | SEC notes | Block criticals |
| modify | `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` | Safety checklist | Must pass |
| audit/validate | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | Audit/validation | Must pass |
| docs | `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | Updated docs | Docs checks |
| ui.* | `.cursor/rules/common-rules/common-rule-ui-*.mdc` | UI specs | AA/Perf |

#### Capability → Rules → Triggers → Outputs → Gates (AI_3)
| Capability | Rules ([MUST]/[GUIDELINE]) | Triggers | Outputs | Gates |
|---|---|---|---|---|
| context.load | [MUST] `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` | rule, context | Selected rules | — |
| workflow.* | [MUST] `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | bootstrap, plan, taskgen, execute, retro | Dev-workflow artifacts | Stage complete |
| security.overlay | [MUST] `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | security, compliance | SEC notes | Block criticals |
| code.modify.safety | [MUST] `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` | modify | Change plan | Must pass |
| docs.sync | [MUST] `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | docs | Updated docs | Docs checks |
| audit.run / validation.run | [MUST] `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | audit/validate | Reports | Must pass |
| ui.foundation | [GUIDELINE] `.cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc` | tokens, AA | tokens, grids | AA pass |
| ui.interaction | [GUIDELINE] `.cursor/rules/common-rules/common-rule-ui-interaction-a11y-perf.mdc` | aria, perf | interaction specs | INP/LCP |
| ui.premium | [GUIDELINE] `.cursor/rules/common-rules/common-rule-ui-premium-brand-dataviz-enterprise-gated.mdc` | premium | premium specs | Guardrails |

#### Success Metrics (AI_3)
- ≥95% correct routing; zero critical security issues; milestone gates ≥95% adherence.

#### Next Steps (AI_3)
- Integrate extended capabilities into the registry; finalize thresholds; adopt Strategy-A by default.

#### Why this route + Confidence (AI_3)
- Extends capability taxonomy while preserving overlays and dev-workflow alignment. Confidence: 0.86.

---

### Overall Success Metrics
- Parity with legacy routing ≥95%; 0 criticals merged; audit/validate available on demand; explainable routing logs emitted per session.

### One-line Clarify Rule
- If capability classification confidence < 0.70, ask: “Please confirm the primary capability (context, code.quality, code.modify.safety, docs.sync, security.overlay, workflow.*, audit/validate, ui.*).”

