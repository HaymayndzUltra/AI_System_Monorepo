import test from 'node:test';
import assert from 'node:assert/strict';
import request from 'supertest';
import { createApp } from '../src/app.js';

test('GET /health returns 200 with { status: "ok" }', async () => {
  const app = createApp();
  const response = await request(app).get('/health');
  assert.equal(response.status, 200);
  assert.equal(response.headers['content-type']?.includes('application/json'), true);
  assert.deepEqual(response.body, { status: 'ok' });
});

