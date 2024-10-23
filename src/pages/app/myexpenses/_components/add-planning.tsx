import { Banknote, Bookmark, FilePen, Presentation } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

export function AddPlanning() {
  return (
    <DialogContent>
      <DialogTitle className="flex items-center">
        <Presentation className="mr-2 h-4 w-4" /> Novo Planejamento
      </DialogTitle>
      <div className="space-y-1">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Banknote className="h-4 w-4 text-gray-500" />
          </span>
          <Input id="transactionValue" className="pl-10" placeholder="0,00" />
        </div>
      </div>
      <div className="space-y-1">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Bookmark className="h-4 w-4 text-gray-500" />
          </span>
          <Input id="name" className="pl-10" placeholder="Categoria" />
        </div>
      </div>
      <div className="space-y-1">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FilePen className="h-4 w-4 text-gray-500" />
          </span>
          <Input id="username" className="pl-10" placeholder="Descrição" />
        </div>
      </div>
      <DialogFooter>
        <Button variant={'outline'} className="w-full">
          Adicionar
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
