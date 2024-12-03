import './global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { QueryKeyProvider } from './contexts/queryKeyContext'
import { AuthProvider } from './contexts/useAuth'
import { queryClient } from './lib/react-query'
import { router } from './pages/routes'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="controlwise-theme" defaultTheme="light">
        <Helmet titleTemplate="%s | Control Wise" />
        <Toaster richColors />
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <QueryKeyProvider>
              <RouterProvider router={router} />
            </QueryKeyProvider>
          </QueryClientProvider>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
