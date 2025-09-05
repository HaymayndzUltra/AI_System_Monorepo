### Apply Report — Governance Extensions

Date: {{UTC}}

Scope
- Created `/governance` with deterministic routing, tool usage schema, confirmation lexicon, handoff/doc drift/acceptance templates, and a manifest.

Files Added (with purpose)
1) `/governance/router-probe-spec.md` — BIOS↔Router Step‑0 probe + canonical announcement; prevents race conditions.
2) `/governance/router-config.yaml` — confidence threshold, precedence, sort order, overlays, determinism knobs.
3) `/governance/path-aliases.json` — logical→actual path mapping for Router; avoids dead routes.
4) `/governance/ruleset-lock.schema.json` — schema for deterministic ruleset lock.
5) `/governance/ruleset-lock.example.json` — example payload for lock emission.
6) `/governance/tool-capability.schema.json` — tool capability declaration schema.
7) `/governance/tool-usage-guidelines.md` — [TOOL REPORT]/[TOOL ACTION] blocks + examples.
8) `/governance/confirmation-lexicon.json` — accepted confirmation tokens + timeout reminder.
9) `/governance/handoff-package-spec.md` — Handoff Package v1 + status schema + gates.
10) `/governance/doc-drift-checklist.md` — doc drift checklist + README Coverage Index.
11) `/governance/pr-templates/ui-governance.md` — canonical UI governance PR template.
12) `/governance/unified-acceptance-matrix.md` — single source for code/docs/UX/security gates.
13) `/governance/.manifest.json` — checksums of all governance files.

Operational Notes
- Project‑rules remain (placeholder/optional); master/common rules are authoritative.
- Security F8 overlay applies when risk is non‑trivial; no secrets in logs/artifacts.
- Router.resolve is read‑only and MUST NOT call BIOS (loop‑safety).

Next Steps
- Wire BIOS Step‑0 call and ruleset‑lock emission in your runtime.
- Enforce PR template and acceptance matrix in repo settings/CI.
- Add project overrides for coverage/UX budgets if needed.

