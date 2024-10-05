import { Plus } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import nocontent from '@/assets/nc-plann.svg'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { NoContent } from '@/pages/no-content'

import { AddPlanning } from '../_components/add-planning'

export function EPlanningPage() {
  return (
    <>
      <Helmet title="Planejamentos" />
      <NoContent
        imageSrc={nocontent}
        contentTitle="Ops! Sem planejamentos registrados."
        tooltipContent={
          <>
            Aqui você define e visualiza novos planejamentos.
            <br />
            Fique por dentro dos seus planejamentos mensais.
          </>
        }
      >
        <div className="mt-4 flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant={'default'}
                className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                Adicionar Novo Planejamento
                <Plus className="h-5 w-5" />
              </Button>
            </DialogTrigger>

            <AddPlanning />
          </Dialog>
        </div>
      </NoContent>
    </>
  )
}
