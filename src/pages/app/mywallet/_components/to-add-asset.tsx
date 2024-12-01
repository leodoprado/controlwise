import { DialogTitle } from '@radix-ui/react-dialog'
import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import { AddAsset } from './add-asset'

export function ToAddAsset() {
  return (
    <Dialog>
      <DialogTitle></DialogTitle>
      <DialogTrigger asChild>
        <Button
          variant={'default'}
          className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-md transition-shadow duration-300 hover:shadow-lg"
        >
          Adicionar Ativo
          <Plus className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <AddAsset />
    </Dialog>
  )
}
