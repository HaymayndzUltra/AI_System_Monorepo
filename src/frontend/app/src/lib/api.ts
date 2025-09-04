export type FetchJsonOptions = {
  signal?: AbortSignal
  timeoutMs?: number
  init?: RequestInit
}

export class HttpError extends Error {
  readonly status: number
  readonly body?: unknown
  constructor(message: string, status: number, body?: unknown) {
    super(message)
    this.name = 'HttpError'
    this.status = status
    this.body = body
  }
}

export async function fetchJson<TResponse>(
  path: string,
  options: FetchJsonOptions = {}
): Promise<TResponse> {
  const controller = new AbortController()
  const timeout = options.timeoutMs ?? 10000
  const timeoutId = setTimeout(() => controller.abort(), timeout)
  try {
    const res = await fetch(path, {
      ...options.init,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...(options.init?.headers ?? {})
      },
      signal: options.signal ?? controller.signal
    })
    const text = await res.text()
    const json = text ? safeJsonParse(text) : undefined
    if (!res.ok) {
      throw new HttpError(`Request failed with status ${res.status}`, res.status, json)
    }
    return json as TResponse
  } finally {
    clearTimeout(timeoutId)
  }
}

function safeJsonParse(input: string): unknown {
  try {
    return JSON.parse(input)
  } catch {
    return input
  }
}

