import {
  Book,
  Car,
  Crosshair,
  Edit,
  Home,
  Pin,
  Trash,
  TreePalm,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import nocontent from '@/assets/nc-plann.svg'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Progress } from '@/components/ui/progress'
import { NoContent } from '@/pages/no-content'

import { AddPlanning } from '../_components/add-planning'
import { FilterCategories } from './filter-categories'

const plannings = [
  {
    id: 1,
    title: 'Gasolina',
    value: 'R$ 200,00',
    valueTransaction: 'R$ 150,00',
    categories: 'Carro',
    categoriesIcon: <Car className="h-4 w-4" />,
  },
  {
    id: 2,
    title: 'Compras do Mercado',
    value: 'R$ 360,00',
    valueTransaction: 'R$ 180,00',
    categories: 'Casa',
    categoriesIcon: <Home className="h-4 w-4" />,
  },
  {
    id: 3,
    title: 'Viagem',
    value: 'R$ 260,00',
    valueTransaction: 'R$ 150,00',
    categories: 'Lazer',
    categoriesIcon: <TreePalm className="h-4 w-4" />,
  },
  {
    id: 4,
    title: 'Livros',
    value: 'R$ 150,00',
    valueTransaction: 'R$ 165,00',
    categories: 'Educação',
    categoriesIcon: <Book className="h-4 w-4" />,
  },
]

export function EPlanningPage() {
  return (
    <>
      <Helmet title="Planejamentos" />

      <div className="w-full space-y-2.5">
        {plannings.length > 0 ? (
          <>
            <div className="mb-4 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <h1 className="whitespace-nowrap font-semibold">
                  Filtros de Planejamentos:
                </h1>
                <FilterCategories />
              </div>
              <div className="flex flex-grow items-center gap-2">
                <h1 className="whitespace-nowrap font-semibold">
                  Total dos Planejamentos:
                </h1>
                <div className="flex-grow">
                  <Progress value={61.25} />
                </div>
              </div>
            </div>

            <div className="grid w-full grid-cols-2 gap-4">
              {plannings.map((planning) => (
                <Card
                  key={planning.id}
                  className="w-full rounded-lg bg-white p-4 shadow-sm"
                >
                  <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-2x1 flex items-center gap-2 font-bold">
                      <Pin className="h-4 w-4" />
                      {planning.title}
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
                  <CardContent className="space-y-1">
                    <span className="flex items-center gap-2 text-base font-semibold">
                      {planning.categoriesIcon} {planning.categories}
                    </span>
                    <span className="flex items-center justify-start gap-2 text-base font-semibold">
                      <span className="flex items-center gap-2">
                        <Crosshair className="h-4 w-4" />
                        {planning.value}
                      </span>
                      -
                      <span
                        className={
                          parseFloat(
                            planning.value.replace('R$', '').replace(',', '.'),
                          ) -
                            parseFloat(
                              planning.valueTransaction
                                .replace('R$', '')
                                .replace(',', '.'),
                            ) <
                          0
                            ? 'text-red-500'
                            : 'text-green-500'
                        }
                      >
                        R${' '}
                        {(
                          parseFloat(
                            planning.value.replace('R$', '').replace(',', '.'),
                          ) -
                          parseFloat(
                            planning.valueTransaction
                              .replace('R$', '')
                              .replace(',', '.'),
                          )
                        ).toFixed(2)}
                      </span>
                    </span>
                  </CardContent>

                  <CardFooter>
                    <Progress
                      value={parseFloat(
                        (
                          (parseFloat(
                            planning.valueTransaction
                              .replace('R$', '')
                              .replace(',', '.'),
                          ) /
                            parseFloat(
                              planning.value
                                .replace('R$', '')
                                .replace(',', '.'),
                            )) *
                          100
                        ).toFixed(2),
                      )}
                    />
                  </CardFooter>
                </Card>
              ))}
            </div>
          </>
        ) : (
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
            buttonText="Adicionar Novo Planejamento"
            dialogContent={<AddPlanning />}
          />
        )}
      </div>
    </>
  )
}
