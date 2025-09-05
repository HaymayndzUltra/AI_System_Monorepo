### Security & Compliance Overlay v2 (F8+)

## Goals
- Expand `security.f8` into actionable, pluggable checks with runtime posture.
- Cover secrets, SCA/SAST/DAST, auditability, privacy, and incident readiness.

## Overlay Architecture
```yaml
overlay.security.f8:
  components:
    - secrets: detect + block commits with secrets
    - deps: SCA with allowlist/denylist and severity thresholds
    - input_validation: schema limits, size, content-type
    - authz: RBAC/ABAC patterns with step-up auth
    - transport: TLS/HSTS/secure cookies
    - privacy: data minimization + retention docs
    - observability: correlation IDs, redaction, audit trails
    - incident: IR playbook templates + rollback hooks
```

## Trigger ↔ Rule(s) ↔ Files/Outputs
| Trigger | Rules | Outputs |
|---|---|---|
| `security.f8` | `F8-security-and-compliance-overlay.mdc` | Threat model, SBOM checklist, audit plan |
| `infra.cicd` | `7-dev-workflow-command-router.mdc` (gates) | Policy gates spec |
| `workflow.audit` | `8-auditor-validator-protocol.mdc` | Security audit report |

## Risks
- False positives; tune thresholds and provide bypass with sign-offs.

## Dependencies
- Policy-as-code runner, secrets detection, SCA scanners.

## Success Metrics
- Zero plaintext secrets in repo history post-migration.
- Critical CVEs auto-flagged and blocked by CI.

## Next Steps
- Define policy packs per stack (web, mobile, backend, data/ML).
- Integrate overlay hooks in router outputs.
