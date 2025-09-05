# Workflow Plan: AGGREGATE_2 - Hybrid Router + Governance

## Executive Summary

This workflow plan implements a capability-first router with Domain×Lifecycle disambiguation and policy overlays, unifying AI_1/AI_2/AI_3 approaches into a single, production-ready system. The plan covers all lifecycle phases from discovery through release, with comprehensive security, quality, and governance overlays.

> Phase 0 Deliverables:
> - RFC one-pager: `docs/AGGREGATE_2/phase-0/RFC-one-pager.md`
> - Stakeholder sign-off: `docs/AGGREGATE_2/phase-0/Stakeholder-Signoff.md`
> - Risk register: `docs/AGGREGATE_2/phase-0/Risk-Register.md`

## Scope & Objectives

### Primary Goals
- Unify AI_1/AI_2/AI_3 into a single capability-first router
- Implement Domain×Lifecycle disambiguation with policy overlays
- Provide capability registry, backward-compat mapping, and baseline policy DSL
- Ensure security (F8), modification safety, audit/validate, docs sync, UI AA/Perf, observability, and release compliance

### Success Metrics
- ≥95% correct routing with <5% clarify rate
- 0 critical security issues merged
- ≥95% gate pass rate on main branch
- <15m PR feedback time
- Explainable routing logs per session

## Capability Registry

### Core Capabilities (MUST Rules)
| Capability | Rule Path | Triggers | Outputs | Gates |
|------------|-----------|----------|---------|-------|
| context.load | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` | rule, context, analyze | Selected rules list | — |
| collab.resolve | `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc` | conflict, clarify, proceed, how to | Protocol adherence | — |
| code.quality | `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc` | code, refactor, quality | Quality checklist | CI must pass |
| code.modify.safety | `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` | modify, edit, change, update, implement | Change plan; validation checklist | Safety checklist must pass |
| docs.sync | `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` | readme, documentation, docs | Updated docs | Docs lint required |
| complex.context | `.cursor/rules/master-rules/6-master-rule-complex-feature-context-preservation.mdc` | complex, algorithm, api-integration | Context bundle; invariants | Reviewer checklist |
| workflow.* | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` | bootstrap, plan, taskgen, execute, retro | Dev-workflow artifacts | Stage gates |
| audit.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | audit {framework}@{rev} | `reports/audit-*.md` | Audit gate must pass |
| validation.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` | validate using {audit} | `reports/validation-*.md` | Validation gate must pass |
| security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` | security, compliance, threat | `[SECURITY CHECK]` notes | Block on criticals |

### UI Capabilities (GUIDELINE Rules)
| Capability | Rule Path | Triggers | Outputs | Gates |
|------------|-----------|----------|---------|-------|
| ui.foundation | `.cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc` | foundation, tokens, AA | tokens, grids | AA contrast |
| ui.interaction | `.cursor/rules/common-rules/common-rule-ui-interaction-a11y-perf.mdc` | interaction, aria, keyboard, perf | interaction/perf specs | INP/LCP budgets |
| ui.premium | `.cursor/rules/common-rules/common-rule-ui-premium-brand-dataviz-enterprise-gated.mdc` | premium, brand, RBAC | premium specs | Preserve AA/perf |

### Optional Capabilities (Project Rules)
| Capability | Rule Path | Triggers | Outputs | Gates |
|------------|-----------|----------|---------|-------|
| data.pipeline | `.cursor/rules/project-rules/F5-data-ml.mdc` | data schema, pipeline | data specs | Falls back to master/common |
| observe.* | `.cursor/rules/project-rules/F10-observability.mdc` | observability | telemetry specs | Falls back to docs |
| release.* | `.cursor/rules/project-rules/F9-release.mdc` | release, deploy | release notes | Falls back to master/common |

## Backward Compatibility Mapping

