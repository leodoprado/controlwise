import { TrendingDown } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

interface CardExpensesProps {
  totalExpenses: string
  percentageExpenses: string
  isLoading: boolean
}

export function CardExpenses({
  totalExpenses,
  percentageExpenses,
  isLoading,
}: CardExpensesProps) {
  return (
    <Card className="drop-shadow-md">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Despesas (mês)
        </CardTitle>
        <TrendingDown className="h-4 w-4 text-destructive" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">
          <div className="flex items-center">
            R${' '}
            {isLoading ? (
              <Skeleton className="ml-2 inline-block h-8 w-32 rounded-md" />
            ) : (
              <>
                {parseFloat(totalExpenses).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                })}
              </>
            )}
          </div>
        </span>
        <p className="text-xs text-muted-foreground">
          {isLoading ? (
            <span className="inline-block align-middle">
              <Skeleton className="h-3 w-16 rounded-md" />
            </span>
          ) : (
            <span
              className={`inline-block align-middle ${
                parseFloat(percentageExpenses) > 0
                  ? 'text-destructive'
                  : parseFloat(percentageExpenses) < 0
                    ? 'text-primary'
                    : 'text-muted-foreground'
              }`}
            >
              {parseFloat(percentageExpenses) > 0 ? '+' : ''}
              {percentageExpenses}
            </span>
          )}
          <span className="align-middle"> em relação ao mês passado</span>
        </p>
      </CardContent>
    </Card>
  )
}
