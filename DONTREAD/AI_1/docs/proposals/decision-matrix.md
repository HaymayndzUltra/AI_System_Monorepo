### Title
Decision Matrix for Approach Selection

- Deliverable: `/workspace/DONTREAD/AI_1/docs/proposals/decision-matrix.md`

### Goal(s)
- Provide a structured comparison across strategies, stacks, and risks.

### Assumptions
1. Multiple viable options exist; constraints differ by domain.
2. [STRICT] rules must be satisfied for any option.

### Alternatives
- Single-path mandate. Rejected: reduces adaptability.

### Risks and mitigations
- Anchoring bias (M×M): Use weighted criteria; publish assumptions.
- Hidden costs (M×M): Surface dependencies and gates per option.

### Dependencies
- Capability map, delivery pipeline, security & testing plans.

### Criteria (weights sum to 1.0)
- Fit to rules (0.25)
- Time-to-value (0.20)
- Operability (0.15)
- Security posture (0.20)
- Total cost (0.10)
- Team familiarity (0.10)

### Options vs Criteria (example)
| Option | Fit | TtV | Operability | Security | Cost | Familiarity | Score |
|---|---:|---:|---:|---:|---:|---:|---:|
| Strategy-A | 0.9 | 0.8 | 0.8 | 0.9 | 0.7 | 0.7 | 0.83 |
| Strategy-B | 0.8 | 0.7 | 0.9 | 0.9 | 0.8 | 0.6 | 0.80 |
| Strategy-C | 0.8 | 0.9 | 0.7 | 0.8 | 0.8 | 0.8 | 0.80 |

### Trigger → Rule → Outputs → Gates
| Capability | Rule(s) | Outputs | Gates |
|---|---|---|---|
| context.load | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` | Context inputs | — |
| security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | Security notes | Block criticals |
| validation.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | Validation report | Validation pass |

### Success Metrics
- Transparent, reproducible selections; score and rationale logged.

### Next Steps
- Populate with real project-specific data as known.

### Why this route + Confidence
- Neutral, criteria-based selection; fits governance model.
- Confidence: 0.82.
