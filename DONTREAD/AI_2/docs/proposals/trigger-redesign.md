### Title
Trigger Redesign: Capability-Based Router

### Goal(s)
- Propose a capability-based trigger taxonomy and router with backward compatibility.

### Assumptions
- Old triggers remain during migration; capabilities become primary.

### New Taxonomy (Capabilities)
- context.load, collab.resolve, code.quality, code.modify.safety, docs.sync, complex.context,
  workflow.plan|taskgen|execute|retro, audit.run, validation.run, security.overlay,
  ui.foundation|interaction|premium, data.pipeline, observe.metrics|traces|logs, release.prepare|deploy

### Backward‑Compat Mapping (Old → New → Impact)
| Old Trigger | New Capability Trigger(s) | Impacted Rules/Files |
|---|---|---|
| rule, context, analyze | context.load | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` |
| conflict, clarify, proceed, how to | collab.resolve | `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc` |
| code, develop, refactor, implement, fix, quality | code.quality | `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc` |
| modify, edit, change, update, refactor, implement | code.modify.safety | `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` |
| readme, documentation, structure, docs | docs.sync | `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` |
| complex, feature, algorithm, api‑integration | complex.context | `.cursor/rules/master-rules/6-master-rule-complex-feature-context-preservation.mdc` |
| bootstrap, plan, taskgen, execute, retro | workflow.* | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` |
| audit {framework}@{commit|HEAD} | audit.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` |
| validate {framework} using {audit_report} | validation.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` |
| security, compliance, threat, audit | security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` |

### Migration Plan
- Phase 0→3 (see `/workspace/DONTREAD/AI_2/docs/proposals/milestones.md`).

### Risks and Mitigations
- Misclassification: add confidence thresholds and clarify prompts <0.7.

### Dependencies
- Router flagging mechanism; telemetry for parity logs.

### Rollback Toggle
- Router flag to prefer old triggers; retain mapping tables.

### Trigger → Rule(s) → File(s)/Outputs
| Trigger | Rule(s) | Files/Outputs | Gates |
|---|---|---|---|
| "trigger redesign" | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc`, `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc`, `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc`, `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc`, `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc`, `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | `/workspace/DONTREAD/AI_2/docs/proposals/trigger-redesign.md` | Critical overlays enforced |

### Why this route + Confidence
Signals: need for clarity and governance; existing capability hints in repo. Confidence: 0.85.

### References
- Master/common rules listed in other proposals.
