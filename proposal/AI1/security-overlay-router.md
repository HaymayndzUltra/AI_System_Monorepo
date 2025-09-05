<!-- File: docs/proposals/security-overlay-router.md -->

### Security & Compliance Overlay Router (S1)

- **Goals**
  - Make F8 overlay first-class and unavoidable for risk-bearing intents.
  - Centralize: secrets, SBOM, SAST/DAST, authz, privacy, audit.

- **Assumptions**
  - Compliance requirements vary; overlay remains configurable.
  - No plaintext secrets in code; env injection enforced.

- **Alternatives**
  - Attach F8 only via Tri-Axis (H3) risk path.

- **Risks**
  - False positives may slow benign tasks; mitigate with severity thresholds.
  - Developer fatigue; mitigate with automation and evidence templates.

- **Dependencies**
  - Secrets scanners, SCA tools; audit log sinks.

### Overlay Logic
- If message contains security/audit/secrets/data categories or repo signals (cred files, auth code, IaC), enable F8.
- Attach Auditor/Validator for governance cases (release, audit).

### Trigger ↔ Rule(s) ↔ Files/Outputs
| Signal | Rules | Outputs |
|---|---|---|
| secrets, keys, tokens | F8 | Secrets policy, scanning results |
| PII/PHI, GDPR/CCPA | F8 | Data classification + retention policy |
| RBAC, admin, enterprise | F8 + Premium (UI) | RBAC matrix, audit trails |
| release with security | F8 + F9 + 8 | Gate checklist + audit report |

### Backward-Compat
- Old "security, threat, audit" → Overlay F8 applied irrespective of domain/capability.

### Example Messages → Resolution
- "Store OAuth secrets safely" → F8 + secrets policy.
- "Enable admin-only export logs" → F8 + Premium UI gating.

### Migration Plan
- Introduce overlay as additive step in all routers.
- Mirror-on; report overlay activation rates.
- Enforce overlay for high-risk signals; config gates.

### Success Metrics
- 0 secret leaks in commits.
- 100% of PII-affecting tasks have threat models and evidence.
- SBOM generated for releases with artifacts.

### Next Steps
- Wire scanners and evidence generators.
- Add overlay decision logs.
- Publish security playbooks per domain.
