### Title
Trigger Redesign: Capability-Based Router with Backward Compatibility

### Goal(s)
- Propose a capability-based trigger taxonomy and router with overlays.

### Why this route + Confidence
- Why: Improves determinism and explainability; aligns with master rules and dev-workflow.
- Confidence: 0.83.

### Assumptions
1) Legacy triggers remain during migration.
2) Overlays (F8, safety) are preserved as MUST where applicable.

### New Capability Taxonomy (excerpt)
- code.edit, code.quality, code.modify.safety, docs.sync, context.load, ui.foundation, ui.interaction, ui.premium, workflow.*, security.overlay, security.audit, audit.run, validation.run, test.*, release.*, observe.*, data.pipeline, ml.train, infra.iac

### Router Logic (informal)
- Classify → Map capabilities → Attach overlays → Execute per dev-workflow.

### Backward-Compat Mapping (Old → New → Impact)

| Old Trigger | New Trigger(s) | Impacted rules/files |
|---|---|---|
| rule, context, analyze | context.load | `1-master-rule-context-discovery.mdc` |
| security, compliance | security.overlay | `F8-security-and-compliance-overlay.mdc` |
| modify, implement | code.modify.safety | `4-master-rule-code-modification-safety-protocol.mdc` |
| docs, readme | docs.sync | `5-master-rule-documentation-and-context-guidelines.mdc` |
| audit, validate | audit.run, validation.run | `8-auditor-validator-protocol.mdc` |
| UI tokens, AA | ui.foundation | `common-rule-ui-foundation-design-system.mdc` |
| aria, perf | ui.interaction | `common-rule-ui-interaction-a11y-perf.mdc` |

### Migration Plan
- Phase 0: Dual routing, log parity.
- Phase 1: Default to capabilities; legacy triggers warn.
- Phase 2: Remove legacy triggers after two cycles; rollback flag available.

### Risks and mitigations
- Misclassification (Med × Med): confidence + clarify when <0.70.

### Dependencies
- Capability-to-rule registry; CI gates config.

### Gates
- F8 criticals block; safety checks must pass; audit/validate required when invoked.

### Success Metrics
- ≥95% parity with legacy routing; reduced time-to-action.

### Next Steps
- Implement registry and dual-route logging; align with `capability-map.md`.

