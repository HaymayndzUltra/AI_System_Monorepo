### Title
Stack Options by Domain with Capability Gates

### Goal(s)
- Present curated stack options per domain (web, mobile, backend/API, data/ML, CLI/desktop, infra) aligned to capabilities and gates.

### Assumptions
- Teams may mix-and-match; governance gates remain consistent regardless of stack.
- No external network reads; this is guidance, not a lock-in.

### Options (Illustrative)
- Web Frontend: React/Vue/Svelte; SSR frameworks when SEO/Perf needed.
- Mobile: React Native/Flutter/Native; shared domain logic via modules.
- Backend/API: Node/Express/Nest, Python/FastAPI, Go/Fiber; GraphQL when schema-first needed.
- Data/ML: Python (Pandas/Spark), dbt, Airflow; MLFlow for experiments.
- CLI/Desktop: Node/CLI, Python/Click; Electron/Tauri for desktop.
- Infra: Terraform/Pulumi; Kubernetes or serverless based on scale.

### Capability Gates Applied
- Always-on: Context Discovery, AI Collaboration, Security F8, Docs Sync.
- Change risk: Code-Modification Safety.
- Testing: Auditor/Validator for critical paths.
- UI projects: UI AA/Perf gates.

### Alternatives
- Single standardized stack across org: simplifies ops but reduces fit.
- Fully bespoke per team: maximizes fit but increases governance overhead.

### Risks and Mitigations
- Fragmentation (M×M): enforce shared capabilities and gates, not stacks.
- Skill gaps (M×M): training plans and pairing.

### Dependencies
- CI/CD templates per stack; secret manager; observability templates.

### Trigger → Rule(s) → File(s)/Outputs
| Trigger | Rule(s) (FULL PATH) | Files/Outputs | Gates |
|---|---|---|---|
| "stack options" | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc`, `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc`, `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | `/workspace/DONTREAD/AI_2/docs/proposals/stack-options.md` | F8 blocks criticals |

### Success Metrics
- ≥90% of projects can select a recommended stack without exceptions.

### Next Steps
- Build CI templates per recommended stack with embedded gates.

### Why this route + Confidence
Signals: multi-domain scope, governance-first. Confidence: 0.8.

### References
- Master/common rules referenced above.
