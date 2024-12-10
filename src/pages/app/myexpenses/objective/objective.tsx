import { useQuery } from '@tanstack/react-query'
import {
  CalendarClock,
  Crosshair,
  Edit,
  Flag,
  HandCoins,
  Pin,
  Trash,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { getGoals } from '@/api/GET/get-goals'
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

export function EObjectivePage() {
  const { data: goals, isLoading: isLoadingGoals } = useQuery({
    queryKey: ['goals'],
    queryFn: getGoals,
  })

  return (
    <>
      <Helmet title="Objetivos" />

      <div className="w-full space-y-2.5">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Flag className="h-5 w-5" />
            <h1 className="whitespace-nowrap font-semibold">Objetivos</h1>
          </div>
        </div>

        <div className="grid w-full grid-cols-2 gap-4">
          {isLoadingGoals ? (
            <p>Carregando objetivos...</p>
          ) : !goals || goals.length === 0 ? (
            <p>Nenhum objetivo encontrado.</p>
          ) : (
            goals.map((goal) => {
              const formattedDate = goal.dataLimite
                ? new Date(goal.dataLimite).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                  })
                : 'Sem data definida'

              return (
                <Card
                  key={goal.id}
                  className="w-full rounded-lg bg-white p-4 shadow-sm"
                >
                  <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-2x1 flex items-center gap-2 font-bold">
                      <Pin className="h-4 w-4" />
                      {goal.titulo}
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
                      <CalendarClock className="h-4 w-4" /> {formattedDate}
                    </span>
                    <span className="flex items-center gap-2 text-base font-semibold">
                      <Crosshair className="h-4 w-4" />
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(goal.valorTotal)}
                    </span>
                    <span className="flex items-center gap-2 text-base font-semibold">
                      <HandCoins className="h-4 w-4" />
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(goal.valorAdicionado)}
                    </span>
                  </CardContent>
                  <CardFooter>
                    <Progress
                      value={parseFloat(
                        (
                          (goal.valorAdicionado / goal.valorTotal) *
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
