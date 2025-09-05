# CI Wiring Guide (Phase 3)

- Load `docs/AGGREGATE_2/phase-3/Policy-DSL.yaml`
- Enforce CI gates via `ci/gates_config.yaml`
- Add jobs: secret scan, SAST/SCA, SBOM on release
- Block on F8 criticals; require mod-safety checklist; run docs-sync on content changes