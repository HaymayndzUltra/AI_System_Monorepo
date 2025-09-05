### Title
Security Plan applying F8 Security & Compliance Overlay

### Goal(s)
- Apply the F8 overlay across capabilities and domains with explicit gates.

### Why this route + Confidence
- Why: Security/compliance are non-negotiable; F8 defines enforceable gates.
- Confidence: 0.88.

### Assumptions
1) No plaintext secrets; env-injection or secret manager.
2) CI integrates SAST/DAST and policy-as-code.

### Threat Model (STRIDE-lite)
- Assets: source code, configurations, data stores, credentials, artifacts.
- Entry points: APIs, UI inputs, CI/CD, IaC changes.
- Mitigations: authz, input validation, output encoding, encryption, logging/audit.

### Overlay Controls
- Secrets & Config: scan and block, no secrets in repo.
- Dependency & Supply Chain: SCA, SBOM on releases.
- Authn/Authz: default deny, least privilege.
- Transport/Storage: TLS, HSTS, encrypted storage.
- Privacy: data minimization, consent, retention, deletion.
- Observability & Audit: structured logs, correlation IDs, audit trails.

### Trigger → Rule(s) → Outputs → Gates

| Trigger | Rule(s) | Outputs | Gates |
|---|---|---|---|
| security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | Security notes, risk register | Block on criticals |
| modify | `4-master-rule-code-modification-safety-protocol.mdc` | Safety plan | Must pass |
| audit/validate | `8-auditor-validator-protocol.mdc` | Audit/validation | Must pass |
| docs.sync | `5-master-rule-documentation-and-context-guidelines.mdc` | Updated security docs | Docs checks |

### Alternatives
- Rely on informal reviews: insufficient; keep F8 as MUST.

### Risks and mitigations
- False positives (Med × Low): tune gates_config; maintain allowlists.

### Dependencies
- Master rules; CI gates; secret manager.

### Success Metrics
- Zero criticals merged; SBOM present on releases; audit logs complete.

### Next Steps
- Wire CI scanning and SBOM; define sensitive data maps per domain.

