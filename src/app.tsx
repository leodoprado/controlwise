import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './pages/routes'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="controlwise-theme" defaultTheme="light">
        <Helmet titleTemplate="%s | Control Wise" />
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
