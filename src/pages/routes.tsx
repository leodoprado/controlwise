import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './_layouts/app'
import { AuthLayout } from './_layouts/auth'
// Minhas Despesas - Pages
import { EAnalysisPage } from './app/myexpenses/analysis/analysis'
import { EDashboardPage } from './app/myexpenses/dashboard/dashboard'
import { EGoalsPage } from './app/myexpenses/goals/goals'
import { EPlanningPage } from './app/myexpenses/planning/planning'
import { EReportsPage } from './app/myexpenses/reports/reports'
import { ETransactionsPage } from './app/myexpenses/transactions/transactions'
// Auth - Pages
import { ASignInPage } from './auth/sign-in'
import { ASignUpPage } from './auth/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/', element: <ASignInPage /> },
      { path: '/signup', element: <ASignUpPage /> },
    ],
  },
  {
    path: '/myexpenses',
    element: <AppLayout />,
    children: [
      { path: '/myexpenses/dashboard', element: <EDashboardPage /> },
      { path: '/myexpenses/transactions', element: <ETransactionsPage /> },
      { path: '/myexpenses/planning', element: <EPlanningPage /> },
      { path: '/myexpenses/goals', element: <EGoalsPage /> },
      { path: '/myexpenses/analysis', element: <EAnalysisPage /> },
      { path: '/myexpenses/reports', element: <EReportsPage /> },
    ],
  },
])
