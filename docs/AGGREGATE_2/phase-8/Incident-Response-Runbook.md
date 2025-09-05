# Incident Response Runbook

## Triggers
- Security alert (critical)
- Data breach suspicion
- CI gate bypass detected

## Steps
1. Triage and classify severity
2. Contain (revoke tokens, isolate services)
3. Eradicate (patch, rotate secrets)
4. Recover (restore services; verify)
5. Post-incident review and timeline

## Notifications
- Security team, Engineering leadership, Compliance

## Artifacts
- Incident ticket, timeline, remediation PRs, audit logs