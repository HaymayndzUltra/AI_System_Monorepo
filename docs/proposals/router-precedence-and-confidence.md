# Router Precedence & Confidence (Draft)

## Precedence
1) Capability‑First routing (primary)
2) Domain × Lifecycle matrix (disambiguation)
3) Policy Engine overlays (security F8, mod‑safety, audit/validate) based on intent + risk

## Confidence & Clarification
- If capability confidence < threshold or multi‑domain conflict → ask 1 clarification.
- Always apply F8 when risk keywords or sensitive data present.

## Examples
- "Polish keyboard flows" → ui.interaction (+ perf overlay) → UI rules
- "Design API contract" → backend.api (+ docs, F8) → ADR + OpenAPI
- "Refactor login handler" → code.modify.safety (+ code.quality, F8) → safety plan