| Old Trigger(s) | New Capability Trigger(s) | Applied Rules |
|----------------|---------------------------|---------------|
| rule, context, analyze | context.load | `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc` |
| conflict, clarify, proceed, how to | collab.resolve | `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc` |
| code, develop, refactor, implement, fix, quality | code.quality | `.cursor/rules/master-rules/3-master-rule-code-quality-checklist.mdc` |
| modify, edit, change, update, implement | code.modify.safety | `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc` |
| readme, documentation, structure, docs | docs.sync | `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc` |
| complex, feature, algorithm, api-integration | complex.context | `.cursor/rules/master-rules/6-master-rule-complex-feature-context-preservation.mdc` |
| bootstrap, plan, taskgen, execute, retro | workflow.* | `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc` |
| audit {framework}@{commit|HEAD} | audit.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` |
| validate {framework} using {audit_report} | validation.run | `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc` |
| security, compliance, threat, audit | security.overlay | `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc` |
| foundation, tokens, AA | ui.foundation | `.cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc` |
| interaction, aria, keyboard, perf | ui.interaction | `.cursor/rules/common-rule-ui-interaction-a11y-perf.mdc` |
| premium, brand, RBAC | ui.premium | `.cursor/rules/common-rule-ui-premium-brand-dataviz-enterprise-gated.mdc` |

## Baseline Policy DSL

```yaml
policies:
  - id: security_f8
    when: any_change & risk>=minor
    rule: .cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc
    gates:
      - criticals_block: true
      - secrets_in_repo: block
      - sbom_on_release: true
  - id: mod_safety
    when: modifies_code | refactor | schema_change
    rule: .cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc
    gates:
      - change_plan: required
      - validation_checklist: required
  - id: docs_sync
    when: significant_change | new_artifact
    rule: .cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc
    gates:
      - docs_updated: required
  - id: audit_validate
    when: critical_path | contract_change
    rule: .cursor/rules/master-rules/8-auditor-validator-protocol.mdc
    gates:
      - audit_pass: required
      - validation_pass: required
  - id: ui_budgets
    when: domain==ui
    rules:
      - .cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc
      - .cursor/rules/common-rules/common-rule-ui-interaction-a11y-perf.mdc
    gates:
      - aa_contrast: pass
      - perf: { INP_p75: <=200ms, LCP_p75: <=2.5s }
