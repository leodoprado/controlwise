import logo from '@/assets/short-logo.ico'

import { AccountMenu } from '../../../../components/account-menu'
import { Separator } from '../../../../components/ui/separator'
import { NavLink } from './nav-link'
export interface HeaderProps {}

export function Header() {
  return (
    <div className="shadow-md">
      <div className="flex h-16 items-center gap-6 px-6">
        <img src={logo} alt="logo" className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to={'/config/profile'}>Meu Perfil</NavLink>
          <NavLink to={'/config/categories'}>Categorias</NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-6">
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
