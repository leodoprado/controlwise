import { ArrowLeftRight, Flag, Plus, Presentation } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { AddObjective } from './add-objective'
import { AddPlanning } from './add-planning'
import { AddTransaction } from './add-transaction'

export function ToAdd() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={'default'}
          className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-md transition-shadow duration-300 hover:shadow-lg"
        >
          Adicionar
          <Plus className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className="border-5 mt-1 w-48 transform p-0 shadow-2xl transition-all duration-500 ease-in-out"
      >
        <Dialog>
          <DialogTrigger asChild>
            <DropdownMenuItem
              className="cursor-pointer p-3"
              onSelect={(e) => e.preventDefault()} // Previne que o Dropdown feche ao abrir o Dialog
            >
              <ArrowLeftRight className="mr-2 h-4 w-4" />
              Movimentação
            </DropdownMenuItem>
          </DialogTrigger>

          {/* Componente AddTransaction com controle de abertura/fechamento */}
          <AddTransaction />
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <DropdownMenuItem
              className="cursor-pointer p-3"
              onSelect={(e) => e.preventDefault()}
            >
              <Presentation className="mr-2 h-4 w-4" /> Planejamento
            </DropdownMenuItem>
          </DialogTrigger>
          <AddPlanning />
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <DropdownMenuItem
              className="cursor-pointer p-3"
              onSelect={(e) => e.preventDefault()}
            >
              <Flag className="mr-2 h-4 w-4" /> Objetivo
            </DropdownMenuItem>
          </DialogTrigger>
          <AddObjective />
        </Dialog>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
