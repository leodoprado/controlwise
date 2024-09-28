import logo from '@/assets/short-logo.ico'
import { NavLink } from '@/components/nav-link'

import { AccountMenu } from '../../../../components/account-menu'
import { Separator } from '../../../../components/ui/separator'
export interface HeaderProps {}

export function HeaderWallet() {
  return (
    <div className="shadow-md">
      <div className="flex h-16 items-center gap-6 px-6">
        <img src={logo} alt="logo" className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to={'/myexpenses/dashboard'}>Resumo</NavLink>
          <NavLink to={'/myexpenses/analysis'}>Proventos</NavLink>
          <NavLink to={'/myexpenses/transactions'}>Gráficos</NavLink>
          <NavLink to={'/myexpenses/planning'}>Lançamentos</NavLink>
          <NavLink to={'/myexpenses/goals'}>IRPF</NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-6">
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
