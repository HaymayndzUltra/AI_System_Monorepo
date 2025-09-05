### Phase-by-phase rollout plan (to apply all recommendations)

#### Phase 0 — Kickoff & Scope Lock (0.5–1 week)
- **Goals**: Piliin default strategy (Strategy‑A: Capability‑First), i‑confirm Domain×Lifecycle gates, i‑identify owners.
- **Owners**: Arch + Sec + DevEx + QA leads.
- **Deliverables**: RFC one‑pager referencing `DONTREAD/AGGREGATE_2/docs/proposals/*`.
- **Exit/Gates**: Consensus + sign‑off; risks logged.

#### Phase 1 — Capability Registry & Routing Log Scaffolding (2–3 days)
- **Actions**:
  - I‑encode ang Capability Registry (mula `agent-consolidated-plan.md`) bilang shared config.
  - I‑setup ang routing log schema (fields: capability, rules, overlays, confidence, outcomes).
- **Rules**: `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc`, `5-master-rule-documentation-and-context-guidelines.mdc`.
- **Deliverables**: Registry config + routing-log format doc.
- **Exit/Gates**: Docs lint pass; stakeholders can read/trace mapping.

#### Phase 2 — Dual Routing (Legacy ↔ Capability) + Parity Logs (1 week)
- **Actions**:
  - I‑apply ang backward‑compat table (old trigger → new capability) mula `agent-trigger-redesign.md`.
  - I‑enable confidence scoring; mag‑clarify kapag < 0.70; i‑emit parity logs.
- **Rules**: `7-dev-workflow-command-router.mdc`, `2-master-rule-ai-collaboration-guidelines.mdc`.
- **Metrics/Gates**: ≥95% parity vs legacy; zero dropped F8 overlays.
- **Risks/Mitigations**: Misclassification → clarify + safe overlays by default.

#### Phase 3 — Policy DSL + CI Gates (F8, Mod‑Safety, Docs‑Sync, Audit/Validate) (1–2 weeks)
- **Actions**:
  - I‑encode ang baseline policy DSL (see `agent-consolidated-plan.md` “Policy DSL”).
  - CI wiring: F8 (secrets/SBOM/SCA/SAST), Mod‑Safety checklists, Docs‑Sync on changes, Auditor/Validator for critical paths.
- **Rules**: `F8-security-and-compliance-overlay.mdc`, `4-master-rule-code-modification-safety-protocol.mdc`, `8-auditor-validator-protocol.mdc`, `5-master-rule-documentation-and-context-guidelines.mdc`.
- **Gates**: Criticals block (F8), safety checklists required, audit/validate must pass.
- **Metrics**: 0 criticals merged; ≥95% gate pass rate on main.

#### Phase 4 — UI AA/Perf Budgets & Tokens (kung may UI) (3–5 days)
- **Actions**:
  - I‑adopt tokens/grids at budgets (INP/LCP/CLS) at a11y checks.
  - I‑setup automated checks (e.g., axe/Playwright/Lighthouse).
- **Rules**: `common-rule-ui-foundation-design-system.mdc`, `common-rule-ui-interaction-a11y-perf.mdc`.
- **Gates**: AA contrast pass; INP p75 ≤ 200ms; LCP p75 ≤ 2.5s.

#### Phase 5 — Domain×Lifecycle Integration sa Dev‑Workflow (3–5 days)
- **Actions**:
  - I‑wire ang router outputs sa `.cursor/dev-workflow/*` (plan → taskgen → execute → retro).
  - I‑log stage transitions at acceptance criteria per stage.
- **Rules**: `7-dev-workflow-command-router.mdc`.
- **Gates**: Stage completion logs present; docs updated.

#### Phase 6 — Cutover to Capability‑First Default + Deprecation (2 release cycles)
- **Actions**:
  - I‑flip ang router default sa capability‑first; legacy triggers as aliases.
  - I‑announce deprecation window; keep rollback toggle.
- **Gates**: <1% required clarify; ≥95% parity sustained; rollback tested.

#### Phase 7 — Observability & Release Overlays (minimal first) (1 week)
- **Actions**:
  - I‑define SLOs at dashboards; basic release notes/checklists.
  - Treat project‑rules as optional/placeholder; fallback to master/common + docs gates.
- **Rules**: `.cursor/rules/project-rules/F10-observability.mdc` (optional), `.cursor/rules/project-rules/F9-release.mdc` (optional).
- **Gates**: SLOs documented; release checklist published.

#### Phase 8 — Security Hardening & IR Runbooks (0.5–1 week, ongoing)
- **Actions**:
  - Enforce secret scanning, SBOM on releases, dependency SLAs.
  - I‑publish incident response playbooks and sensitive‑data maps.
- **Rules**: `F8-security-and-compliance-overlay.mdc`.
- **Metrics**: 0 hardcoded secrets; critical vulns fixed within SLA.

#### Phase 9 — Audit & Retrospective (2–3 days)
- **Actions**:
  - Run Auditor → Validator; i‑publish results; conduct retro; tune policies/thresholds.
- **Rules**: `8-auditor-validator-protocol.mdc`, `4-implementation-retrospective.md`.
- **Gates**: Audit/validation pass; action items logged and scheduled.

### Cross-cutting RACI, metrics, and dependencies
- **RACI**:
  - Arch/DevEx: Registry, router, CI DSL; QA: tests/budgets; Sec: F8/SBOM; PM: comms/deprecation; SRE: observability.
- **Core metrics**:
  - Routing parity ≥95%; Gate pass ≥95%; 0 criticals; PR feedback <15m; UI budgets met; clarify rate <5%.
- **Dependencies**:
  - CI runners, secret manager, SAST/SCA, artifact store, test infra, telemetry backend.

### What to do next (immediate)
- Approve Phase 0 scope lock.
- Start Phase 1 (registry + routing log) using `DONTREAD/AGGREGATE_2/docs/proposals/agent-consolidated-plan.md` as source of truth.
- Prepare CI changes for Phase 3 (create `ci/gates_config.yaml`, wire F8/mod‑safety/docs/audit).

