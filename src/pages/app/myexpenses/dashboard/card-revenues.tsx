import { TrendingUp } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

interface CardRevenuesProps {
  totalRevenues: string
  percentageRevenues: string
  isLoading: boolean
}

export function CardRevenues({
  totalRevenues,
  percentageRevenues,
  isLoading,
}: CardRevenuesProps) {
  return (
    <Card className="drop-shadow-md">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receitas (mês)
        </CardTitle>
        <TrendingUp className="mr-2 h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">
          <div className="flex items-center">
            R${' '}
            {isLoading ? (
              <Skeleton className="ml-2 inline-block h-8 w-32 rounded-md" />
            ) : (
              <>
                {parseFloat(totalRevenues).toLocaleString('pt-BR', {
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
                parseFloat(percentageRevenues) < 0
                  ? 'text-destructive'
                  : parseFloat(percentageRevenues) > 0
                    ? 'text-primary'
                    : 'text-muted-foreground'
              }`}
            >
              {parseFloat(percentageRevenues) > 0 ? '+' : ''}
              {percentageRevenues}
            </span>
          )}
          <span className="align-middle"> em relação ao mês passado</span>
        </p>
      </CardContent>
    </Card>
  )
}
