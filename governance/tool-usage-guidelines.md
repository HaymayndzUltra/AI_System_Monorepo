### Blocks
[TOOL REPORT]
- Discovered: {tools}
- Chosen: {tool_name}@{version}
- Reason: {why this tool}
- Limits: {timeout, bytes, concurrency}
- Privacy: {pii_risk, logs_secret_safe}

[TOOL ACTION]
- Command/Params: {exact invocation or API}
- Expected Outputs: {files/artifacts}
- Success Criteria: {how we know it worked}

### ✅ Example
[TOOL REPORT]
Discovered: grep, codebase_search
Chosen: codebase_search
Reason: semantic search across repo
Limits: timeout=60000ms
Privacy: pii_risk=low, logs_secret_safe=true

[TOOL ACTION]
Command: codebase_search(query="auth flow", target=[])
Expected: file list + snippets
Success: rule map built

### ❌ Anti‑patterns
- Hardcoding unsupported tools
- Logging secrets or access tokens

