import { render, screen } from '@testing-library/react'
import App from './App'

describe('App Shell', () => {
  it('renders header nav and main content', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: /primary/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /app shell/i })).toBeInTheDocument()
  })
})