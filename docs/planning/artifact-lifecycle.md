# Artifact Lifecycle & Process (3.3)

Commit: 864d930

## Creation (with validation gates)
- Author artifact → validate frontmatter (schema) → content checks → store blob (sha256) → write manifest entry.

## Approval (digital signatures)
- Auditor/Validator approve → status: approved → record signoffs in manifest & report.

## Archival & Retention
- Move manifest entry to archived index with retention policy; keep blob immutable.

## Audit Trail & Change Tracking
- Keep per-artifact manifest history; include commit SHA, runId, timestamps, signoffs.

## Export/Import
- Export: manifest + blobs + checksums; Import: verify checksums and schema.
