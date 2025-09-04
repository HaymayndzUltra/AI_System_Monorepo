import { useEffect, useRef, useState } from 'react'
import { fetchJson, HttpError } from '../lib/api'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - compile-time import only used in dev
import devMock from '../mocks/health.json'

type HealthResponse = {
  status: string
  uptime?: number
  version?: string
}

export default function Health() {
  const isDev = import.meta.env.DEV
  const [data, setData] = useState<HealthResponse | null>(isDev ? (devMock as HealthResponse) : null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(!isDev)
  const isMounted = useRef(true)

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  async function load() {
    setLoading(true)
    setError(null)
    try {
      const safetyId = window.setTimeout(() => {
        if (!isMounted.current) return
        setError('Request timed out')
        setLoading(false)
      }, 5000)

      let res: HealthResponse
      const bust = import.meta.env.DEV ? `?t=${Date.now()}` : ''
      const primary = import.meta.env.DEV ? `/health.json${bust}` : `/health${bust}`
      const fallback = import.meta.env.DEV ? `/health${bust}` : `/health.json${bust}`
      if (import.meta.env.DEV) {
        // Prefer local mock at compile-time in dev
        res = devMock as HealthResponse
      } else {
        try {
          res = await fetchJson<HealthResponse>(primary, { timeoutMs: 4000 })
        } catch (err) {
          const code = err instanceof HttpError ? err.status : undefined
          if (code === 404 || code === 200 || (err as Error).name === 'AbortError') {
            res = await fetchJson<HealthResponse>(fallback, { timeoutMs: 4000 })
          } else {
            throw err
          }
        }
      }
      if (isMounted.current) {
        setData(res)
      }
      window.clearTimeout(safetyId)
    } catch (err) {
      if (!isMounted.current) return
      if (err instanceof HttpError) {
        setError(`Server error: ${err.status}`)
      } else if ((err as Error).name === 'AbortError') {
        setError('Request timed out')
      } else {
        setError('Network error')
      }
    } finally {
      if (isMounted.current) setLoading(false)
    }
  }

  useEffect(() => {
    if (!isDev) {
      load()
    }
  }, [isDev])

  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: 'var(--space-6)' }}>
      <h1>Health</h1>
      <section aria-live="polite" aria-busy={loading}>
        {loading && (
          <p role="status">Loading…</p>
        )}
        {!loading && error && (
          <div role="alert" style={{ color: 'tomato' }}>
            <p>{error}</p>
            <button onClick={load} aria-label="Retry fetching health">Retry</button>
          </div>
        )}
        {!loading && !error && data && (
          <dl>
            <div>
              <dt>Status</dt>
              <dd>{data.status}</dd>
            </div>
            {typeof data.uptime === 'number' && (
              <div>
                <dt>Uptime</dt>
                <dd>{Math.round(data.uptime)}s</dd>
              </div>
            )}
            {data.version && (
              <div>
                <dt>Version</dt>
                <dd>{data.version}</dd>
              </div>
            )}
          </dl>
        )}
      </section>
    </main>
  )
}

