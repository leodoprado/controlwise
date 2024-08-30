import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './_layouts/app'
import { AuthLayout } from './_layouts/auth'
import { Dashboard } from './app/dashboard'
import { SignIn } from './auth/sign-in'
import { SignUp } from './auth/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/signin', element: <SignIn /> },
      { path: '/signup', element: <SignUp /> },
    ],
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Dashboard /> }],
  },
])
