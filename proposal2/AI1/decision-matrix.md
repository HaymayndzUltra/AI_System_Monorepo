### Decision Matrix

- Goal(s): Provide objective, weighted scoring for strategies, stacks, and designs.

### Assumptions
- Criteria weights reflect current priorities; revisit quarterly.

### Alternatives
- Unweighted committee decision; slower and biased.

### Risks & Mitigations
- Weight gaming (M×M): Review board sign-off.
- Stale weights (M×M): Scheduled recalibration.

### Dependencies
- Product goals, SLOs, budget constraints.

### Criteria & Weights (example)
- Delivery speed: 25%
- Reliability/SLO fit: 20%
- Security/compliance: 20%
- Cost (build/run): 15%
- Team familiarity: 10%
- Extensibility/modularity: 10%

### Example Scoring Layout

| Option | Speed (25) | Reliability (20) | Security (20) | Cost (15) | Familiarity (10) | Extensibility (10) | Total (100) |
|---|---:|---:|---:|---:|---:|---:|---:|
| Strategy A | 22 | 15 | 16 | 12 | 8 | 8 | 81 |
| Strategy B | 20 | 18 | 18 | 10 | 6 | 9 | 81 |
| Strategy C | 18 | 16 | 19 | 13 | 7 | 9 | 82 |

### Trigger → Rule → File(s)/Output mapping

| Trigger | Rules | Files/Outputs | Gates |
|---|---|---|---|
| planning | `F2-planning`, `2-ai-collaboration` | This matrix | Reviewer sign-off |
| architecture | `F4-architecture` | Cross-check with `domain-architecture.md` | ADR consistency |

### Success Metrics
- ≤1 meeting to converge; ≤2 iterations to approve.

### Next Steps
- Apply matrix to Strategy A/B/C; attach in `strategy-*.md`.
