# Core Service

Implements the `/health` endpoint as defined in `openapi/api-v1.0.yaml`.

## Run

```bash
cd src/backend/core
npm install
npm start
# or specify a port
PORT=4000 npm start
```

## Test

```bash
cd src/backend/core
npm test
```

## Verify

```bash
curl -s http://localhost:3000/health | jq
# { "status": "ok" }
```

