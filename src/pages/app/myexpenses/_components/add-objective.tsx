import { Banknote, Captions, FilePen, Flag, HandCoins } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

import { DatePickerDemo } from './date-picker'

export function AddObjective() {
  return (
    <DialogContent>
      <DialogTitle className="flex items-center">
        <Flag className="mr-2 h-4 w-4" /> Novo Objetivo
      </DialogTitle>
      <div className="space-y-1">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Captions className="h-4 w-4 text-gray-500" />
          </span>
          <Input
            id="username"
            className="pl-10"
            placeholder="Título do Objetivo"
          />
        </div>
      </div>
      <div className="space-y-1">
        <div className="relative">
          <DatePickerDemo />
        </div>
      </div>
      <div className="space-y-1">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Banknote className="h-4 w-4 text-gray-500" />
          </span>
          <Input
            id="transactionValue"
            className="pl-10"
            placeholder="Valor do Objetivo"
          />
        </div>
      </div>
      <div className="space-y-1">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <HandCoins className="h-4 w-4 text-gray-500" />
          </span>
          <Input
            id="transactionValue"
            className="pl-10"
            placeholder="Valor Inicial do Objetivo"
          />
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
