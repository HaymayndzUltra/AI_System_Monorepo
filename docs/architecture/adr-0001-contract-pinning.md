# ADR-0001: API Contract Pinning

## Context
Frontend relies on a stable API. We pin the contract to `openapi/api-v1.0.yaml` for this cycle.

## Decision
- Pin FE to `api-v1.0`. Any breaking change requires bump to `api-v1.1+` and FE retargeting.

## Consequences
- Clear change policy; forces audit/validation on contract evolution.