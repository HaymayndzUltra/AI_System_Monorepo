### Release & Deployment Strategy

## Goals
- Safe, reversible, observable releases with policy gates and progressive delivery.

## Strategy
```yaml
release:
  train: weekly or risk-based
  gating: lint, tests, SCA/SAST/DAST, rule acceptance
  artifacts: versioned, SBOM attached
deployment:
  strategies: blue-green, canary, rolling
  controls: feature flags, kill switches
  monitoring: automated rollback on SLO breach
```

## Trigger ↔ Rule(s) ↔ Files/Outputs
| Trigger | Rules | Outputs |
|---|---|---|
| `infra.cicd` | `7-dev-workflow-command-router.mdc`, `F8-security-and-compliance-overlay.mdc` | Release checklist, policy gates |
| `workflow.audit` | `8-auditor-validator-protocol.mdc` | Release audit trail |

## Risks
- Change freeze conflicts; mitigate with feature flags and canaries.

## Dependencies
- CI/CD systems, flag service, monitoring.

## Success Metrics
- <1% failed deploys without automatic rollback.
- 100% releases produce SBOM + audit.

## Next Steps
- Define environment promotion policy.
- Add canary templates per platform.
