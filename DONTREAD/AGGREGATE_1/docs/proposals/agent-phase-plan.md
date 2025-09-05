### Title
Comprehensive Phase‑by‑Phase Plan (Capability‑First Hybrid Router + Governance)

### Goals
- I-deliver ang buong plano sa malinaw na phases (P0→P7) na may Objectives, Deliverables, Mappings, Gates, Risks, Metrics, Exit Criteria.
- Panatilihin ang backward‑compat sa legacy triggers habang iniaangat ang capability‑first routing.
- Siguruhin ang [MUST] overlays (Security F8, Mod‑Safety, Audit/Validate, Docs Sync) at [GUIDELINE] UI gates kung UI ang scope.

### Assumptions
- Master/common rules are authoritative:
  - `.cursor/rules/master-rules/*` [MUST]
  - `.cursor/rules/common-rules/*` [GUIDELINE]
- Project‑rules (e.g., `.cursor/rules/project-rules/F9-release.mdc`, `F10-observability.mdc`, `F5-data-ml.mdc`) are (placeholder/optional); FALL BACK to master/common rules and doc gates.
- Documentation‑only session: walang code edits; plans, mappings, and acceptance gates lang.
- F8 overlay blocks on criticals; clarify kapag confidence < 0.70.

### Alternatives (and why not chosen as default)
- Domain×Lifecycle‑first: solid for orgs with mature domain ownership; retained as secondary disambiguator.
- Policy‑overlay‑first: mataas ang compliance pero pwedeng bumagal; gamitin sa regulated contexts.
- Legacy triggers‑only: mababa ang explainability; hindi recommended.

### Risks (likelihood × impact) & mitigations
- Misclassification (M×M): confidence thresholds + one‑line clarify; dual‑route parity logs.
- Gate fatigue (M×M): severity tiers (critical/major/minor); warn‑only para sa minors; review SLAs.
- Placeholder project‑rules (M×L): explicit fallbacks sa master/common rules.

### Dependencies
- `.cursor/dev-workflow/*` lifecycle docs; CI placeholders for gates; secret manager; telemetry backend (for future observability).

---

## Phase Summary (P0→P7)
| Phase | Objective | Key Deliverables | Exit Criteria |
|---|---|---|---|
| P0 Foundations | Align rules, create registry, plan parity logs | Capability Registry (draft), Clarify protocol, Logging spec | Registry approved; clarify text ready |
| P1 Dual‑Routing | Enable legacy+capability routing with logs | Mapping table, parity log reports, confidence thresholds | ≥95% parity vs legacy on goldens |
| P2 Capability Default | Capabilities primary; policy DSL baseline | Policy DSL v1, thresholds, domain architecture ADRs | Policies approved; ADRs drafted |
| P3 Governance Gates | Encode docs‑only CI stages and gates | Delivery pipeline doc with gates | Gate checklist complete |
| P4 UI A11y/Perf | Apply ui.foundation/ui.interaction | tokens/grids, interaction specs, budgets | AA pass; INP/LCP budgets set |
| P5 Data/ML Gov | Contracts + validation | data contracts, validation plan | Contract checks defined |
| P6 Obs & Release | SLOs, dashboards, release controls | SLO exemplars, canary+rollback docs | SLOs documented; rollback plan |
| P7 Rollout & Hardening | Remove legacy triggers, retro | Deprecation note, metrics report | Legacy off; metrics meet targets |

---

## Phase 0 — Foundations & Alignment
### Objectives
- Itaguyod ang Capability Registry, confidence/clarify protocol, at logging/parity strategy.

### Deliverables
- Capability Registry (initial table; see Registry sa consolidated plan)
- One‑line clarify prompt (<0.70 confidence): “Confirm domain (UI/API/Data/Infra) and lifecycle (plan/execute/release/retro).”
- Routing log schema: {input, capabilities, confidence, overlays, rules}

