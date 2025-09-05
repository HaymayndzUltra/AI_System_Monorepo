### Title
Frontend UX Plan (Cross-Platform)

### Goal(s)
- Establish UI foundations, interaction quality, and accessibility/performance targets.

### Assumptions
1. Brand tokens can be introduced without code changes during this session.
2. Performance budgets are defined per platform.

### Alternatives
- UI polish later. Rejected: retrofitting accessibility is costly.

### Risks and mitigations
- Inconsistent UX patterns (M×M): Design tokens + component specs.
- Accessibility regressions (M×H): Automated checks and manual audits.

### Dependencies
- `.cursor/rules/common-rules/*` for UI; dev-workflow for process.

### Scope
- Foundations: color, spacing, typography, grid, elevation.
- Interaction: focus, keyboard, pointer, motion, feedback.
- Accessibility: ARIA, landmarks, semantics, contrast.

### Trigger → Rule → Outputs → Gates
| Capability | Rule(s) | Outputs | Gates |
|---|---|---|---|
| ui.foundation | `.cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc` | tokens.json, grids | AA contrast |
| ui.interaction | `.cursor/rules/common-rules/common-rule-ui-interaction-a11y-perf.mdc` | interaction specs | INP/LCP budgets |
| ui.premium | `.cursor/rules/common-rules/common-rule-ui-premium-brand-dataviz-enterprise-gated.mdc` | premium specs | Preserve AA/perf |
| docs.sync | `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | docs updates | Docs lint |

### Success Metrics
- 100% keyboard navigability; AA contrast; INP < 200ms; LCP < 2.5s.

### Next Steps
- Emit tokens and component specs; integrate into design system repo later.

### Why this route + Confidence
- Frontloads a11y and UX quality with measurable budgets.
- Confidence: 0.83.
