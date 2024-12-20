import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './_layouts/app'
import { AuthLayout } from './_layouts/auth'
import { ConfigLayout } from './_layouts/config'
import { NotFound } from './404'
import { CCategoryPage } from './app/config/categories/categories'
import { CParametersPage } from './app/config/parameters/parameters'
import { CProfilePage } from './app/config/profile/profile'
import { EAnalysisPage } from './app/myexpenses/analysis/analysis'
import { EDashboardPage } from './app/myexpenses/dashboard/dashboard'
import { EObjectivePage } from './app/myexpenses/objective/objective'
import { EPlanningPage } from './app/myexpenses/planning/planning'
import { EReportsPage } from './app/myexpenses/reports/reports'
import { ETransactionsPage } from './app/myexpenses/transactions/transactions'
import { WDashboardPage } from './app/mywallet/dashboard/dashboard'
import { WExportIRPF } from './app/mywallet/irpf/irpf'
import { WMovementsPage } from './app/mywallet/movements/movements'
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
      { path: '/config/parameters', element: <CParametersPage /> },
    ],
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/myexpenses/dashboard', element: <EDashboardPage /> },
      { path: '/myexpenses/transactions', element: <ETransactionsPage /> },
      { path: '/myexpenses/planning', element: <EPlanningPage /> },
      { path: '/myexpenses/objective', element: <EObjectivePage /> },
      { path: '/myexpenses/analysis', element: <EAnalysisPage /> },
      { path: '/myexpenses/reports', element: <EReportsPage /> },
    ],
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/mywallet/dashboard', element: <WDashboardPage /> },
      { path: '/mywallet/movements', element: <WMovementsPage /> },
      { path: '/mywallet/irpf', element: <WExportIRPF /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
