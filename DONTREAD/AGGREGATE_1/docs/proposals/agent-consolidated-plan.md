### Title
Hybrid Router + Governance Plan (Capability-First → Domain×Lifecycle → Policy Overlays)

### Goals
- Define a unified router strategy and governance model across AI_1/AI_2/AI_3 inputs.
- Provide a Capability Registry, backward-compat mapping, router confidence/clarify rules, and a baseline policy DSL.
- Align strictly to master/common rules; treat project-rules as placeholders/optional.

### Assumptions
- `.cursor/rules/master-rules/*` and `.cursor/rules/common-rules/*` exist and are authoritative.
- `.cursor/rules/project-rules/*` (e.g., F9/F10) may be placeholders (optional) → FALL BACK to master/common and docs gates.
- Outputs are documentation-only in this session; no source edits or CI changes.
- Security F8 overlay applies when risk is non-trivial and blocks on criticals.

### Alternatives
- Domain×Lifecycle-first routing: good in orgs with strong domain ownership; selected as secondary disambiguator.
- Policy-overlay-first routing: high compliance, slower velocity; retained for regulated contexts.
- Legacy trigger list only: rejected due to low explainability.

### Risks (likelihood × impact) & mitigations
- Misclassification (M×M): confidence thresholds, clarify prompts, parity logs.
- Gate fatigue (M×M): severity tiers; warn-only for minor issues; SLAs for fixes.
- Placeholder project rules (M×L): explicit fallback to master/common rules.

### Dependencies
- `.cursor/dev-workflow/*` for lifecycle stages.
- Master/common rules for gates; optional project-rules for observability/release.

---

## Router Strategy (Precedence)
1) Capability-First classification
2) Domain × Lifecycle via `.cursor/dev-workflow`
3) Policy Overlays: Security F8, Code-Modification Safety, Audit/Validate, Docs Sync; optional Release/Observability when project-rules present

- Decision: Always attach overlays appropriate to the capability and stage.
- Explainability: Log selected capabilities, rules, overlays, confidence, and clarify notes.

---

## Capability Registry (Draft)

| Capability | Rules ([MUST]/[GUIDELINE]) FULL PATH | Triggers | Outputs | Audit/Validate Gates |
|---|---|---|---|---|
| context.load | [MUST] `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` | rule, context, analyze | Loaded READMEs; selected rules | — |
| collab.resolve | [MUST] `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc` | conflict, clarify, proceed, how to | Conversation protocol adherence | — |
| code.quality | [MUST] `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc` | code, develop, refactor, quality | Quality checklist | CI advisory |
| code.modify.safety | [MUST] `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` | modify, edit, change, update, implement | Change-safety checklist | Required on risky changes |
| docs.sync | [MUST] `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | readme, documentation, docs | Updated docs | Docs lint |
| complex.context | [MUST] `.cursor/rules/master-rules/6-master-rule-complex-feature-context-preservation.mdc` | complex, algorithm, api-integration | Context bundle | Reviewer checklist |
| workflow.* | [MUST] `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | bootstrap, plan, taskgen, execute, retro | Dev-workflow outputs | Stage complete |
| audit.run | [MUST] `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | audit {framework}@{rev} | `reports/audit-*.md` | Audit must pass |
| validation.run | [MUST] same as above | validate using {audit} | `reports/validation-*.md` | Validation must pass |
| security.overlay | [MUST] `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | security, compliance, threat | `[SECURITY CHECK]` notes | Block on criticals |
| ui.foundation | [GUIDELINE] `.cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc` | foundation, tokens, AA, grid | tokens, grids | AA checks |
| ui.interaction | [GUIDELINE] `.cursor/rules/common-rules/common-rule-ui-interaction-a11y-perf.mdc` | interaction, aria, perf | interaction specs | INP/LCP budgets |
| ui.premium | [GUIDELINE] `.cursor/rules/common-rules/common-rule-ui-premium-brand-dataviz-enterprise-gated.mdc` | premium, brand, RBAC | premium specs | Guardrails |
| observe.metrics | (optional) `.cursor/rules/project-rules/F10-observability.mdc` | observability, metrics | SLOs/dashboards | Optional SLO gates |
| observe.traces | (optional) same as above | tracing | trace config | Latency budgets |
| observe.logs | (optional) same as above | logging | log schema | PII redaction checks |
| release.prepare | (optional) `.cursor/rules/project-rules/F9-release.mdc` | release, deploy | release notes | Approvals |
| data.pipeline | (optional) `.cursor/rules/project-rules/F5-data-ml.mdc` | data schema, pipeline | data contracts | DQ checks |

