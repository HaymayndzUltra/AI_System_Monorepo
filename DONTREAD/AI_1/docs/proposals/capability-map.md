### Title
Unified Capability Map and Rule Routing

### Goal(s)
- Provide a cross-domain capability map for web, mobile, backend/API, data/ML, CLI/desktop, and infra.
- Align triggers to rules in `.cursor/rules/master-rules` and `.cursor/rules/common-rules` using a capability-first policy.
- Define deterministic Trigger → Rule(s) → Outputs → Gates with [STRICT]/MUST vs [GUIDELINE].

### Assumptions
1. Repository paths exist: `/workspace/.cursor/rules/master-rules`, `/workspace/.cursor/rules/common-rules`, `/workspace/.cursor/dev-workflow`.
2. Project-specific rules may be placeholders; treat them as optional fallbacks.
3. Security overlays are always-on where applicable (F8).

### Alternatives
- Keep legacy triggers without capabilities (simpler, less clarity). Rejected: lower explainability.
- Pure ML router. Rejected: opacity and maintenance risk.

### Risks (likelihood × impact) and mitigations
- Misclassification (M×M): Confidence/clarify protocol; parity logs; fallback to [STRICT] rules.
- Overlays over-application (L×M): Scope overlays by domain/lifecycle.
- Gaps in project rules (M×L): Mark as optional; rely on master/common rules.

### Dependencies
- `.cursor/rules/master-rules/*.mdc`, `.cursor/rules/common-rules/*.mdc`, `.cursor/dev-workflow/*`.
- Repo CI to surface gates (audit/validate) when applicable.

### Capability → Rules → Triggers → Files/Outputs → Gates
| Capability | Rules ([STRICT]/MUST vs [GUIDELINE]) | Triggers | Files/Outputs | Gates |
|---|---|---|---|---|
| context.load | [MUST] `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` | context, analyze | Loaded READMEs; selected rules list | N/A |
| collab.resolve | [MUST] `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc` | conflict, clarify, proceed, how to, question | Conversation protocol adherence | N/A |
| code.quality | [MUST] `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc` | code, develop, refactor, implement, fix, quality | Checklists, lint/test criteria | CI quality gates |
| code.modify.safety | [MUST] `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` | modify, edit, change, update, refactor | Change plan; validation checklist | Change-safety checklist pass |
| docs.sync | [MUST] `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | readme, documentation, docs | Updated docs/ and references | Docs lints |
| complex.context | [MUST] `.cursor/rules/master-rules/6-master-rule-complex-feature-context-preservation.mdc` | complex, algorithm, api-integration | Context bundle; invariants | Reviewer checklist |
| workflow.router | [MUST] `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | workflow.* | Protocol paths | N/A |
| audit.run | [MUST] `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | audit {framework}@{rev} | `reports/audit-*.md` | Audit gates |
| validation.run | [MUST] `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | validate using {audit} | `reports/validation-*.md` | Validation gates |
| security.overlay | [MUST] `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | security, compliance, governance | `[SECURITY CHECK]` notes | Block on criticals |
| ui.foundation | [GUIDELINE] `.cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc` | foundation, tokens, AA | tokens, grids | AA contrast gates |
| ui.interaction | [GUIDELINE] `.cursor/rules/common-rules/common-rule-ui-interaction-a11y-perf.mdc` | interaction, aria, perf | micro-interactions, ARIA | INP/LCP budgets |
| ui.premium | [GUIDELINE] `.cursor/rules/common-rules/common-rule-ui-premium-brand-dataviz-enterprise-gated.mdc` | premium, brand, RBAC | premium UX specs | AA/perf preserved |

### Why this route + Confidence
- Capability-first routing aligns with provided rules and dev-workflow. Signals: “proposals”, “rules”, “capability map”.
- Confidence: 0.86.

### Success Metrics
- ≥95% capability-to-rule match rate; <2% missing security overlay when applicable; explainability in routing logs.

### Next Steps
- Adopt table above as the master registry.
- Reference this map in all proposal documents.
