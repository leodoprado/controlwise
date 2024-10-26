import { Bookmark, SquarePen } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

import { ColorDialog } from '../_components/color-options'
import { IconDialog } from '../_components/icon-options'

export function FormCategorieExpense() {
  return (
    <DialogContent>
      <DialogTitle className="flex items-center">
        <Bookmark className="mr-2 h-4 w-4" /> Nova Categoria de Despesa
      </DialogTitle>

      <form className="space-y-4">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <SquarePen className="h-4 w-4 text-gray-500" />
          </span>
          <Input
            id="nome"
            className="pl-10 focus-visible:ring-red-500"
            placeholder="Nome"
          />
        </div>
        <div className="flex gap-4">
          <ColorDialog />
          <IconDialog />
        </div>

        <DialogFooter>
          <Button
            variant={'outline'}
            className="w-full focus-visible:ring-red-500"
          >
            Adicionar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
