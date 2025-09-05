### Title
Security Plan (F8 Overlay Applied)

### Goal(s)
- Apply the Security & Compliance Overlay consistently.

### Assumptions
1. Secrets managed via env/secret manager; no hardcoded secrets.
2. TLS everywhere; secure cookies where relevant.

### Alternatives
- Ad-hoc security per team. Rejected: inconsistent risk coverage.

### Risks and mitigations
- Missed secrets (M×H): Scans + pre-commit checks; secret rotation playbooks.
- Over-logging sensitive data (M×H): Structured logging with redaction.

### Dependencies
- Secret manager, SCA/SAST tools, observability stack.

### F8 Checklist (abridged)
- Threat model and data flow; input validation; RBAC; transport/storage security; privacy; observability; CI gates; IR plan.

### Trigger → Rule → Outputs → Gates
| Capability | Rule(s) | Outputs | Gates |
|---|---|---|---|
| security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | `[SECURITY CHECK]` notes | Block criticals |
| audit.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | Audit report | Audit pass |
| validation.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | Validation report | Validation pass |

### Success Metrics
- 0 critical/high vulns; full audit trail for sensitive actions.

### Next Steps
- Add SBOM and dependency scans; define incident response runbooks.

### Why this route + Confidence
- Aligns directly to F8 overlay; measurable outcomes.
- Confidence: 0.86.
