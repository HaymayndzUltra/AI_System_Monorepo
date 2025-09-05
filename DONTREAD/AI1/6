### Migration Plan: Old Triggers → New Router(s)

## Goals
- Zero downtime, reversible migration to CBR/DDR/HTR.
- Preserve auditability and developer ergonomics.

## Phases
1) Discover & Map
- Inventory current triggers and usage.
- Generate Old→New mapping table (see below).

2) Dual Route (Shadow)
- Run old router for execution, new router for telemetry only.
- Compare decisions; flag mismatches.

3) Progressive Cutover
- Per-capability and per-domain flags.
- Roll out to low-risk paths first (docs, planning), then UI, backend, data/ML, infra.

4) Consolidate & Deprecate
- Switch default; keep old router behind emergency toggle for a release window.
- Remove after stability window.

## Backward-Compat Table (Draft)
| Old Trigger | New Trigger(s) | Rules | Notes |
|---|---|---|---|
| foundation | `ui.foundation` | `common-rule-ui-foundation-design-system.mdc` | No-op semantic change |
| interaction,a11y,perf | `ui.interaction`, `perf.core` | `common-rule-ui-interaction-a11y-perf.mdc` | Split perf overlay |
| premium,brand,dataviz | `ui.premium` | `common-rule-ui-premium-brand-dataviz-enterprise-gated.mdc` | Enterprise gate remains |
| prd,discovery | `workflow.discovery` | `1-master-rule-context-discovery.mdc` | Integrated with docs overlay |
| implement | `workflow.implementation` | `dev-workflow/3-process-tasks.md` | No change in outputs |
| audit,validator | `workflow.audit` | `8-auditor-validator-protocol.mdc` | Adds required evidence flag |
| security | `security.f8` | `F8-security-and-compliance-overlay.mdc` | Expanded policy packs |

## Trigger ↔ Rule(s) ↔ Files/Outputs
| Trigger | Rules | Outputs |
|---|---|---|
| `ui.foundation` | UI Foundation | Tokens draft, contrast checks |
| `workflow.discovery` | Context Discovery | PRD doc |
| `security.f8` | Security Overlay | Threat model, SBOM plan |

## Risks
- Divergent routing decisions; mitigate with shadow mode + alerts.
- Overhead in telemetry; budget and sample.

## Dependencies
- Router telemetry, feature flags, audit storage.

## Rollback Plan
- Single toggle to revert to old router.
- Keep last-known-good mapping snapshot.
- Replay capability to diff decisions.

## Success Metrics
- ≥95% match rate in shadow mode for two weeks.
- No critical security overlay omissions.
- Developer satisfaction ≥80% in survey post-cutover.

## Next Steps
- Implement dual-route instrumentation.
- Publish migration dashboard (coverage, drift, incidents).
