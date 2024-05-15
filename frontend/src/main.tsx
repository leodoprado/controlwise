import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './style/globalStyles'
import App from "./app"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from './lib/react-query'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
