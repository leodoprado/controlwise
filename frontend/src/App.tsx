import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// @ts-ignore
import Header from './app/components/header.tsx'
// @ts-ignore
import Main from './app/components/main.tsx'
// @ts-ignore
import Footer from './app/components/footer.tsx'

function App() {
  const [count, setCount] = useState(43)

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
