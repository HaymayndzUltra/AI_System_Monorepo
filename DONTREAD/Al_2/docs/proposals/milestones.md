### Title
Milestones & Phasing

### Goal(s)
- Phase the rollout of capability-first governance and delivery.

### Assumptions
- Teams can adopt incrementally.

### Milestones
1. Phase 0: Capability taxonomy adoption; no-op mapping; training.
2. Phase 1: Dual route (old triggers + capabilities); log parity.
3. Phase 2: Capabilities default; old triggers as aliases with deprecation.
4. Phase 3: Remove old triggers after 2 release cycles.

### Trigger → Rule(s) → File(s)/Outputs
| Trigger | Rule(s) | Files/Outputs | Gates |
|---|---|---|---|
| "milestones" | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc`, `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc`, `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc`, `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc`, `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | `/workspace/DONTREAD/AI_2/docs/proposals/milestones.md` | Critical overlays enforced |

### Alternatives
- Big-bang switch: faster but risky.

### Risks and Mitigations
- Misclassification (M×M): explicit confirmations for low-confidence cases.

### Dependencies
- Dev-workflow router; CI integrations.

### Success Metrics
- Parity ≥95% before capability-first default.

### Next Steps
- Implement dual routing and parity logs; schedule deprecation.

### Why this route + Confidence
Signals: migration safety. Confidence: 0.83.

### References
- Master/common rules and dev-workflow router.
