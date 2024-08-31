import logo from '@/assets/i.ico'

import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'
import { Separator } from './ui/separator'
export interface HeaderProps {}

export function Header() {
  return (
    <div className="shadow-md">
      <div className="flex h-16 items-center gap-6 px-6">
        <img src={logo} alt="logo" className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to={'/dashboard'}>Painel</NavLink>
          <NavLink to={'/transactions'}>Movimentações</NavLink>
          <NavLink to={'/planning'}>Planejamentos</NavLink>
          <NavLink to={'/goals'}>Metas</NavLink>
          <NavLink to={'/analysis'}>Análises</NavLink>
          <NavLink to={'/reports'}>Relatórios</NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