### Trigger → Rule(s) → Outputs → Gates
| Trigger | Rule(s) (FULL PATH) | Outputs | Gates |
|---|---|---|---|
| context.load | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` | Registry draft, selected rules | — |
| collab.resolve | `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc` | Clarify protocol | — |
| docs.sync | `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | Updated docs | Docs lint |

### Risks & mitigations
- Registry scope creep (M×L): start minimal; iterate.

### Exit Criteria
- Registry + clarify text approved; logging spec baselined.

---

## Phase 1 — Dual‑Routing with Parity Logs
### Objectives
- Mag‑dual route (legacy triggers + capability triggers) at mag‑log ng parity.

### Deliverables
- Backward‑compat table (old→new)
- Parity log reports on golden prompts; thresholds set (parity ≥95%).

### Trigger → Rule(s) → Outputs → Gates
| Trigger | Rule(s) | Outputs | Gates |
|---|---|---|---|
| workflow.plan | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | Test set, goldens | Stage complete |
| audit.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | Parity report | Must pass parity target |
| security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | [SECURITY CHECK] notes | Block criticals |

### Risks & mitigations
- Misclassification (M×M): clarify prompts; adjust thresholds; expand goldens.

### Exit Criteria
- Parity ≥95%; missed F8 <2% on sample set.

---

## Phase 2 — Capability Default + Policy DSL v1
### Objectives
- Gawing primary ang capability routing; ilabas ang policy DSL v1; i‑draft ang domain architecture ADRs.

### Deliverables
- Policy DSL v1 with thresholds (security, safety, tests, UI, observability, release)
- ADRs: domain boundaries, extraction criteria, contracts approach

### Trigger → Rule(s) → Outputs → Gates
| Trigger | Rule(s) | Outputs | Gates |
|---|---|---|---|
| code.modify.safety | `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` | Safety checklist | Required |
| docs.sync | `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | Policy files | Docs lint |
| complex.context | `.cursor/rules/master-rules/6-master-rule-complex-feature-context-preservation.mdc` | Context bundle | Reviewer checklist |

### Risks & mitigations
- Gate fatigue (M×M): severity tiers; warn‑only for minors.

### Exit Criteria
- Policy DSL approved; ADRs drafted with owners.

---

## Phase 3 — Governance Gates (Docs‑Only CI Map)
### Objectives
- I‑encode ang delivery pipeline with explainable gates; docs‑only session.

### Deliverables
- Delivery pipeline doc with stages: Plan → Build → Test → Verify → Release → Observe
- Checklist for F8, Mod‑Safety, Audit/Validate, Docs Sync

### Trigger → Rule(s) → Outputs → Gates
| Trigger | Rule(s) | Outputs | Gates |
|---|---|---|---|
| delivery pipeline | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | Pipeline doc | Stage complete |
| security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | Security notes | Block criticals |
| audit/validation | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | Audit/validation | Must pass when invoked |

### Risks & mitigations
- Inconsistent gate usage (M×M): centralized checklist; owners.

### Exit Criteria
- Pipeline + gate checklist approved and linked sa policy DSL.

---

## Phase 4 — UI A11y/Perf Foundations (kung UI ang scope)
### Objectives
- I‑apply ang `ui.foundation` at `ui.interaction` with measurable budgets.

### Deliverables
- tokens/grids; interaction specs; budgets (AA, INP, LCP)

### Trigger → Rule(s) → Outputs → Gates
| Trigger | Rule(s) | Outputs | Gates |
|---|---|---|---|
| ui.foundation | `.cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc` | tokens.json, grids | AA contrast |
| ui.interaction | `.cursor/rules/common-rules/common-rule-ui-interaction-a11y-perf.mdc` | interaction specs | INP/LCP budgets |
| docs.sync | `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | Updated UI docs | Docs lint |

### Risks & mitigations
- Retro‑fitting risk (M×M): start with tokens and component specs.

### Exit Criteria
- AA baseline met; INP p75 ≤ 200ms; LCP p75 ≤ 2.5s (targetable).

