# Cursor Rules Quick Reference

## Core Triggers (Context & Governance)
- rule, context, analyze → Load context discovery; read relevant READMEs and rules.
- security, compliance, governance, threat, audit → Apply Security & Compliance Overlay (F8).

## Collaboration & Quality
- conflict, clarify, proceed, how to, question → Collaboration guidelines.
- code, develop, refactor, implement, fix, quality → Code Quality Checklist.
- modify, edit, change, update, refactor, fix, implement → Modification Safety.
- readme, documentation, modification, refactoring, structure, docs → Documentation Integrity.
- complex, feature, algorithm, state-machine, api-integration, large-file, intensive, collaborative, refined → Complex Feature Context.

## UI Rules
- foundation, design tokens, style guide, AA, grid, spacing, typography → UI Foundation.
- interaction, accessibility, a11y, keyboard, aria, animation, durations, LCP, INP, CLS → UI Interaction.
- premium, brand, glassmorphism, blur, parallax, dataviz, enterprise, RBAC, audit → UI Premium.

## Dev-Workflow Commands (Router)
- bootstrap, setup, initialize, project start → dev-workflow/0-bootstrap-your-project.md
- master plan, framework ecosystem, parallel development, background agents → dev-workflow/0-master-planner.md
- prd, requirements, feature planning, product spec → dev-workflow/1-create-prd.md
- task generation, technical planning, implementation plan → dev-workflow/2-generate-tasks.md
- process tasks, execute, implement, development → dev-workflow/3-process-tasks.md
- audit, validate/validator → Auditor → Validator Protocol
- retrospective, review, improvement, post-implementation → dev-workflow/4-implementation-retrospective.md
- parallel execution, coordination, multi-agent, background agents → dev-workflow/5-background-agent-coordination.md

## Auditor → Validator Protocol (I/O)
- audit {framework} @ {commit|HEAD}
  - In: PRD/PLAN or tasks, repo snapshot (commit SHA)
  - Out: reports/audit-{framework}-{ts}.md
- validate {framework} using {audit_report}
  - In: same planner artifacts + audit report
  - Out: reports/validation-{framework}-{ts}.md

## Notes
- Background agents handle branches/PRs automatically; work from repo snapshots.
- FE/BE parallel sessions require frozen contracts (e.g., openapi/api-v1.0.yaml).
