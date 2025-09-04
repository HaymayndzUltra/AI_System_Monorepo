import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import Health from './Health'

describe('Health', () => {
  test('renders status ok', async () => {
    global.fetch = vi.fn(() => Promise.resolve({ json: () => Promise.resolve({ status: 'ok' }) }))
    render(<Health />)
    expect(screen.getByText(/Loading/)).toBeInTheDocument()
    await waitFor(() => expect(screen.getByText(/Status: ok/)).toBeInTheDocument())
  })
})

