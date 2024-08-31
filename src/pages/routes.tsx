import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './_layouts/app'
import { AuthLayout } from './_layouts/auth'
import { Analysis } from './app/myexpenses/analysis/analysis'
import { Dashboard } from './app/myexpenses/dashboard/dashboard'
import { Goals } from './app/myexpenses/goals/goals'
import { Planning } from './app/myexpenses/planning/planning'
import { Reports } from './app/myexpenses/reports/reports'
import { Transactions } from './app/myexpenses/transactions/transactions'
import { SignIn } from './auth/sign-in'
import { SignUp } from './auth/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/', element: <SignIn /> },
      { path: '/signup', element: <SignUp /> },
    ],
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/transactions', element: <Transactions /> },
      { path: '/planning', element: <Planning /> },
      { path: '/goals', element: <Goals /> },
      { path: '/analysis', element: <Analysis /> },
      { path: '/reports', element: <Reports /> },
    ],
  },
])
