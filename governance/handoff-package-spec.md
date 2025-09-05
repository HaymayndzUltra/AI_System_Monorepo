### Handoff Package v1
/handoff/{framework}/
- context-snapshot.md
- api-contracts.* (OpenAPI/GraphQL/Protobuf)
- tests-report.json
- coverage-summary.json
- CHANGELOG.md
- known-limitations.md

### Status Update Schema
{ agent_id, phase, percent_complete, risks[], blockers[], eta_confidence }

### Gates (defaults)
- lint: 0 errors
- tests: ≥90% pass
- statements coverage: ≥75% (override allowed)
- docs updated (see Doc Drift)
- security: no plaintext secrets

### ✅/❌ Examples
- ✅ includes coverage + known limitations
- ❌ missing contracts or failing lint

