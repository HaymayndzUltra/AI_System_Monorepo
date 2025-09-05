### Title
Strategy B: Balanced Risk & Velocity

### Goal(s)
- Balance delivery speed with guardrails; suitable for most product teams.

### Assumptions
- Teams can triage gates by severity; minor issues may be warn-only.

### Approach
- Mandatory: Context Discovery, AI Collaboration, Mod-Safety for risky changes, Security F8 for sensitive surfaces, Docs Sync on significant changes.
- UI AA/perf budgets enforced but adjustable per feature criticality.
- Audit/Validate on critical paths; sampling on low-risk changes.

### Alternatives
- Strategy A (governance-first), Strategy C (agile-first).

### Risks and Mitigations
- Inconsistent enforcement (M×M): publish policy tiers (critical/major/minor).
- Drift over time (M×M): quarterly policy review.

### Dependencies
- Policy config, CI/CD automation, feature tagging.

### Trigger → Rule(s) → File(s)/Outputs
| Trigger | Rule(s) | Files/Outputs | Gates |
|---|---|---|---|
| "strategy B" | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc`, `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc`, `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc`, `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc`, `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc`, `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc`, `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | `/workspace/DONTREAD/AI_2/docs/proposals/strategy-B.md` | Criticals block; minors warn |

### Success Metrics
- ≥20% faster time-to-merge vs Strategy A while maintaining zero criticals.

### Next Steps
- Define policy tiers; instrument build results by severity.

### Why this route + Confidence
Signals: need for balance; diverse project types. Confidence: 0.83.

### References
- `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc`
- `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc`
- `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc`
- `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc`
- `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc`
- `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc`
- `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc`
