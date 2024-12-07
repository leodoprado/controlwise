import logo from '@/assets/short-logo.ico'
import { NavLink } from '@/components/nav-link'

import { AccountMenu } from '../../../../components/account-menu'
import { Separator } from '../../../../components/ui/separator'
import { ToAddAsset } from './to-add-asset'
export interface HeaderProps {}

export function HeaderWallet() {
  return (
    <div className="shadow-md">
      <div className="flex h-16 items-center gap-6 px-6">
        <img src={logo} alt="logo" className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to={'/mywallet/dashboard'}>Resumo</NavLink>
          <NavLink to={'/mywallet/releases'}>Lançamentos</NavLink>
          <NavLink to={'/mywallet/irpf'}>IRPF</NavLink>
        </nav>

        <div className="flex gap-3">
          <ToAddAsset />
        </div>

        <div className="ml-auto flex items-center gap-6">
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
