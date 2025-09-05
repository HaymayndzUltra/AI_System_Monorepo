# Routing Log Schema

Fields:
- capability: string
- selected_rules: string[]
- overlays: string[]
- confidence: number (0–1)
- outcomes: { status: 'success'|'clarify'|'fail', notes?: string }
- timestamp: ISO8601
- session_id: string

Notes:
- Clarify when confidence < 0.70
- Emit parity logs during Phase 2