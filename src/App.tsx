import React, { useState } from 'react'
import logo from './logo.svg'
import { AppContainer, Button, Header, Link, Logo } from './styled'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppContainer>
      <Header>
        <Logo src={logo} alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <Link
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Link>
          {' | '}
          <Link
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </Link>
        </p>
      </Header>
    </AppContainer>
  )
}

export default App