---

## Backward‑Compat: old trigger → new capability triggers → affected rules/files

| Old Trigger(s) | New Capability Trigger(s) | Applied Rules (FULL PATHS) | Affected Files |
|---|---|---|---|
| rule, context, analyze | context.load | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` | capability-map.md, decision-matrix.md |
| conflict, clarify, proceed, how to, question | collab.resolve | `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc` | routing-log.md |
| code, develop, refactor, implement, fix, quality | code.quality | `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc` | testing-strategy.md |
| modify, edit, change, update, refactor | code.modify.safety | `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` | delivery-pipeline.md |
| readme, documentation, docs | docs.sync | `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | all proposals |
| complex, algorithm, api-integration | complex.context | `.cursor/rules/master-rules/6-master-rule-complex-feature-context-preservation.mdc` | strategy-*.md (complex features) |
| workflow.* | workflow.plan|taskgen|execute|retro | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | dev-workflow outputs |
| audit/validate | audit.run / validation.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | reports/*.md |
| security/compliance | security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | security-plan.md |

[STRICT]/MUST notes: All master-rule entries above are MUST. Project-rules entries are (placeholder/optional) until implemented.

---

## Router confidence & clarify rules
- Compute per-capability classification confidence.
- If max confidence < 0.70: issue a one-line clarify prompt and pause routing; default to safest overlays.
- Log: {input, detected capabilities, confidence scores, overlays applied, rules selected}. Store under `AI_*/reports/routing-log.md`.

Clarify prompt (one-line):
- “To route precisely: confirm primary domain (UI/API/Data/Infra) and intended lifecycle stage (plan/execute/release/retro).”

---

## Baseline policy DSL (5–6 policies)
A minimal, declarative DSL to gate risks. Example YAML sketch (advisory; docs-only):

```yaml
version: 1
policies:
  - id: security.f8
    when: [security.overlay, release.prepare, infra.iac]
    severity: critical
    gates:
      - no_plaintext_secrets: true
      - sbom_required_on_release: true
      - sca_block_levels: [critical, high]
  - id: safety.change
    when: [code.modify.safety]
    severity: high
    gates:
      - change_plan_required: true
      - validation_checklist: must_pass
  - id: quality.tests
    when: [code.quality, validation.run]
    severity: high
    gates:
      - unit_coverage_min: 0.7
      - flake_rate_max: 0.02
  - id: ui.accessibility
    when: [ui.foundation, ui.interaction]
    severity: high
    gates:
      - wcag_contrast: AA
      - inp_p75_ms: 200
      - lcp_p75_s: 2.5
  - id: observability.baseline
    when: [observe.metrics]
    severity: medium
    gates:
      - slo_defined: true
      - alert_fatigue_policy: present
  - id: release.controls
    when: [release.prepare, release.deploy]
    severity: high
    gates:
      - canary_required: true
      - rollback_plan: required
```

---

## Optional: Multi‑stack adapters (sketch)
- React/Next: integrate ui.* gates; Jest/Playwright; SBOM via package manager.
- Node (API): lint/type, contract tests; SCA; provenance on builds.
- Python (Data/ML): schema tests, MLflow; SAST; artifact lineage.
- Infra (Terraform): policy-as-code; plan/apply with F8 overlay checks.

---

## Mapping tables (Required)

### Trigger → Rule(s) → Files/Outputs
| Trigger | Rule(s) (FULL PATH) | Files/Outputs |
|---|---|---|
| capability map | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc`, `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | `docs/proposals/capability-map.md` |
| delivery pipeline | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc`, `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc`, `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc`, `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | `docs/proposals/delivery-pipeline.md` |
| strategy A/B/C | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | `docs/proposals/strategy-*.md` |
| ui foundation/interaction | `.cursor/rules/common-rules/common-rule-ui-*.mdc` | `docs/proposals/fe-ux-plan.md` |

### Capability → Rules → Triggers → Outputs → Gates
- See Capability Registry table above.

---

## Success Metrics
- ≥95% correct routing vs human labels; <2% missed F8 overlays.
- Gate adherence ≥95%; zero criticals bypassed.
- Routing logs contain confidence and clarify notes for 100% of sessions.

## Next Steps
- Implement capability registry and logging; enable dual-routing with parity checks.
- Adopt baseline policy DSL; tune thresholds per project.
- Define SLO exemplars per domain and wire optional project-rules progressively.

## Why this route + Confidence
- Capability-first precedence appears in all AI_* sources; hybrid layering maximizes explainability and safety.
- Confidence: 0.87 (no clarify needed).