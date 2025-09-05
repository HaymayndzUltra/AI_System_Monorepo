### Governance, Rule Authoring, and Quality Bar

## Goals
- Standardize rule metadata and lifecycle.
- Enable safe evolution with deprecation, versioning, and acceptance checks.

## Rule Frontmatter v2
```yaml
---
description: "TAGS: [tag1,tag2] | TRIGGERS: k1,k2 | SCOPE: scope | DESCRIPTION: One sentence."
alwaysApply: false
version: 2
deprecates: []
supersedes: []
stability: stable|beta|experimental
acceptance:
  - check: "No hardcoded secrets present"
    rule: "security.secrets.scan"
    severity: critical
  - check: "AA contrast ratio≥4.5:1"
    rule: "ui.a11y.contrast"
    severity: high
outputs:
  - type: doc
    path_hint: "docs/**/*.md"
audit:
  evidence_required: true
---
```

## Authoring Workflow
- Propose → Lint → Review → Publish.
- Lints: metadata completeness, trigger collisions, output types.

## Trigger ↔ Rule(s) ↔ Files/Outputs
| Trigger | Rules | Outputs |
|---|---|---|
| `workflow.discovery` | `1-master-rule-context-discovery.mdc` | PRD draft |
| `workflow.audit` | `8-auditor-validator-protocol.mdc` | Auditor report template |
| `security.f8` | `F8-security-and-compliance-overlay.mdc` | Threat model doc |

## Risks
- Author friction; mitigate with scaffolds and examples.

## Dependencies
- Rule linter and registry.

## Success Metrics
- 100% rules with v2 metadata.
- <24h rule review SLA.

## Next Steps
- Build rule linter.
- Migrate core rules to v2 metadata.
