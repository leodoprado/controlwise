import { Plus } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import nocontent from '@/assets/nc-goals.svg'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { NoContent } from '@/pages/no-content'

import { AddGoals } from '../_components/add-goals'

export function EGoalsPage() {
  return (
    <>
      <Helmet title="Metas" />
      <NoContent
        contentTitle="Ops! Sem metas registradas."
        imageSrc={nocontent}
        tooltipContent={
          <>
            Aqui você define e visualiza novas metas.
            <br />
            Fique por dentro das metas pretendidas.
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
                Adicionar Nova Meta
                <Plus className="h-5 w-5" />
              </Button>
            </DialogTrigger>

            <AddGoals />
          </Dialog>
        </div>
      </NoContent>
    </>
  )
}
