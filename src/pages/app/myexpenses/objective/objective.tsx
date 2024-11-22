import { Edit, Flag, Trash } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import nocontent from '@/assets/nc-goals.svg'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { NoContent } from '@/pages/no-content'

import { AddObjective } from '../_components/add-objective'
import { FilterObjectives } from './filter-objectives'

const objectives = [
  {
    id: 1,
    title: 'Comprar Carro',
    date: '13/10/2028',
    value: 'R$ 52.235,00',
    valueInicial: 'R$ 46.500,00',
    description: '',
  },
]

export function EObjectivePage() {
  return (
    <>
      <Helmet title="Objetivos" />

      <div className="w-full space-y-2.5">
        {objectives.length > 0 ? (
          <>
            <div className="mb-4 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <h1 className="whitespace-nowrap font-semibold">
                  Filtros de Objetivos:
                </h1>
                <FilterObjectives />
              </div>
            </div>

            <div className="grid w-full grid-cols-2 gap-4">
              {objectives.map((objective) => (
                <Card
                  key={objective.id}
                  className="w-full rounded-lg bg-white p-4 shadow-sm"
                >
                  <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-2x1 flex items-center gap-2 font-bold">
                      <Flag className="h-4 w-4" />
                      {objective.title}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="xs"
                            className="flex items-center"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                      </Dialog>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="xs"
                            className="flex items-center"
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                      </Dialog>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-1"></CardContent>
                  <CardFooter></CardFooter>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <NoContent
            contentTitle="Ops! Sem objetivos registrados."
            imageSrc={nocontent}
            tooltipContent={
              <>
                Aqui você define e visualiza novos objetivos.
                <br />
                Fique por dentro dos objetivos pretendidos.
              </>
            }
            buttonText="Adicionar Novo Objetivo"
            dialogContent={<AddObjective />}
          ></NoContent>
        )}
      </div>
    </>
  )
}
