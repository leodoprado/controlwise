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
          className="flex select-none items-center gap-1 rounded-md"
        >
          Leonardo do Prado
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="border-5 mt-1 w-56 transform p-3 shadow-2xl transition-all duration-500 ease-in-out"
      >
        <DropdownMenuItem className="cursor-pointer">
          <User2 className="mr-2 h-4 w-4" /> Perfil
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer">
          <Banknote className="mr-2 h-4 w-4" /> Minhas Despesas
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer">
          <Wallet className="mr-2 h-4 w-4" /> Minha Carteira
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer text-rose-500">
          <LogOut className="mr-2 h-4 w-4" /> Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
