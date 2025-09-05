### Title
Domain Architecture: Capability-First, Layered

### Goal(s)
- Provide a domain architecture blueprint that maps capabilities to layers: presentation, application, domain, data, infra.

### Assumptions
- Hexagonal/clean architecture principles are acceptable defaults.

### Architecture
- Presentation (UI/CLI/API surface): aligns with ui.foundation/ui.interaction or API contracts.
- Application: orchestrates use-cases; triggers workflows.
- Domain: pure business logic; testable in isolation.
- Data: repositories, caching, external systems.
- Infra: deployment, IaC, runtime.

### Cross-Cutting Concerns
- Security F8, Code-Modification Safety, Observability, Docs Sync, Audit/Validate.

### Trigger → Rule(s) → File(s)/Outputs
| Trigger | Rule(s) | Files/Outputs | Gates |
|---|---|---|---|
| "domain architecture" | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc`, `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc`, `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc`, `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc`, `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | `/workspace/DONTREAD/AI_2/docs/proposals/domain-architecture.md` | Critical overlays enforced |

### Alternatives
- Layerless microservices: faster initially; risks duplication and coupling.
- Big-ball monolith: simple but less evolvable.

### Risks and Mitigations
- Over-engineering (M×M): right-size layers per complexity.
- Cross-layer leakage (M×M): contracts and tests at boundaries.

### Dependencies
- Contract testing tools; IaC platform; logging/metrics.

### Success Metrics
- High cohesion, low coupling metrics; stable interfaces across releases.

### Next Steps
- Define domain boundaries and contracts per project.

### Why this route + Confidence
Signals: need for broad applicability, governance overlays. Confidence: 0.81.

### References
- Master/common rules referenced throughout.
