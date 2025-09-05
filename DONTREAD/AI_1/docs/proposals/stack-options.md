### Title
Cross-Domain Stack Options (Curated)

### Goal(s)
- Provide stack choices per domain with governance-compatible profiles.

### Assumptions
1. Final choices depend on org constraints and team skills.
2. Security and quality gates apply regardless of stack.

### Alternatives
- Mandate a single stack. Rejected: reduces adaptability.

### Risks and mitigations
- Choice overload (M×L): Present 2–3 options per domain with trade-offs.

### Dependencies
- Capability map; delivery pipeline; security/testing plans.

### Options
- Frontend (web): React/Next.js, Vue/Nuxt, SvelteKit — align with UI rules.
- Mobile: React Native/Expo, Flutter, Kotlin/Swift native — CI profiles per OS.
- Backend/API: Node (Express/Fastify/Nest), Python (FastAPI), Go (Fiber/Gin).
- Data/ML: Python (pandas/Polars, scikit-learn), batch/stream ETL.
- Databases: Postgres, MySQL, SQLite for dev; object storage for blobs.
- Infra: IaC (Terraform/Pulumi), containers (Docker), orchestrators (K8s/Serverless).

### Trigger → Rule → Outputs → Gates
| Capability | Rule(s) | Outputs | Gates |
|---|---|---|---|
| context.load | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` | Stack decision notes | — |
| code.quality | `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc` | Quality profiles | CI pass |
| security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | SEC notes | Block criticals |
| docs.sync | `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | Decision records | Docs lint |

### Success Metrics
- Decisions documented with rationale; 0 critical vulns at gates.

### Next Steps
- Pick defaults per domain; encode in templates.

### Why this route + Confidence
- Balanced flexibility with strong gates.
- Confidence: 0.82.
