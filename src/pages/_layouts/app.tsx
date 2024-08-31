import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <div>
        <Header />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  )
}
