### Title
Security & Compliance Plan (F8 Overlay)

### Goal(s)
- Apply the F8 Security & Compliance Overlay across all domains consistently.

### Assumptions
- No plaintext secrets; use secret manager; HTTPS/TLS enforced.

### Plan
- Threat modeling & data flow (STRIDE-lite) per feature.
- Secrets & config via env/secret manager; no repo secrets.
- SCA/SAST/DAST in CI; SBOM for releases.
- AuthN/Z via least privilege; sensitive ops with step-up auth.
- Observability & audit trails; incident response playbooks.

### Trigger → Rule(s) → File(s)/Outputs
| Trigger | Rule(s) (FULL PATH) | Files/Outputs | Gates |
|---|---|---|---|
| security, compliance, audit | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | [SECURITY CHECK] logs | Criticals block |
| audit/validate | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | audit/validation reports | Blocks on criticals |

### Alternatives
- Team-by-team security practices: inconsistent and risky.

### Risks and Mitigations
- Gate fatigue (M×M): severity-tiered policies; educate developers.

### Dependencies
- Secret manager; scanners; logging backend.

### Success Metrics
- Zero hardcoded secrets; critical vulns remediated within SLA.

### Next Steps
- Codify policies; add CI jobs and dashboards.

### Why this route + Confidence
Signals: F8 overlay available and mandated. Confidence: 0.86.

### References
- `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc`
- `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc`
