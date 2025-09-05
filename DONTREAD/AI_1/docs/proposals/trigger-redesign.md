### Title
Trigger Redesign: Capability-Based Router with Backward Compatibility

### Goal(s)
- Introduce capability taxonomy and routing without breaking existing triggers.

### Assumptions
1. Legacy trigger phrases remain in use; we’ll dual-route for two release cycles.

### Alternatives
- Hard cutover. Rejected: risk to existing workflows.

### Risks and mitigations
- Misrouting (M×M): Confidence+clarify and parity logs; rollback toggle.

### Dependencies
- Capability registry; dev-workflow router; F8 overlay.

### Backward-Compat Table
| Old Trigger(s) | New Capability Trigger(s) | Applied Rules |
|---|---|---|
| rule, context, analyze | context.load | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` |
| conflict, clarify, proceed, how to, question | collab.resolve | `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc` |
| code, develop, refactor, implement, fix, quality | code.quality | `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc` |
| modify, edit, change, update, refactor | code.modify.safety | `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` |
| readme, documentation, docs | docs.sync | `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` |
| complex, algorithm, api-integration | complex.context | `.cursor/rules/master-rules/6-master-rule-complex-feature-context-preservation.mdc` |
| workflow.* | workflow.router | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` |
| audit/validate | audit.run / validation.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` |
| security/compliance | security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` |
| foundation, tokens, AA | ui.foundation | `.cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc` |
| interaction, aria, perf | ui.interaction | `.cursor/rules/common-rules/common-rule-ui-interaction-a11y-perf.mdc` |
| premium, brand, RBAC | ui.premium | `.cursor/rules/common-rules/common-rule-ui-premium-brand-dataviz-enterprise-gated.mdc` |

### Migration Plan
- Phase 0: Introduce registry (no-op mapping) and logs.
- Phase 1: Dual-route with parity checks; notify on low-confidence.
- Phase 2: Default to capabilities; legacy triggers as aliases with deprecation.
- Phase 3: Remove legacy after 2 cycles with rollback toggle.

### Trigger → Rule → Outputs → Gates
- See capability map for master table; same gates apply.

### Success Metrics
- ≥95% parity with legacy routing; <2% false-negative on F8 overlay.

### Next Steps
- Implement registry and parity logging; set thresholds and clarify prompts.

### Why this route + Confidence
- Improves explainability while preserving stability.
- Confidence: 0.85.
