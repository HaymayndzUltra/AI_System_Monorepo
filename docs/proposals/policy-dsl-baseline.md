# Policy DSL (Baseline — Draft)

## Sample Rules (YAML‑like)
```yaml
policies:
  - name: always-apply-security
    when: true
    add: [security.overlay]

  - name: risky-modifications
    when: intent.type == "modify" && entity.risk in ["medium","high"]
    add: [code.modify.safety, audit.run]

  - name: frontend-a11y-perf
    when: entity.domain == "frontend"
    add: [ui.interaction]

  - name: require-contract-tests
    when: capability == "backend.api" && lifecycle in ["implement","release"]
    add: [test.integration]

  - name: release-gates
    when: lifecycle == "release"
    add: [release.prepare]
```

## Enforcement Notes
- Versioned policies; explainable logs.
- Lint in CI; measure hit/override rates.

