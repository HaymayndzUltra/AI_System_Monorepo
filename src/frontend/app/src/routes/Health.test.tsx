import { render, screen, waitFor } from '@testing-library/react'
import Health from './Health'

describe('Health Page', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('shows loading, then renders status on success', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(new Response(
      JSON.stringify({ status: 'ok', uptime: 123, version: '1.0.0' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    ) as unknown as Response)

    render(<Health />)
    expect(screen.getByRole('status')).toHaveTextContent(/loading/i)
    await waitFor(() => expect(screen.getByText(/Status/i)).toBeInTheDocument())
    expect(screen.getByText('ok')).toBeInTheDocument()
  })

  it('shows error and retry on failure', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(new Response('fail', { status: 500 }))

    render(<Health />)
    await waitFor(() => expect(screen.getByRole('alert')).toBeInTheDocument())
    expect(screen.getByRole('button', { name: /retry/i })).toBeInTheDocument()
  })
})

