import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './_layouts/app'
import { AuthLayout } from './_layouts/auth'
import { ConfigLayout } from './_layouts/config'
import { CCategoryPage } from './app/config/categories/categories'
import { CProfilePage } from './app/config/profile/profile'
import { EAnalysisPage } from './app/myexpenses/analysis/analysis'
import { EDashboardPage } from './app/myexpenses/dashboard/dashboard'
import { EGoalsPage } from './app/myexpenses/goals/goals'
import { EPlanningPage } from './app/myexpenses/planning/planning'
import { EReportsPage } from './app/myexpenses/reports/reports'
import { ETransactionsPage } from './app/myexpenses/transactions/transactions'
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
    path: '/config',
    element: <ConfigLayout />,
    children: [
      { path: '/config/profile', element: <CProfilePage /> },
      { path: '/config/categories', element: <CCategoryPage /> },
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
