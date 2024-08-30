import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './pages/routes'

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Control Wise" />
      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App
