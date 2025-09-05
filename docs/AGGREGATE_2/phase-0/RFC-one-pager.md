# RFC One-Pager: AGGREGATE_2 Capability-First Router

## Purpose
Align stakeholders on adopting a capability-first router with Domain×Lifecycle disambiguation and governance overlays.

## Scope
- Router unifies AI_1/AI_2/AI_3
- Policy overlays: F8 security, modification safety, docs-sync, audit/validate
- Dual routing for parity (legacy ↔ capability-first)

## Goals & Non-Goals
- Goals: ≥95% correct routing, explainable logs, zero critical security issues
- Non-Goals: Rewrite of downstream services in this phase

## Key Decisions
- Strategy-A: Capability-first as target default; legacy triggers retained as aliases during transition
- Confidence threshold: clarify <0.70
- CI gates: F8 criticals block; mod-safety checklist required; docs-sync

## Risks & Mitigations
- Misclassification → clarify + parity logs
- Gate sprawl → central `ci/gates_config.yaml`
- Overlays overreach → scope by capability/domain

## Deliverables
- Capability registry config (Phase 1)
- Routing log schema (Phase 1)
- Policy DSL and CI wiring (Phase 3)

## Reviewers
- Architecture, Security, DevEx, QA leads

## Timeline
- Phase 0: 0.5–1 week
- Phase 1: 2–3 days