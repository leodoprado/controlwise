import { useQuery } from '@tanstack/react-query'
import {
  Crosshair,
  Edit,
  HelpCircle,
  Pin,
  Trash,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { getPlannings } from '@/api/GET/get-plannings'
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
import { useQueryKey } from '@/contexts/queryKeyContext'

import { getIconById } from '../../config/categories/mappingIconColor'
import { FilterCategories } from './filter-categories'

export function EPlanningPage() {
  const { currentKeyMonth } = useQueryKey()

  const { data: plannings, isLoading: isLoadingPlannings } = useQuery({
    queryKey: ['plannings', currentKeyMonth],
    queryFn: () => getPlannings(currentKeyMonth),
    staleTime: Infinity,
  })

  return (
    <>
      <Helmet title="Planejamentos" />

      <div className="w-full space-y-2.5">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <h1 className="whitespace-nowrap font-semibold">
              Filtros de Planejamentos:
            </h1>
            <FilterCategories />
          </div>
        </div>

        <div className="grid w-full grid-cols-2 gap-4">
          {isLoadingPlannings ? (
            <p>Carregando planejamentos...</p>
          ) : !plannings || plannings.length === 0 ? (
            <p>Nenhum planejamento encontrado.</p>
          ) : (
            plannings.map((planning) => {
              const IconComponent = getIconById(planning.categoria.codIcone)

              return (
                <Card
                  key={planning.id}
                  className="w-full rounded-lg bg-white p-4 shadow-sm"
                >
                  <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-2x1 flex items-center gap-2 font-bold">
                      <Pin className="h-4 w-4" />
                      {planning.titulo}
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
                      {planning.tipo === 'RECEITA' ? (
                        <>
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          Receita
                        </>
                      ) : (
                        <>
                          <TrendingDown className="h-4 w-4 text-red-500" />
                          Despesa
                        </>
                      )}
                    </span>
                    <span className="flex items-center gap-2 text-base font-semibold">
                      {IconComponent ? <IconComponent /> : <HelpCircle />}{' '}
                      {planning.categoria.nome}
                    </span>
                    <span className="flex items-center justify-start gap-2 text-base font-semibold">
                      <span className="flex items-center gap-2">
                        <Crosshair className={'h-4 w-4'} />
                        R$ {planning.valorTarget}
                      </span>
                      -
                      <span
                        className={`${
                          parseFloat(planning.valorTarget) -
                            parseFloat(planning.valorMovimentado) <
                          0
                            ? planning.tipo === 'RECEITA'
                              ? 'text-green-500'
                              : 'text-red-500'
                            : ''
                        }`}
                      >
                        R${' '}
                        {Math.abs(
                          parseFloat(planning.valorTarget) -
                            parseFloat(planning.valorMovimentado),
                        ).toFixed(2)}
                      </span>
                    </span>
                  </CardContent>

                  <CardFooter>
                    <Progress
                      value={parseFloat(
                        (
                          (parseFloat(planning.valorMovimentado) /
                            parseFloat(planning.valorTarget)) *
                          100
                        ).toFixed(2),
                      )}
                    />
                  </CardFooter>
                </Card>
              )
            })
          )}
        </div>
      </div>
    </>
  )
}
