# Backward‑Compatibility Table (Old Triggers → New Capability Triggers → Rules/Files)

| Old Trigger(s) | New Capability Trigger(s) | Applied Rules | Files/Outputs |
|---|---|---|---|
| rule, context, analyze | context.load | 1-context-discovery | Loaded READMEs; selected rules |
| security, compliance, governance, threat, audit | security.overlay (+ security.audit) | F8 (+ A/V) | Threat model; SBOM; audit plan |
| conflict, clarify, proceed, how to, question | collab.resolve (alias) | 2-collaboration | Plan/clarifications |
| code, develop, refactor, implement, fix, quality | code.quality | 3-quality | Quality checklist plan |
| modify, edit, change, update, refactor, implement | code.modify.safety | 4-mod-safety | Change plan; validation checklist |
| readme, documentation, refactoring, structure, docs | docs.sync | 5-docs | Updated docs/* |
| complex, feature, algorithm, state-machine, api-integration | context.load + code.modify.safety | 6-complex + 4-mod-safety | Snapshot + safety plan |
| foundation, design tokens, AA, grid, spacing, typography | ui.foundation | UI‑foundation rule | tokens, style guide, AA proofs |
| interaction, accessibility, aria, animation, LCP/INP/CLS | ui.interaction | UI‑interaction rule | a11y/perf specs |
| premium, brand, dataviz, enterprise, RBAC | ui.premium | UI‑premium + F8 | enterprise pack |
| bootstrap, setup, initialize, project start | workflow.bootstrap | dev‑workflow router | bootstrap protocol |
| master plan, framework ecosystem, parallel development | workflow.plan, workflow.parallel | dev‑workflow | strategy/coordination |
| prd, requirements, product spec | workflow.plan | dev‑workflow + F2 | PRD |
| task generation, implementation plan | workflow.taskgen | dev‑workflow | tasks‑*.md |
| execute, implement, process tasks | workflow.execute | dev‑workflow + F6 | exec plan |
| retrospective, review, improvement | workflow.retro | dev‑workflow + F10 | retro notes |
| audit {scope} @ {SHA} | audit.run | 8-A/V | audit report |
| validate {scope} using {audit} | validation.run | 8-A/V | validation report (GO) |