```

## Implementation Phases

### Phase 0: Kickoff & Scope Lock (0.5-1 week)
**Goals**: Confirm default strategy (Strategy-A: Capability-First), confirm Domain×Lifecycle gates, identify owners.

**Owners**: Arch + Sec + DevEx + QA leads

**Deliverables**:
- RFC one-pager referencing source documents
- Stakeholder sign-off
- Risk register

**Exit Gates**: Consensus + sign-off; risks logged

### Phase 1: Capability Registry & Routing Log Scaffolding (2-3 days)
**Actions**:
- Encode Capability Registry as shared config
- Setup routing log schema (fields: capability, rules, overlays, confidence, outcomes)

**Rules Applied**:
- `.cursor/rules/master-rules/1-master-rule-context-discovery.mdc`
- `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc`

**Deliverables**:
- Registry config file
- Routing-log format documentation

**Exit Gates**: Docs lint pass; stakeholders can read/trace mapping

### Phase 2: Dual Routing (Legacy ↔ Capability) + Parity Logs (1 week)
**Actions**:
- Apply backward-compat table (old trigger → new capability)
- Enable confidence scoring; clarify when < 0.70; emit parity logs

**Rules Applied**:
- `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc`
- `.cursor/rules/master-rules/2-master-rule-ai-collaboration-guidelines.mdc`

**Metrics/Gates**: ≥95% parity vs legacy; zero dropped F8 overlays

**Risks/Mitigations**: Misclassification → clarify + safe overlays by default

### Phase 3: Policy DSL + CI Gates (F8, Mod-Safety, Docs-Sync, Audit/Validate) (1-2 weeks)
**Actions**:
- Encode baseline policy DSL
- CI wiring: F8 (secrets/SBOM/SCA/SAST), Mod-Safety checklists, Docs-Sync on changes, Auditor/Validator for critical paths

**Rules Applied**:
- `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc`
- `.cursor/rules/master-rules/4-master-rule-code-modification-safety-protocol.mdc`
- `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc`
- `.cursor/rules/master-rules/5-master-rule-documentation-and-context-guidelines.mdc`

**Gates**: Criticals block (F8), safety checklists required, audit/validate must pass

**Metrics**: 0 criticals merged; ≥95% gate pass rate on main

### Phase 4: UI AA/Perf Budgets & Tokens (3-5 days)
**Actions**:
- Adopt tokens/grids with budgets (INP/LCP/CLS) and a11y checks
- Setup automated checks (e.g., axe/Playwright/Lighthouse)

**Rules Applied**:
- `.cursor/rules/common-rules/common-rule-ui-foundation-design-system.mdc`
- `.cursor/rules/common-rules/common-rule-ui-interaction-a11y-perf.mdc`

**Gates**: AA contrast pass; INP p75 ≤ 200ms; LCP p75 ≤ 2.5s

### Phase 5: Domain×Lifecycle Integration with Dev-Workflow (3-5 days)
**Actions**:
- Wire router outputs to `.cursor/dev-workflow/*` (plan → taskgen → execute → retro)
- Log stage transitions and acceptance criteria per stage

**Rules Applied**:
- `.cursor/rules/master-rules/7-dev-workflow-command-router.mdc`

**Gates**: Stage completion logs present; docs updated

### Phase 6: Cutover to Capability-First Default + Deprecation (2 release cycles)
**Actions**:
- Flip router default to capability-first; legacy triggers as aliases
- Announce deprecation window; keep rollback toggle

**Gates**: <1% required clarify; ≥95% parity sustained; rollback tested

### Phase 7: Observability & Release Overlays (1 week)
**Actions**:
- Define SLOs and dashboards; basic release notes/checklists
- Treat project-rules as optional/placeholder; fallback to master/common + docs gates

**Rules Applied**:
- `.cursor/rules/project-rules/F10-observability.mdc` (optional)
- `.cursor/rules/project-rules/F9-release.mdc` (optional)

**Gates**: SLOs documented; release checklist published

### Phase 8: Security Hardening & IR Runbooks (0.5-1 week, ongoing)
**Actions**:
- Enforce secret scanning, SBOM on releases, dependency SLAs
- Publish incident response playbooks and sensitive-data maps

**Rules Applied**:
- `.cursor/rules/master-rules/F8-security-and-compliance-overlay.mdc`

**Metrics**: 0 hardcoded secrets; critical vulns fixed within SLA

### Phase 9: Audit & Retrospective (2-3 days)
**Actions**:
- Run Auditor → Validator; publish results; conduct retro; tune policies/thresholds

**Rules Applied**:
- `.cursor/rules/master-rules/8-auditor-validator-protocol.mdc`
- `.cursor/rules/master-rules/4-implementation-retrospective.md`

**Gates**: Audit/validation pass; action items logged and scheduled

## Router Logic & Confidence Scoring

### Classification Process
1. **Intent Analysis**: Parse user request for capability indicators
2. **Capability Mapping**: Map to primary capability + overlays
3. **Domain×Lifecycle Resolution**: Apply via `.cursor/dev-workflow/*`
4. **Policy Overlay Application**: Attach relevant policy overlays
5. **Confidence Calculation**: Compute confidence for classification and resolution

### Confidence Thresholds
- **≥ 0.70**: Proceed with execution
- **< 0.70**: Emit clarify prompt: "Please confirm the primary capability/domain/lifecycle focus."
- **Default**: Apply safest overlays (F8 + mod-safety) when uncertain

### Clarify Rules
- One-line clarify for capability classification confidence < 0.70
- Default to safest overlays when uncertain
- Maintain parity logs for dual routing

## Risk Management

### High-Risk Areas
1. **Misclassification (M×M)**: Use confidence thresholds; clarify prompts; parity logs
2. **Gate Sprawl (M×L)**: Consolidate via `ci/gates_config.yaml`; prefer advisory for minors
3. **Over-application of Overlays (L×M)**: Scope via capability/domain; severity thresholds

### Mitigation Strategies
- Confidence thresholds with clarify prompts
- Parity logging for dual routing
- Rollback toggle maintained
- Policy-as-code with peer review
- Advisory-only for minor gates

## Dependencies

### Core Dependencies
- `.cursor/dev-workflow/*` - Dev workflow protocols
- `.cursor/rules/master-rules/*` - Master rule definitions
- `.cursor/rules/common-rules/*` - Common rule definitions
- CI runners and secret manager
- SAST/SCA/DAST tooling
- Audit/validation tooling

### Infrastructure Dependencies
- Artifact store for reports
- Test infrastructure
- Telemetry backend
- Secret management system

## Success Criteria

### Primary Metrics
- ≥95% correct routing
- 0 critical security issues merged
- ≥95% gate pass rate on main
- <15m PR feedback time
- <5% clarify rate required

### Secondary Metrics
- Explainable routing logs per session
- Reduced hotfix bypass <2%
- Milestone gates ≥95% adherence
- UI budgets met (INP/LCP/CLS)

## Next Steps

### Immediate Actions
1. **Approve Phase 0 scope lock**
2. **Start Phase 1** (registry + routing log) using source documents as truth
3. **Prepare CI changes** for Phase 3 (create `ci/gates_config.yaml`, wire F8/mod-safety/docs/audit)

### Short-term (Next 2 weeks)
- Complete Phases 1-3 (registry, dual routing, policy DSL)
- Establish CI gates and monitoring
- Begin UI budget implementation

### Medium-term (Next month)
- Complete Phases 4-6 (UI budgets, dev-workflow integration, cutover)
- Implement observability and release overlays
- Conduct security hardening

### Long-term (Next quarter)
- Complete Phases 7-9 (observability, security hardening, audit/retro)
- Optimize based on metrics and feedback
- Plan next iteration improvements

## Conclusion

This workflow plan provides a comprehensive, phased approach to implementing the AGGREGATE_2 hybrid router with governance overlays. The plan balances immediate implementation needs with long-term maintainability, ensuring security, quality, and performance standards are met throughout all lifecycle phases.

The capability-first approach with backward compatibility ensures smooth migration while the policy overlays provide necessary governance and compliance. The phased implementation allows for iterative improvement and risk mitigation while maintaining delivery velocity.