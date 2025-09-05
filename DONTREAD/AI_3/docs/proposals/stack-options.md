### Title
Stack Options across Modalities (Web, Mobile, Backend/API, Data/ML, CLI/Desktop, Infra)

### Goal(s)
- Provide vetted stack options per modality with rule and gate alignment.

### Why this route + Confidence
- Why: The session requires applicability across project types; this normalizes choices with gates.
- Confidence: 0.84.

### Assumptions
1) Organization prefers open-source defaults; cloud-agnostic where possible.
2) Security and safety overlays are mandatory where applicable.

### Options by Modality (examples)
- Web: React/Vite or Next.js; Testing: Playwright/Jest; Styling: CSS Modules/Tailwind; API: REST/GraphQL clients.
- Mobile: React Native/Flutter; Testing: Detox/Flutter test.
- Backend/API: Node (Express/Nest), Python (FastAPI), Go (Fiber/Gin). DB: Postgres.
- Data/ML: dbt/Airflow, Pandas/PySpark; Model: scikit-learn/LightGBM; Tracking: MLflow.
- CLI/Desktop: Python Typer/Click; Electron/Tauri for desktop.
- Infra: Terraform; CI: GitHub Actions; Containers: Docker.

### Trigger → Rule(s) → Outputs → Gates

| Modality | Trigger | Rule(s) | Outputs | Gates |
|---|---|---|---|---|
| Web | ui.foundation, ui.interaction | `common-rule-ui-foundation-design-system.mdc`, `common-rule-ui-interaction-a11y-perf.mdc` | Tokens/specs | AA/INP/LCP |
| Mobile | ui.interaction | `common-rule-ui-interaction-a11y-perf.mdc` | Interaction specs | Perf budgets |
| Backend/API | code.quality, code.modify.safety | `3-master-rule-code-quality-checklist.mdc`, `4-master-rule-code-modification-safety-protocol.mdc` | Quality notes, safety checklist | Safety gates |
| Data/ML | data.pipeline, validation.run | `8-auditor-validator-protocol.mdc` | Contracts, validation | Must pass |
| CLI/Desktop | code.quality | `3-master-rule-code-quality-checklist.mdc` | Quality notes | Advisory |
| Infra | infra.iac, security.overlay | `F8-security-and-compliance-overlay.mdc` | Policy notes | Block on criticals |

### Alternatives
- Opinionated single-stack: faster onboarding but limits flexibility; avoid for multi-project orgs.

### Risks and mitigations
- Fragmentation (Med × Med): Enforce gates and minimal baselines (lint/tests/security).

### Dependencies
- Master/common rules, dev-workflow, CI gates configuration.

### Success Metrics
- Time-to-first-PR ≤ 1 day; gate pass rate ≥ 95%.

### Next Steps
- Select per-project defaults; track outcomes in `milestones.md`.

