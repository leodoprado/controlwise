import { Banknote, ChevronDown, LogOut, User2, Wallet } from 'lucide-react'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={'outline'}
          className="flex select-none items-center gap-2"
        >
          Leonardo do Prado
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem>
          <User2 className="mr-2 h-4 w-4" /> Perfil
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Banknote className="mr-2 h-4 w-4" /> Minhas Despesas
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Wallet className="mr-2 h-4 w-4" /> Minha Carteira
        </DropdownMenuItem>

        <DropdownMenuItem className="text-rose-500">
          <LogOut className="mr-2 h-4 w-4" /> Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
