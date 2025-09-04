import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './tokens.css'
import App from './routes/App.jsx'
import Health from './routes/Health.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/health', element: <Health /> },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