---

## Phase 5 — Data/ML Governance
### Objectives
- Mag‑define ng data contracts at validation strategy; treat project‑rules as optional.

### Deliverables
- Data contracts; validation plan; lineage notes

### Trigger → Rule(s) → Outputs → Gates
| Trigger | Rule(s) | Outputs | Gates |
|---|---|---|---|
| data.pipeline | `.cursor/rules/project-rules/F5-data-ml.mdc` (placeholder/optional) | Contracts/specs | Fallback to master/common |
| validation.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | Validation report | Must pass |
| security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | Privacy notes | Block criticals |

### Risks & mitigations
- Schema drift (M×M): versioning + contract checks.

### Exit Criteria
- Contracts versioned; validation plan approved.

---

## Phase 6 — Observability & Release Controls
### Objectives
- Baseline SLO exemplars; dashboards; canary + rollback docs; project‑rules optional.

### Deliverables
- SLO exemplars per domain (availability, latency, error budgets)
- Release plan with canary + rollback

### Trigger → Rule(s) → Outputs → Gates
| Trigger | Rule(s) | Outputs | Gates |
|---|---|---|---|
| observe.* | `.cursor/rules/project-rules/F10-observability.mdc` (placeholder/optional) | SLOs, dashboards | Optional SLO gates |
| release.* | `.cursor/rules/project-rules/F9-release.mdc` (placeholder/optional) | Release notes | Approvals (policy) |
| security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | Security notes | Block criticals |

### Risks & mitigations
- Alert fatigue (M×L): tuned thresholds; runbooks.

### Exit Criteria
- SLO exemplars documented; rollback plan reviewed.

---

## Phase 7 — Rollout, Hardening, Deprecation, Retro
### Objectives
- I‑deprecate ang legacy triggers; harden policies; run retro.

### Deliverables
- Deprecation notice; metrics report; retro outcomes

### Trigger → Rule(s) → Outputs → Gates
| Trigger | Rule(s) | Outputs | Gates |
|---|---|---|---|
| workflow.retro | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | Retro report | Stage complete |
| audit.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | Final audit | Must pass |

### Exit Criteria
- Legacy aliases removed; targets met: parity ≥95%, missed F8 <2%.

---

## Mapping Tables (Roll‑up)
### Trigger → Rule(s) → Files/Outputs (excerpts)
| Trigger | Rule(s) (FULL PATHS) | Files/Outputs |
|---|---|---|
| capability map | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc`, `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | capability registry/updates |
| dual route parity | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | parity reports |
| delivery pipeline | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc`, `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc`, `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc`, `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | pipeline doc |
| ui foundation/interaction | `.cursor/rules/common-rules/common-rule-ui-*.mdc` | tokens/specs |
| data contracts | `.cursor/rules/project-rules/F5-data-ml.mdc` (placeholder/optional), `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | contracts/validation |
| observability/release | `.cursor/rules/project-rules/F10-observability.mdc`, `.cursor/rules/project-rules/F9-release.mdc` (both placeholder/optional) | SLOs/release notes |

---

## Success Metrics (program‑level)
- Routing correctness ≥95% vs human baseline; missed F8 overlays <2%.
- Gate adherence ≥95%; zero criticals bypassed.
- AA compliance for UI ≥95%; INP p75 ≤ 200ms; LCP p75 ≤ 2.5s (when applicable).

## Next Steps
- Approve Phase 0–1 artifacts; schedule goldens and parity runs.
- Adopt Policy DSL v1 (Phase 2) at the earliest safe time.
- Prepare SLO exemplars and release controls (Phase 6) in parallel if teams exist.

## Why this route + Confidence
- Naka‑align sa AI_1/AI_2/AI_3 at sa `.cursor/rules/*` with explicit fallbacks. Phased approach reduces risk and preserves explainability.
- Confidence: 0.86 (no clarify needed now; built‑in clarify text for <0.70 cases).