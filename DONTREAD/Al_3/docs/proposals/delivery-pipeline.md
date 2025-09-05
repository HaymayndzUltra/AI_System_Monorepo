### Title
Delivery Pipeline aligned to Dev-Workflow and Security Overlays

### Goal(s)
- Define a capability-first CI/CD flow referencing `.cursor/dev-workflow/*` and master/common rules.
- Make security (F8) and modification safety mandatory gates.

### Why this route + Confidence
- Why: The session requires multi-domain applicability with explicit gates. Dev-workflow provides lifecycle docs, and F8 provides security gates.
- Confidence: 0.88 (no clarify needed).

### Assumptions
1) No project-rules present; observability/release gates are optional.
2) Stages are documentation-oriented for this session.

### Pipeline Stages
- Plan: `/.cursor/dev-workflow/0-master-planner.md`, `1-create-prd.md` → PRD and scope.
- Taskgen: `2-generate-tasks.md` → actionable tasks.
- Execute: `3-process-tasks.md`, `5-background-agent-coordination.md` → implementation.
- Retrospective: `4-implementation-retrospective.md` → learnings.
- Security Overlay: `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` → threat model, secrets policy.
- Modification Safety: `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` → change plan.
- Audit/Validate: `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` → audit/validation reports.
- Docs Sync: `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` → updated docs.

### Triggers → Rules → Outputs → Gates

| Stage/Trigger | Rule(s) | Outputs | Gates |
|---|---|---|---|
| Plan/PRD | `7-dev-workflow-command-router.mdc` | PRD, plan | Stage complete |
| Tasks | `7-dev-workflow-command-router.mdc` | Task list | Stage complete |
| Execute | `7-dev-workflow-command-router.mdc` | Implemented changes | Stage complete |
| Security | `F8-security-and-compliance-overlay.mdc` | Security notes | Block on criticals |
| Mod Safety | `4-master-rule-code-modification-safety-protocol.mdc` | Safety checklist | Must pass |
| Docs | `5-master-rule-documentation-and-context-guidelines.mdc` | Updated docs | Docs checks |
| Audit/Validate | `8-auditor-validator-protocol.mdc` | Audit/validation | Must pass |

### Alternatives
- Code-first pipeline without overlays: Faster but risk-prone; not recommended.
- Policy-only gates before plan: Slows discovery; keep overlays after scope lock.

### Risks and mitigations
- Gate fatigue (Med × Med): Automate via `ci/run_gates.py` and tune `ci/gates_config.yaml`.
- Missing framework-specific tests (High × Low): Treat test.* as optional; plan future rules.

### Dependencies
- `.cursor/dev-workflow/*` and `.cursor/rules/master-rules/*`, `.cursor/rules/common-rules/*`

### Success Metrics
- Gates configured and enforced; zero criticals bypassed.
- Docs updated every stage; audit/validate available on demand.

### Next Steps
- Integrate pipeline map with strategy choice (see `decision-matrix.md`).
- Parameterize `ci/gates_config.yaml` thresholds per capability.

