# Discovery Brief

Commit: 864d930

## Problem & Goals
- Build an AI-governed development framework with automated phase management (F1–F10).
- Govern work via triggers, rules, and background agents integrated with Cursor.

## Non-goals
- Replace human judgment; instead, add verifiable gates (Auditor → Validator).

## Stakeholders
- Developers, PMs, Auditor, Validator, Security/Compliance, Stakeholders.

## KPIs (baseline → target; measurement source)
- Onboarding time: 45min → 18min (logs; onboarding scripts).
- Completion rate: 75% → 85% (planner → tasks completion).
- Manual review volume: 500/day → 100/day (audit queue metrics).
- User satisfaction: 3.2/5 → 4.5/5 (survey).

## Scope Boundaries
- FE and BE slices executed in parallel only when API contracts are frozen.
- Immutable artifacts with versioning; policy-as-code gates in CI.

## Environments & Constraints
- dev/staging/prod; protected main; background agents auto-branch.
- Secret manager, TLS everywhere, feature flags; Node v18 baseline.

## Assumptions to Validate
- Auditor/Validator converge ≤ 3 cycles per parent task.
- API contracts can be versioned without blocking FE.

## Open Questions
- Exact compliance scope (SOC2 Type II timing).
- Final performance budgets per target device.
# Discovery Brief

Commit: fed3b88

## Problem & Goals
- 

## Non-goals
- 

## Stakeholders
- 

## KPIs (baseline → target; measurement source)
- 

## Scope Boundaries
- 

## Environments & Constraints
- dev/staging/prod; protected main; background agents auto-branch
- Secret manager; TLS; feature flags

## Assumptions to Validate
- 

## Open Questions
- 
