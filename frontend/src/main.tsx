import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './app/globalStyles'
import App from "./app"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
