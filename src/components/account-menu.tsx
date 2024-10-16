import { useQuery } from '@tanstack/react-query'
import { Banknote, ChevronDown, LogOut, Settings, Wallet } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { getProfile } from '@/api/get-profile'
import { useAuth } from '@/contexts/useAuth'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function AccountMenu() {
  // const navigate = useNavigate()
  const { logout } = useAuth()

  const { data: profile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  })

  /* const { mutateAsync: signOutFn, isPending: isSigningOut } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      navigate('/', { replace: true })
    },
  }) */

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={'outline'}
          className="flex select-none items-center gap-1 rounded-md"
        >
          {profile?.nome}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="border-5 mt-1 w-56 transform p-0 shadow-2xl transition-all duration-500 ease-in-out"
      >
        <NavLink to="/myexpenses/dashboard">
          <DropdownMenuItem className="cursor-pointer p-3">
            <Banknote className="mr-2 h-4 w-4" /> Minhas Despesas
          </DropdownMenuItem>
        </NavLink>

        <NavLink to="/mywallet/dashboard">
          <DropdownMenuItem className="cursor-pointer p-3">
            <Wallet className="mr-2 h-4 w-4" /> Minha Carteira
          </DropdownMenuItem>
        </NavLink>

        <NavLink to="/config/profile">
          <DropdownMenuItem className="cursor-pointer p-3">
            <Settings className="mr-2 h-4 w-4" /> Configurações
          </DropdownMenuItem>
        </NavLink>

        <NavLink to="/">
          <DropdownMenuItem
            asChild
            className="cursor-pointer p-3 text-rose-500"
          >
            <button className="w-full" onClick={() => logout()}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sair</span>
            </button>
          </DropdownMenuItem>
        </NavLink>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
