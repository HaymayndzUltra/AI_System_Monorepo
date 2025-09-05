### Title
Frontend UX Plan with A11y & Perf Gates

### Goal(s)
- Ensure professional UX via micro-interactions, accessibility, and measurable performance.

### Assumptions
- UI work must meet AA contrast and performance budgets.

### Plan
- Foundations: design tokens, spacing, type scale (ui.foundation).
- Interactions: keyboard coverage, ARIA roles, focus states, motion ranges (ui.interaction).
- Premium: visual polish without breaking AA/perf (ui.premium).

### Metrics
- AA contrast; INP < 200ms p75; LCP < 2.5s p75; CLS < 0.1.

### Trigger → Rule(s) → File(s)/Outputs
| Trigger | Rule(s) (FULL PATH) | Files/Outputs | Gates |
|---|---|---|---|
| ui foundation | `.cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc` | tokens, AA checks | AA ≥ WCAG AA |
| ui interaction | `.cursor/rules/common-rules/common-rule-ui-interaction-a11y-perf.mdc` | perf budgets | Perf budgets enforced |
| ui premium | `.cursor/rules/common-rules/common-rule-ui-premium-brand-dataviz-enterprise-gated.mdc` | premium specs | Must not violate AA/perf |

### Alternatives
- Ad-hoc UI practices: faster initially but uneven quality.

### Risks and Mitigations
- Accessibility regressions (M×H): automated checks + manual audits.

### Dependencies
- Design system tokens; CI a11y/perf checks.

### Success Metrics
- 100% interactive components keyboard accessible; budgets met on main.

### Next Steps
- Define tokens; set up perf/a11y CI steps.

### Why this route + Confidence
Signals: common rules present; UX quality goals. Confidence: 0.84.

### References
- UI common rules listed above; master overlays apply.
