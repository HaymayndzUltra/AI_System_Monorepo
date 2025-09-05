### Routing Log (AI_3)

Why this route: Multi-domain, capability-first requirement with overlays and dev-workflow references.

Confidence: 0.88 (no clarify needed). Key signals: "capability", "triggers", "rules", "overlays", references to `.cursor/rules/*` and `/.cursor/dev-workflow/*`.

Applied overlays: F8 security overlay [MUST], modification safety [MUST], docs sync [MUST], audit/validate [MUST when invoked].

Entries
- capability-map.md → context.load + docs.sync; Gates: docs checks.
- delivery-pipeline.md → workflow.* + safety + F8; Gates: safety/F8.
- decision-matrix.md → workflow.plan; Gates: stage complete.
- strategy-A/B/C → workflow.plan; Gates: stage complete.
- stack-options.md → modality alignment; Gates: advisory + AA/Perf for UI.
- domain-architecture.md → domain mapping; Gates: contracts checklist.
- fe-ux-plan.md → ui.foundation + ui.interaction; Gates: AA/INP/LCP.
- data-plan.md → data.pipeline + validation.run; Gates: validation must pass.
- security-plan.md → security.overlay; Gates: criticals block.
- testing-strategy.md → test.* + audit/validate; Gates: pass rates.
- observability-plan.md → observe.*; Gates: SLO checks.
- milestones.md → docs.sync; Gates: milestone acceptance criteria.
- trigger-redesign.md → router proposal; Gates: parity + rollback plan.

Clarify prompts issued: none (all confidences ≥ 0.78).

