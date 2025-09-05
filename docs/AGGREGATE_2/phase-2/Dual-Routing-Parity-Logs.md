# Dual Routing Parity Logs

## Purpose
Track parity between legacy triggers and capability-first routing.

## Log Fields
- request_text
- legacy_route
- capability_route
- confidence
- decision: proceed|clarify
- discrepancies: string[]
- timestamp, session_id

## Rules
- Emit log on each routed request during Phase 2
- Trigger clarify when confidence < 0.70
- Ensure F8 overlays preserved in both paths