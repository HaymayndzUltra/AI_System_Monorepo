import { Link, Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <header style={{ padding: '8px 16px', borderBottom: '1px solid #eee' }}>
        <strong>AI-Governed FE</strong>
        <nav style={{ marginLeft: 16 }}>
          <Link to="/">Home</Link> | <Link to="/health">Health</Link>
        </nav>
      </header>
      <main style={{ padding: 16 }}>
        <h1>Home</h1>
        <p>Welcome.</p>
        <Outlet />
      </main>
    </div>
  )
}

