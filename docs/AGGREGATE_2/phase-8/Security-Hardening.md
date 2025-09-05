# Security Hardening Notes

- Secret scanning enforced in CI
- SAST/SCA on every PR; fix criticals within SLA
- SBOM generation on release; store artifact
- Review authz for least privilege; add audit logs
- Input validation + output encoding guidelines