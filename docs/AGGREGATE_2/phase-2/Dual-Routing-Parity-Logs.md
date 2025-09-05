# Dual Routing Parity Logs

## Purpose
Track parity between legacy triggers and capability-first routing.

## Log Fields
- input: string
- capability: string
- confidence: number (0–1)
- overlays: string[]
- selected_rules: string[]
- legacy_capability: string|null
- parity: 'match' | 'mismatch' | 'no-legacy'
- outcomes: { status: 'proceed'|'clarify'|'fail', notes?: string }
- timestamp: ISO8601
- session_id?: string

## Rules
- Emit log on each routed request during Phase 2
- Trigger clarify when confidence < 0.70
- Ensure F8 overlays preserved in both paths