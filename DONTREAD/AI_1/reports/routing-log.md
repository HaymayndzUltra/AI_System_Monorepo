### Routing Log

- Session: AI_1 @ HEAD
- Router Policy: Capability-first → Domain×Lifecycle → Overlays (F8, safety, QA, observability)

#### Why this route
- Signals: “proposals”, “rules”, “capability map”, “docs-only”.
- Mapped to capabilities: context.load, security.overlay, code.modify.safety, code.quality, docs.sync, workflow.router, audit/validation, ui.* (optional).

#### Confidence & Clarify
- Capability classification confidence: 0.86.
- Domain×Lifecycle confidence: 0.82.
- Clarify (not blocking): None required; docs-only scope. If uncertainty arises, confirm target domain emphasis.

#### Overlays Applied
- F8 Security overlay: on; criticals block.
- Code modification safety: applied to any change plan docs.
- QA/testing/observability: added as plans and gates.

#### Selected Rules (explicit)
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

#### Files Emitted
- `/workspace/DONTREAD/AI_1/docs/proposals/*.md`
- `/workspace/DONTREAD/AI_1/reports/routing-log.md`
- `/workspace/DONTREAD/AI_1/session-info.md`
- `/workspace/DONTREAD/AI_1/reports/.manifest.json`
