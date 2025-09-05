### Capability-Based Trigger Router (CBR)

## Goals
- Align triggers to concrete capabilities (what the system can do), not implementation domains.
- Make routing explainable, composable, and measurable across web, mobile, backend/API, data/ML, CLI/desktop, and infra.
- Reduce trigger ambiguity and enable progressive enhancement with overlays (security, perf, docs).

## Assumptions
- Existing rules live under `/.cursor/rules/master-rules` and `/.cursor/rules/common-rules`.
- Current triggers are loosely domain/keyword-driven; we introduce capability prefixes for clarity.
- Router sits before `7-dev-workflow-command-router` to resolve high-level intent into rule sets.

## New Taxonomy
```yaml
capabilities:
  ui:
    foundation: {id: ui.foundation, tags: [design-system, tokens, AA], overlays: [security, perf]}
    interaction: {id: ui.interaction, tags: [a11y, aria, keyboard, INP], overlays: [security, perf]}
    premium: {id: ui.premium, tags: [brand, effects, dataviz], overlays: [security, perf]}
  backend:
    api: {id: backend.api, tags: [rest, graphql, contract], overlays: [security, perf, docs]}
    data: {id: backend.data, tags: [db, migration, schema], overlays: [security]}
  ml:
    pipeline: {id: ml.pipeline, tags: [etl, training, feature-store], overlays: [security, perf]}
    inference: {id: ml.inference, tags: [serving, latency], overlays: [security, perf]}
  infra:
    cicd: {id: infra.cicd, tags: [pipeline, sbom, policy-as-code], overlays: [security]}
    runtime: {id: infra.runtime, tags: [k8s, scaling, canary], overlays: [security, perf]}
  workflow:
    discovery: {id: workflow.discovery, tags: [prd, discovery]}
    planning: {id: workflow.planning, tags: [tasks, ADR]}
    implementation: {id: workflow.implementation, tags: [execute, validate]}
    audit: {id: workflow.audit, tags: [auditor, validator, reports]}
  xcutting:
    security: {id: security.f8}
    docs: {id: docs.context}
    perf: {id: perf.core}
```

## Router Logic (High-Level)
- Stage A: Parse user message → extract intents → map to capability IDs.
- Stage B: Attach overlays (security, perf, docs) per capability defaults and message cues.
- Stage C: Resolve final rule set and the expected outputs.

```yaml
routing:
  - when: "dark mode tokens" -> [ui.foundation, docs.context, security.f8]
  - when: "optimize LCP/INP" -> [ui.interaction, perf.core, security.f8]
  - when: "design API contract" -> [backend.api, docs.context, security.f8]
  - when: "create PRD / discovery" -> [workflow.discovery, docs.context]
```

## Backward-Compat (Old → New)
| Old Trigger | New Trigger(s) | Affected Rules/Files |
|---|---|---|
| foundation | `ui.foundation` | `common-rule-ui-foundation-design-system.mdc` |
| interaction,a11y,perf | `ui.interaction`, `perf.core` | `common-rule-ui-interaction-a11y-perf.mdc` |
| premium,brand,dataviz | `ui.premium` | `common-rule-ui-premium-brand-dataviz-enterprise-gated.mdc` |
| prd,discovery | `workflow.discovery` | `dev-workflow/1-create-prd.md`, `0-bootstrap-your-project.md` |
| implement | `workflow.implementation` | `dev-workflow/3-process-tasks.md` |
| audit,validator | `workflow.audit` | `8-auditor-validator-protocol.mdc` |
| security | `security.f8` | `F8-security-and-compliance-overlay.mdc` |

## Trigger ↔ Rule(s) ↔ Files/Outputs
| Trigger | Rules Applied | Files/Outputs |
|---|---|---|
| `ui.foundation` | `common-rule-ui-foundation-design-system.mdc`, `3-master-rule-code-quality-checklist.mdc` | Design tokens doc, token JSON/YAML drafts, acceptance checks |
| `ui.interaction` | `common-rule-ui-interaction-a11y-perf.mdc`, `2-master-rule-ai-collaboration-guidelines.mdc` | A11y checklist, performance budget, ARIA map |
| `ui.premium` | `common-rule-ui-premium-brand-dataviz-enterprise-gated.mdc`, `5-master-rule-documentation-and-context-guidelines.mdc` | Visual spec, enterprise gate toggles |
| `backend.api` | `4-master-rule-code-modification-safety-protocol.mdc`, `5-master-rule-documentation-and-context-guidelines.mdc` | API contract (OpenAPI/GraphQL) and change log |
| `workflow.discovery` | `1-master-rule-context-discovery.mdc`, `dev-workflow/1-create-prd.md` | PRD outline, assumptions, risks |
| `workflow.audit` | `8-auditor-validator-protocol.mdc` | Auditor/Validator report |
| `security.f8` | `F8-security-and-compliance-overlay.mdc` | Threat model, secrets policy, SBOM checklist |

## Example Resolutions
- "Add dark mode tokens with AA contrast": → `ui.foundation` + `security.f8` + `docs.context`
- "Improve INP on form submit": → `ui.interaction` + `perf.core` + `security.f8`
- "Draft GraphQL schema for v2": → `backend.api` + `docs.context` + `security.f8`

## Alternatives
- Domain-first routing (see other proposal)
- Hybrid two-stage router

## Risks
- Capability explosion; mitigate via namespacing and linting.
- Over-attachment of overlays; mitigate with explicit include/exclude.

## Dependencies
- `7-dev-workflow-command-router.mdc` integration
- Rule metadata normalization

## Success Metrics
- ≥90% auto-resolution accuracy from message → capabilities.
- ≤2s routing latency P95.
- 0 unresolved mandatory overlays (e.g., security.f8) for sensitive intents.

## Next Steps
- Implement capability ID schema.
- Add message→capability classifiers with tests.
- Instrument router decisions and export to audit logs.
