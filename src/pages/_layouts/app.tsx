import { Outlet, useLocation } from 'react-router-dom'

import { HeaderExpenses } from '@/pages/app/myexpenses/_components/header'
import { HeaderWallet } from '@/pages/app/mywallet/_components/header'

export function AppLayout() {
  const location = useLocation()

  const renderHeader = () => {
    if (location.pathname.startsWith('/mywallet')) {
      return <HeaderWallet />
    }
    return <HeaderExpenses />
  }

  return (
    <div className="flex min-h-screen flex-col antialiased">
      <div>{renderHeader()}</div>

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  )
}
