### PR: Adopt AGGREGATE_2 Proposals and Reports

#### Summary
- Imported proposal/report sets from:
  - `cursor/synthesize-ai-proposals-and-generate-reports-aca3` → `DONTREAD/AGGREGATE_1/*`
  - `cursor/synthesize-ai-proposals-and-reports-b29d` → `DONTREAD/AGGREGATE_2/*`
- Compared both sets across proposals, manifest, and session info.
- Recommendation: **Adopt AGGREGATE_2** as the program source of truth.

#### Rationale (high-signal)
- Crisper structures with explicit precedence (Capability → Domain×Lifecycle → Policy overlays).
- Cleaner capability registry and baseline policy DSL with concrete gates that block on criticals (F8, Mod-Safety, Audit/Validate, Docs‑Sync).
- Executable rollout plan (owners, time bounds, gates, success metrics) and immediate next steps.
- Standardized readouts with [MUST]/[GUIDELINE] clarity and clarify rule (≥0.70 confidence threshold).
- Self-consistent manifest and normalized session metadata.

#### Files compared (key deltas)
- `DONTREAD/AGGREGATE_*/docs/proposals/agent-consolidated-plan.md`
- `DONTREAD/AGGREGATE_*/docs/proposals/agent-phase-plan.md`
- `DONTREAD/AGGREGATE_*/docs/proposals/agent-readout-per-folder.md`
- `DONTREAD/AGGREGATE_*/docs/proposals/agent-trigger-redesign.md`
- `DONTREAD/AGGREGATE_*/reports/.manifest.json`
- `DONTREAD/AGGREGATE_*/session-info.md`

#### Governance alignment
- Uses FULL PATH references to `.cursor/rules/*` master/common rules.
- Confidence-driven clarify (<0.70) and parity logs default to safest overlays (F8 + Mod‑Safety).
- CI wiring hints included (e.g., `ci/gates_config.yaml`).

#### Next steps
1) Approve AGGREGATE_2 as canonical.
2) Encode capability registry + policy DSL; wire parity logs and CI gates.
3) Plan cutover with rollback toggle; publish canary/runbooks.

#### Acceptance checklist
- [ ] Approve AGGREGATE_2 adoption
- [ ] Schedule Phase 0–1 (registry + routing logs)
- [ ] Prepare CI config (`ci/gates_config.yaml`) for F8/Mod‑Safety/Docs/Audit

