# Risks / Assumptions / Dependencies (RAD)

Commit: 864d930

## Top Risks (likelihood × impact)
- Legacy auth integration complexity (M×H)
- Automated verification accuracy with reduced scope (M×M)
- Contract drift between FE/BE (M×H)

## Mitigations & Owners
- Contract versioning and contract tests; owner: BE lead
- Auditor → Validator loops (≤ 3) and targeted test data; owner: QA
- Threat modeling + SBOM + SAST/DAST; owner: Security

## Assumptions
- Background agents reliably auto-branch and rebase
- CI can run contract tests on integration branch

## External Dependencies
- Cursor environment, CI runners, secret manager, registry

## Evidence to Collect
- Audit/validation reports per parent task; contract test logs; SBOMs
