### Title
Folder-by-Folder Readout and Synthesis (AI_1, AI_2, AI_3)

### Goals
- Synthesize key ideas per `/workspace/DONTREAD/AI_*/` folder.
- Identify strengths, gaps, risks; recommend concrete next steps.
- Map Triggers → Rules → Files/Outputs to ensure governance alignment.

### Assumptions
- Master/common rules under `.cursor/rules/*` are authoritative; project-rules are placeholders/optional.
- Session scope is documentation-only; no source edits.
- Security overlay (F8) applies when risk is non-trivial.

---

## AI_1 Readout

### Primary Ideas / Proposals
- Capability-first registry and routing with explicit MUST/GUIDELINE gates (`capability-map.md`).
- Delivery pipeline with explainable gates across stages (`delivery-pipeline.md`).
- Domain architecture with modular boundaries and contracts (`domain-architecture.md`).
- UX foundations and interaction quality with measurable AA/INP/LCP budgets (`fe-ux-plan.md`).
- Security plan anchored on F8 overlay; audit/validate integration.
- Testing strategy layering; decision matrix A/B/C; stack options.
- Trigger redesign with backward-compatible mapping.

### Strengths
- Clear capability map and backward-compat table.
- Comprehensive gates: F8, mod-safety, audit/validate, docs sync, UI rules.
- Routing log present and explicit rule selections.

### Gaps
- No concrete policy config examples (e.g., gates_config) included.
- Observability specifics kept high-level (budgets/SLIs not enumerated).

### Risks (likelihood × impact) and mitigations
- Misclassification (M×M): use confidence+clarify (<0.70) and parity logs.
- Gate fatigue (M×M): prioritize critical gates; warn-only for minors.

### Suggestions / Next Steps
- Add a minimal policy DSL with 5–6 baseline policies and thresholds.
- Provide sample parity log format and clarify prompts.
- Enumerate 3–5 SLOs per domain for observability.

### Trigger → Rule(s) → Files/Outputs (AI_1)
| Trigger/Capability | Rule(s) (FULL PATH) | Files/Outputs |
|---|---|---|
| context.load | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` | capability-map.md, decision-matrix.md |
| security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | security-plan.md, routing-log.md |
| code.modify.safety | `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` | delivery-pipeline.md |
| docs.sync | `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | all proposals updated |
| audit.run / validation.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | reports (audit/validation) |
| ui.foundation / ui.interaction | `.cursor/rules/common-rules/*` | fe-ux-plan.md |

---

## AI_2 Readout

### Primary Ideas / Proposals
- Canonical capability-first map with precedence: Capability → Domain×Lifecycle → Overlays.
- Unified delivery pipeline; strong mapping tables with full rule paths.
- Strategy variants (A/B/C) with governance tiers; placeholders for project-rules with explicit fallbacks.
- Data, security, observability, testing plans tailored to capability routing.

### Strengths
- Precise “Master Capability Table” with MUST/GUIDELINE and full paths.
- Explicit fallback semantics for project-rules.
- Routing log documents confidences; overlays called out.

### Gaps
- Missing concrete example policies (risk tiers, thresholds).
- No example router confidence thresholds or clarify prompts.

### Risks (likelihood × impact) and mitigations
- Over-application of overlays (L×M): scope by severity and capability.
- Inconsistent enforcement (M×M): publish policy tiers; quarterly review.

### Suggestions / Next Steps
- Provide baseline policy DSL with 5–6 policies and example thresholds.
- Add dual-route parity test cases and golden fixtures.
- Define clarify prompts for <0.70 classifier confidence.

### Trigger → Rule(s) → Files/Outputs (AI_2)
| Trigger/Capability | Rule(s) (FULL PATH) | Files/Outputs |
|---|---|---|
| context.load | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` | capability-map.md |
| workflow.* | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | delivery-pipeline.md |
| security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | security-plan.md |
| audit.run / validation.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | reports |
| ui.foundation / ui.interaction | `.cursor/rules/common-rules/*` | fe-ux-plan.md |

---

## AI_3 Readout

### Primary Ideas / Proposals
- Expanded capability taxonomy and mapping; strong “Why + Confidence” sections.
- Delivery pipeline wired to dev-workflow; overlays integrated.
- Domain architecture (DDD-aligned); comprehensive milestones with acceptance gates.
- UX, data, security, observability, testing strategies consistent with overlays.
- Trigger redesign with migration and rollback flag.

### Strengths
- Detailed capability taxonomy including test.*, release.*, observe.*.
- Milestones include acceptance gates and mapping to rules.
- Security plan with STRIDE-lite model and concrete overlays.

### Gaps
- Testing “future rules” placeholders; observability project rules optional.
- Lacks sample policy config and concrete SLO values.

### Risks (likelihood × impact) and mitigations
- Boundary erosion (M×M): contract tests and ownership; audits.
- Misclassification (M×M): confidence thresholds + clarify.

### Suggestions / Next Steps
- Instantiate test.* rule placeholders as policy stubs.
- Add SLO exemplars per domain (availability, latency, error budgets).
- Provide example rollback and canary templates in release.* sketch.

### Trigger → Rule(s) → Files/Outputs (AI_3)
| Trigger/Capability | Rule(s) (FULL PATH) | Files/Outputs |
|---|---|---|
| context.load | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` | capability-map.md |
| workflow.* | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | delivery-pipeline.md, decision-matrix.md |
| security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | security-plan.md |
| audit.run / validation.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | reports |
| ui.foundation / ui.interaction | `.cursor/rules/common-rules/*` | fe-ux-plan.md |

---

## Cross-Folder Patterns (Quick Synthesis)
- All folders converge on capability-first routing with overlays (F8, mod-safety, audit/validate, docs sync) and UI guidelines when applicable.
- Project-rules are placeholders/optional; consistent fallback to master/common rules.
- Confidence-driven clarify protocol recommended (<0.70).
- Need for baseline policy DSL and example thresholds is common across folders.