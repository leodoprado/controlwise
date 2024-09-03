import { Plus, TrendingDown, TrendingUp } from 'lucide-react'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function TransactionMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={'default'}
          className="flex items-center gap-1 rounded-full px-4 py-2"
        >
          <span className="font-bold">Adicionar</span>
          <Plus className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className="border-5 mt-1 w-56 transform p-3 shadow-2xl transition-all duration-500 ease-in-out"
      >
        <DropdownMenuItem className="cursor-pointer">
          <TrendingUp className="mr-2 h-4 w-4 text-primary" /> Receita
        </DropdownMenuItem>

        <DropdownMenuItem className="cursor-pointer">
          <TrendingDown className="mr-2 h-4 w-4 text-destructive" /> Despesa
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
