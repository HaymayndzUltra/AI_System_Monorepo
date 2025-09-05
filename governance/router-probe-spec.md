### Title
Step‑0 Router Probe + Canonical Announcement (BIOS↔Router Handshake)

### Goal
Deterministic first step: BIOS inventories rules, then performs a read‑only Router “resolve” before announcing and proceeding.

### Handshake (required)
1) BIOS Inventory
- Inventory `.cursor/rules/master-rules`, `.cursor/rules/common-rules`, `.cursor/rules/project-rules` (project rules are placeholder/optional).

2) Step‑0 Router Probe (read‑only)
- Call Router.resolve(intent, context, path_aliases) → { protocol_file, capabilities[], confidence_map, warnings[] }.
- Protocol MUST be `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` or resolved via path aliases.
- Router.resolve MUST NOT call BIOS (avoid loops) and MUST have zero side effects.

3) Canonical Announcement (exact order)
Applying Dev‑Workflow: {protocol_file}
Loaded: {sorted_full_rule_paths}
Overlays: {F8, Mod‑Safety, Docs Sync, Audit/Validate as applicable}
Notes: {warnings|clarify if max_confidence < 0.70}

4) Deterministic Selection
- Precedence: Capability‑First → Domain×Lifecycle → Policy overlays.
- Sort rules lexicographically by absolute path.
- Scope priority: master > common > project (project=optional unless explicitly triggered).
- If max confidence < 0.70, emit a one‑line clarify and pause: “To route precisely: confirm domain (UI/API/Data/Infra) and lifecycle (plan/execute/release/retro).”

5) Fallbacks
- If protocol not found: resolve via `/governance/path-aliases.json`; if still missing:
  [ROUTER WARNING] Missing {protocol}. Using closest available {resolved_path}.
- Do NOT silently swap without warning.

### Logging (required)
- Emit `reports/ruleset-lock.json` and `reports/routing-log.md` per run.

### Security
- No secrets in logs; F8 overlay applies when security/compliance risk is non‑trivial.

### Example (abbrev)
Applying Dev‑Workflow: .cursor/rules/master-rules/7-dev-workflow-command-router.mdc
Loaded: [.cursor/rules/master-rules/1-master-rule-context-discovery.mdc, …]
Overlays: [F8-security-and-compliance-overlay, code-modification-safety, docs-sync]
Notes: —

