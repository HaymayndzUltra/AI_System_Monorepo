<!-- File: docs/proposals/triax-router.md -->

### Hybrid Tri-Axis Router (H3): Domain × Capability × Risk

- **Goals**
  - Combine strengths of C1 and D1; add Risk/Security axis for overlays and gates.
  - Provide explainable scoring and deterministic selection.

- **Assumptions**
  - Lightweight NLU and file-system signals available.
  - Risk model seeds from F8 (data categories, auth, surface).

- **Alternatives**
  - C1 or D1 alone; rule-registry with manual command routing.

- **Risks**
  - Overhead in scoring + explainability if not cached.
  - Needs tuning for edge cases.

- **Dependencies**
  - F8 overlay signals; Dev-Workflow router.

### Scoring Model
- Score = wD·DomainScore + wC·CapabilityScore + wR·RiskScore
  - Defaults: wD=0.35, wC=0.45, wR=0.20
- Select top domain, top 1–2 capabilities; enforce overlays if RiskScore ≥ threshold.

Pseudo:
- domain = detectDomain(ctx)
- capabilities = classifyCapabilities(text)
- risk = assessRisk(text, repo_signals)
- rules = rulesFor(domain, capabilities) + overlayFor(risk)
- explain = {domain, capabilities, risk, weights}

### Trigger ↔ Rule(s) ↔ Files/Outputs
| Axis | Rules | Outputs |
|---|---|---|
| Domain: UI | UI rules + 3 + 5 | Tokens/specs/docs |
| Capability: Modify | 4 + 3 (+6 if complex) | Impact/Mod report |
| Risk: High (PII/Secrets) | F8 + 8-Auditor | Threat model, scans |

### Backward-Compat Mapping
| Old Trigger | New Axes |
|---|---|
| foundation | Domain:UI + Capability:Design.UI.Foundations |
| modify | Capability:Code.Modify (+Domain via repo) |
| audit | Risk:High + F8 + 8-Auditor |

### Example Messages → Resolution
- "Rotate keys and add audit logs" → Risk:High → F8 + 8 + F9 (if release)
- "Refactor auth middleware" → Domain:Backend + Capability:Modify + Risk:High → 4,3,F8

### Migration Plan
- Mirror scoring beside legacy; capture explanations.
- Tune weights weekly; publish diffs.
- Cutover when precision/recall stable.

### Success Metrics
- ≥98% agreement with expert triage for high-risk paths.
- 0 missed F8 overlays on security-related messages.
- Explainability logs for 100% of routes.

### Next Steps
- Implement scorer with cached features.
- Add explainability artifact to each route.
- Ship admin toggles for weights/thresholds.
