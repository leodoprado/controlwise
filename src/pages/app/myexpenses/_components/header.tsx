import logo from '@/assets/short-logo.ico'

import { AccountMenu } from '../../../../components/account-menu'
import { NavLink } from '../../../../components/nav-link'
import { Separator } from '../../../../components/ui/separator'
import { ComboboxDemo } from './months'
import { ToAdd } from './to-add'
export interface HeaderProps {}

export function HeaderExpenses() {
  return (
    <div className="shadow-md">
      <div className="flex h-16 items-center gap-6 px-6">
        <img src={logo} alt="logo" className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to={'/myexpenses/dashboard'}>Painel</NavLink>
          <NavLink to={'/myexpenses/transactions'}>Movimentações</NavLink>
          <NavLink to={'/myexpenses/planning'}>Planejamentos</NavLink>
          <NavLink to={'/myexpenses/goals'}>Metas</NavLink>
          <NavLink to={'/myexpenses/analysis'}>Análises</NavLink>
          <NavLink to={'/myexpenses/reports'}>Relatórios</NavLink>
        </nav>

        <div className="flex gap-3">
          <ToAdd />
          <ComboboxDemo />
        </div>

        <div className="ml-auto flex items-center gap-6">
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
