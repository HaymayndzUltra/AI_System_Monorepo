### Title
Unified Delivery Pipeline (Capability-Gated)

### Goal(s)
- Define an end-to-end, capability-gated delivery pipeline applicable to web, mobile, backend/API, data/ML, CLI/desktop, and infra.
- Make gates explicit: Security (F8), Code-Modification Safety, Tests, Observability, and Release controls.
- Ensure deterministic triggers → rules → artifacts mapping.

### Assumptions
- CI/CD tooling exists or can be provisioned; details are out-of-scope here.
- Release-specific project rules (e.g., `.cursor/rules/project-rules/F9-release.mdc`) are placeholders/optional; fall back to master/common rules.
- No external network calls from this proposal; artifacts are docs/reports only.

### Pipeline Stages (generic)
- Plan: requirements, PRD, tasks (dev-workflow).
- Build: compile/package, containerize where applicable.
- Test: unit → integration → e2e → security scans.
- Verify: contract tests, performance budgets, AA checks (for UI).
- Release: staged rollouts with canary + rollback.
- Observe: metrics, traces, logs with SLOs and error budgets.

### Triggers and Overlays per Stage
- Plan: `workflow.plan`, `workflow.taskgen`, overlay: Security F8 (threat notes), Docs Sync.
- Build: `workflow.execute`, overlay: Code-Modification Safety.
- Test: `audit.run`, `validation.run`, overlay: Security F8, QA.
- Release: `release.prepare`, `release.deploy` (placeholder/optional), overlay: Release policy.
- Observe: `observe.metrics|traces|logs` (placeholder/optional), overlay: Observability.

### Trigger → Rule(s) → File(s)/Outputs → Gates
| Trigger(s) | Rule(s) (FULL PATH) | Files/Outputs | Gates |
|---|---|---|---|
| plan, taskgen | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | dev-workflow outputs | Required for lifecycle flow |
| modify/edit | `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` | change plan | Blocks risky changes |
| audit.run, validation.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | audit/validation reports | Blocks on criticals |
| security | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | [SECURITY CHECK] logs | Blocks on criticals |
| docs | `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | updated docs | Must be current |
| release.* (optional) | `.cursor/rules/project-rules/F9-release.mdc` | release notes | Placeholder; fallback to master/common |
| observe.* (optional) | `.cursor/rules/project-rules/F10-observability.mdc` | telemetry specs | Placeholder; fallback to master/common |

See master table in `/workspace/DONTREAD/AI_2/docs/proposals/capability-map.md`.

### Alternatives
- Centralized monolithic pipeline: simpler but less flexible across domains.
- Per-domain bespoke pipelines: flexible but inconsistent governance.
- Hybrid (recommended): shared gates, domain-specific tasks.

### Risks (Likelihood × Impact) and Mitigations
- Misconfigured gates (M×H): codify gates as policy files; peer review.
- Gate fatigue (M×M): prioritize critical gates; report-only for minors.
- Release stalls due to criticals (L×H): introduce canary paths and clear rollback.

### Dependencies
- CI/CD environment, secret manager, artifact storage.
- Test frameworks per stack; observability backend.

### Success Metrics
- ≥95% builds pass defined gates on main.
- <2% hotfixes that bypass gates per quarter.
- <1h MTTD for critical regressions post-release.

### Next Steps
- Instantiate policies for gates (security, tests, perf, AA).
- Wire dev-workflow stages to pipeline triggers.
- Define canary + rollback runbooks.

### Why this route + Confidence
Signals: cross-domain requirement, existing master/common rules, explicit overlay need. Confidence: 0.84.

### References
- `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc`
- `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc`
- `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc`
- `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc`
- `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc`
- `.cursor/rules/project-rules/F9-release.mdc` (placeholder/optional)
- `.cursor/rules/project-rules/F10-observability.mdc` (placeholder/optional)
