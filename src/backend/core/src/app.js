import express from 'express';
import { randomUUID } from 'node:crypto';
import client from 'prom-client';

export function createApp() {
  const app = express();

  // Metrics registry and a basic counter (placeholder)
  const registry = new client.Registry();
  const httpRequestsTotal = new client.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status']
  });
  registry.registerMetric(httpRequestsTotal);
  client.collectDefaultMetrics({ register: registry });

  // Correlation ID middleware
  app.use((req, res, next) => {
    const incomingId = req.header('x-correlation-id');
    const correlationId = incomingId && incomingId.trim() !== '' ? incomingId : randomUUID();
    req.correlationId = correlationId;
    res.setHeader('x-correlation-id', correlationId);
    next();
  });

  // Basic request logging + metrics
  app.use((req, res, next) => {
    const startedAt = Date.now();
    const id = req.correlationId;
    // eslint-disable-next-line no-console
    console.log(`[${id}] -> ${req.method} ${req.url}`);
    res.on('finish', () => {
      const durationMs = Date.now() - startedAt;
      // eslint-disable-next-line no-console
      console.log(`[${id}] <- ${req.method} ${req.url} ${res.statusCode} ${durationMs}ms`);
      httpRequestsTotal.labels(req.method, req.route?.path || req.path, String(res.statusCode)).inc();
    });
    next();
  });

  // Metrics endpoint
  app.get('/metrics', async (req, res) => {
    res.setHeader('Content-Type', registry.contentType);
    res.send(await registry.metrics());
  });

  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  return app;
}

