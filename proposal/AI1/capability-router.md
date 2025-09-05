<!-- File: docs/proposals/capability-router.md -->

### Capability-First Trigger Router (C1)

- **Goals**
  - Normalize triggers around "what the user wants to do" (capabilities), independent of tech stack.
  - Reduce routing ambiguity; increase determinism and explainability.
  - Preserve backwards-compat with current trigger keywords.

- **Assumptions**
  - Existing rules have clear TRIGGERS and SCOPE metadata.
  - No cross-repo orchestration needed; router runs per workspace.
  - NLU intent classification available (keywords + lightweight heuristics acceptable).

- **Alternatives**
  - Domain-first router (see D1).
  - 3-axis scoring with domain+capability+risk (see H3).
  - Rule-registry with explicit command routing (heavier governance).

- **Risks**
  - Over-triggering: multiple capabilities matched with similar confidence.
  - Gaps for niche intents (e.g., hardware/UI hybrid flows).
  - Drift if rules' metadata not maintained.

- **Dependencies**
  - Rule metadata hygiene: TAGS, TRIGGERS, SCOPE.
  - Dev-Workflow docs for work modes.
  - F8 Security Overlay always-on belt.

### New Taxonomy (Capabilities)
- **Plan**: analyze, prd, tasks, plan, master plan
- **Design.UI.Foundations**: foundation, tokens, style guide, AA, grid, spacing, typography
- **Design.UI.Interaction**: interaction, a11y, aria, keyboard, motion, performance
- **Design.UI.Premium**: premium, brand, dataviz, RBAC, audit (enterprise gating)
- **Code.Modify**: modify, edit, change, update, refactor, implement
- **Docs**: readme, documentation, structure, docs
- **Security**: security, threat, audit, secrets, sbom
- **QA.Test**: qa, test strategy, coverage
- **Observability**: observability, metrics, tracing, retro
- **Release**: release, deploy, rollback
- **Complexity**: complex, algorithm, state-machine, large-file, intensive

### Router Logic (C1)
- Step 1: Extract intent tokens; normalize (stem/synonym sets).
- Step 2: Map to capability buckets via keyword sets.
- Step 3: For each bucket, map to rules in priority order; apply overlays.
- Step 4: Select primary+secondary capabilities (top-2), dedupe rules, enforce overlays.

Pseudo:
- capabilities = classify(user_text)
- rules = union(defaults[capability] for capability in top2(capabilities))
- if SecurityOverlay.enabled: rules += F8
- if capability in {Design.UI.*}: rules += CodeQuality, DocContext
- always include Collaboration Guidelines

### Trigger ↔ Rule(s) ↔ Files/Outputs
| Trigger (new) | Rules Applied | Outputs |
|---|---|---|
| Plan | 7-dev-workflow-command-router | Workflow announcement; plan skeleton |
| Design.UI.Foundations | common-rule-ui-foundation-design-system, 3-code-quality, 5-doc-context | Tokens JSON draft, AA checklist, style guide |
| Design.UI.Interaction | common-rule-ui-interaction-a11y-perf, 3-code-quality | Interaction spec JSON, a11y acceptance table |
| Design.UI.Premium | common-rule-ui-premium-brand-dataviz-enterprise-gated, F8 overlay | Premium deltas JSON, enterprise gating map |
| Code.Modify | 4-code-mod-safety, 3-code-quality, 6-complex-feature (if flagged) | Impact analysis, modification report |
| Docs | 5-doc-context | README sync tasks |
| Security | F8-security-and-compliance-overlay | Threat model, scans, SBOM note |
| QA.Test | project-rules/F7-qa | Test strategy checklist |
| Observability | project-rules/F10-observability | Telemetry/SLO checklists |
| Release | project-rules/F9-release, 8-auditor-validator-protocol | Release gates, runbooks, audit/validation reports |

### Backward-Compat (Old → New → Rules)
| Old Trigger | New Capability | Rules |
|---|---|---|
| foundation, design tokens, AA, grid | Design.UI.Foundations | UI Foundation, Code Quality, Doc Context |
| interaction, a11y, aria, keyboard | Design.UI.Interaction | UI Interaction, Code Quality |
| premium, dataviz, RBAC | Design.UI.Premium | Premium, F8 overlay |
| modify, refactor, implement | Code.Modify | Code Mod Safety, Code Quality, Complex Feature (if needed) |
| audit, security, threat | Security | F8 overlay, 8-Auditor (if audit) |
| qa, test strategy | QA.Test | F7 QA |
| observability, retro | Observability | F10 Observability |
| release, deploy | Release | F9 Release, 8-Auditor/Validator |

### Example Messages → Resolution
- "Refactor payments controller safely" → Code.Modify → 4,3,(6 if complex)
- "Create dark mode tokens with AA" → Design.UI.Foundations → UI Foundation + 3 + 5
- "Add keyboard nav to modal" → Design.UI.Interaction → UI Interaction + 3
- "Enterprise RBAC dashboard" → Design.UI.Premium → Premium + F8

### Migration Plan
- Phase 1: Mirror routing (log-only) alongside legacy triggers.
- Phase 2: Default-on with fallback to legacy if confidence < threshold.
- Phase 3: Deprecate legacy trigger paths; publish mapping doc.
- Phase 4: Remove legacy; enforce metadata checks in CI.

- **Risks**: silent under-triggering early. Mitigation: mirror-and-compare metrics.
- **Rollback**: config toggle to legacy mode.

### Success Metrics
- ≥95% routing precision vs human labeled intents.
- ≤1% false-negative on Security overlay.
- Time-to-first-correct rule set reduced by 30%.
- Zero regressions in release/QA gates.

### Next Steps
- Build keyword→capability map and tests.
- Implement mirror routing + telemetry.
- Publish migration guide with examples and mapping tables.
