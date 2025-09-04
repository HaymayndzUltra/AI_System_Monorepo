import { useEffect, useState } from 'react'

export default function Health() {
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState(null)

  useEffect(() => {
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), 4000)
    fetch('/health', { signal: ctrl.signal })
      .then(r => r.json())
      .then(j => setStatus(j.status || 'unknown'))
      .catch(() => setError('failed'))
      .finally(() => clearTimeout(timer))
    return () => {
      clearTimeout(timer)
      ctrl.abort()
    }
  }, [])

  if (error) return <div role="alert">Health check failed</div>
  if (status === 'loading') return <div aria-busy>Loading…</div>
  return <div aria-live="polite">Status: {status}</div>
}

