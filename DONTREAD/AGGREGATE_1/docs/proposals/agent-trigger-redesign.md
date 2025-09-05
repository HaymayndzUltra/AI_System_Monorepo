### Title
Trigger System Redesign: Capability‑Based Router with Backward Compatibility

### Goals
- Propose a clearer capability taxonomy and routing logic with overlays.
- Preserve legacy triggers via aliases and a phased migration with rollback.
- Provide examples and backward‑compat tables referencing full rule paths.

### Assumptions
- Legacy trigger phrases remain for two release cycles.
- `.cursor/rules/master-rules/*` are authoritative; project-rules are optional placeholders.
- Security F8 and Mod‑Safety overlays remain [MUST] where applicable.

### Alternatives
- Hard cutover to capabilities only: faster but risk to existing workflows.
- ML‑only router: flexible but less explainable; higher maintenance risk.

### Risks (likelihood × impact) & mitigations
- Misclassification (M×M): confidence thresholds + clarify prompts; parity logs.
- Overlays over-application (L×M): scope overlays by capability and severity.

### Dependencies
- Capability registry; dev‑workflow router; F8 overlay; logging for parity.

---

## New Taxonomy & Router Logic

- Capabilities: context.load, collab.resolve, code.quality, code.modify.safety, docs.sync, complex.context, workflow.plan|taskgen|execute|retro, audit.run, validation.run, security.overlay, ui.foundation|interaction|premium, data.pipeline, observe.metrics|traces|logs, release.prepare|deploy.
- Router precedence: Capability‑First → Domain×Lifecycle → Policy overlays (F8, mod‑safety, audit/validate, docs sync; optional F9/F10 when present).
- Execution: Classify intents → map capabilities → attach overlays → execute via dev‑workflow; log selections + confidence.

---

## Backward‑compat table (Old Trigger(s) → New Capability Trigger(s) → Applied Rules/Files)

| Old Trigger(s) | New Capability Trigger(s) | Applied Rules (FULL PATHS) | Files/Outputs |
|---|---|---|---|
| rule, context, analyze | context.load | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` | capability-map.md |
| conflict, clarify, proceed, how to, question | collab.resolve | `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc` | routing-log.md |
| code, develop, refactor, implement, fix, quality | code.quality | `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc` | testing-strategy.md |
| modify, edit, change, update, refactor | code.modify.safety | `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` | delivery-pipeline.md |
| readme, documentation, docs | docs.sync | `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | proposals updated |
| complex, algorithm, api-integration | complex.context | `.cursor/rules/master-rules/6-master-rule-complex-feature-context-preservation.mdc` | strategy-*.md |
| workflow.* | workflow.plan|taskgen|execute|retro | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | dev-workflow outputs |
| audit/validate | audit.run / validation.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | reports/*.md |
| security/compliance | security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | security-plan.md |
| foundation, tokens, AA | ui.foundation | `.cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc` | fe-ux-plan.md |
| interaction, aria, perf | ui.interaction | `.cursor/rules/common-rules/common-rule-ui-interaction-a11y-perf.mdc` | fe-ux-plan.md |

[STRICT]/MUST notes: All master-rule entries are [MUST]. UI common rules are [GUIDELINE] unless UI deliverables are in-scope.

---

## Migration Plan (Phased)
- Phase 0: Introduce capability registry and dual‑route; start parity logs.
- Phase 1: Default to capabilities when confidence ≥0.70; legacy triggers alias with warnings.
- Phase 2: Capabilities primary; legacy triggers retained as aliases; publish deprecation.
- Phase 3: Remove legacy triggers after two cycles; rollback toggle to re‑enable legacy mapping.

Rollback
- Feature flag `router.useLegacy=true|false`; preserve mapping tables and logs.

---

## Example resolutions (User message → Capabilities → Rules applied)

- "Refactor API handler and add tests":
  - Capabilities: code.modify.safety, code.quality, validation.run
  - Rules: `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc`, `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc`, `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc`

- "Add design tokens and ensure AA contrast":
  - Capabilities: ui.foundation
  - Rules: `.cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc`

- "Prepare release with canary":
  - Capabilities: release.prepare (optional project-rule), security.overlay
  - Rules: `.cursor/rules/project-rules/F9-release.mdc` (placeholder/optional), `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc`

---

## Risks, Dependencies, Success Metrics, Next Steps

- Risks: misclassification, gate fatigue, taxonomy drift. Mitigations: confidence thresholds, clarify prompts, quarterly registry reviews.
- Dependencies: capability registry, dev-workflow integration, logs and metrics for routing.
- Success Metrics: ≥95% parity vs legacy; <2% missed F8 overlays; decreased time‑to‑action.
- Next Steps: implement dual routing and logging; publish policy DSL; schedule deprecation milestones.

## Why this route + Confidence
- Aligns with all AI_* proposals and master/common rules; preserves stability.
- Confidence: 0.86.