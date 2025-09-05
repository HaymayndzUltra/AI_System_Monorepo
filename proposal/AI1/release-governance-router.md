<!-- File: docs/proposals/release-governance-router.md -->

### Release & Governance Gate Router (RG1)

- **Goals**
  - Standardize release/deploy routing to F9 + Auditor/Validator (8), with F8 overlay.
  - Ensure rollback, signed artifacts, runbooks.

- **Assumptions**
  - Promotion pipelines exist; artifacts can be signed.
  - Canary/blue-green supported or emulated.

- **Alternatives**
  - Manual governance by PR labels (risk: inconsistency).

- **Risks**
  - Over-gating small releases; mitigate with tiered policies.

- **Dependencies**
  - CI/CD, artifact store, audit log store.

### Router Logic
- If release/deploy: route to F9; attach F8 overlay; then schedule Auditor→Validator session (8).
- If high-risk or production data: enforce canary and rollback drills.

### Trigger ↔ Rule(s) ↔ Files/Outputs
| Trigger | Rules | Outputs |
|---|---|---|
| release, deploy | F9 + F8 + 8 | Gate checklist, runbook, signed artifacts, audit/validation reports |

### Backward-Compat
- Old "release/deploy" → maps 1:1; adds mandatory Auditor→Validator cycle.

### Example Messages → Resolution
- "Ship v1.4 to prod" → F9 + F8 + 8.

### Migration Plan
- Phase-in gates per environment (dev→stage→prod).
- Add rollback drills before prod cutover.

### Success Metrics
- MTTR after failed deploys < 5 minutes.
- 100% releases signed, audited, validated.

### Next Steps
- Implement environment-tier policies.
- Automate signoff capture and storage.
