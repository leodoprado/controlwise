import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div>
      <div>
        <h1>cabecalho</h1>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
