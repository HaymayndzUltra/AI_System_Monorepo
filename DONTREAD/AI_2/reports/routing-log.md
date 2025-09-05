### Routing Log (AI_2)

Why this route:
- Signals: multi-domain, governance emphasis, explicit request to align with `.cursor/rules/master-rules`, `.cursor/rules/common-rules`, and `.cursor/dev-workflow` without external reads.
- Capability-First precedence applied, then Domain×Lifecycle via dev-workflow, then overlays (Security F8, Mod-Safety, QA, Observability, Release, Audit/Validate).

Selected Rules (FULL PATHS):
- `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` [MUST]
- `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc` [MUST]
- `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc` [MUST]
- `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` [MUST]
- `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` [MUST]
- `.cursor/rules/master-rules/6-master-rule-complex-feature-context-preservation.mdc` [MUST]
- `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` [MUST]
- `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` [MUST]
- `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` [MUST]
- `.cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc` [GUIDELINE]
- `.cursor/rules/common-rules/common-rule-ui-interaction-a11y-perf.mdc` [GUIDELINE]
- `.cursor/rules/common-rules/common-rule-ui-premium-brand-dataviz-enterprise-gated.mdc` [GUIDELINE]
- `.cursor/rules/project-rules/*` [placeholder/optional]

Confidence & Clarify:
- Capability classification confidence: 0.86. No clarify required.
- Domain×Lifecycle confidence: 0.83. No clarify required.

Overlays Applied:
- Security & Compliance (F8): secrets, deps, authz, privacy, audit.
- Code-Modification Safety: change plans; validation checklists.
- Auditor/Validator: audit and validation reports gate criticals.
- Docs Sync: documentation updates required.

Expected Outputs:
- Proposals under `/workspace/DONTREAD/AI_2/docs/proposals/*.md`.
- Routing log (this file), manifest, and session metadata under `/workspace/DONTREAD/AI_2/reports` and `/workspace/DONTREAD/AI_2/session-info.md`.
