import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Health from './routes/Health'

function Health() {
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: 'var(--space-6)' }}>
      <h1>Health</h1>
      <p>Coming soon...</p>
    </main>
  )
}

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/health', element: <Health /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
