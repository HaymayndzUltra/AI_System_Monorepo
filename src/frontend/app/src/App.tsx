import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: 'var(--space-4)',
      maxWidth: 960,
      margin: '0 auto'
    }}>
      <nav aria-label="Primary">
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: 'var(--space-4)',
          padding: 0,
          margin: 0
        }}>
          <li><a href="/">Home</a></li>
          <li><a href="/health">Health</a></li>
        </ul>
      </nav>
    </header>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main style={{ maxWidth: 960, margin: '0 auto', padding: 'var(--space-6)' }}>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>App Shell</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            This app uses shared design tokens.
          </p>
        </div>
      </main>
    </>
  )
}

export default App
