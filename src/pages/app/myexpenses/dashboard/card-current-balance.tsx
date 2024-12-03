import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

interface CardCurrentBalance {
  totalBalance: string
  percentageBalance: string
  isLoading: boolean
}

export function CardCurrentBalance({
  totalBalance,
  percentageBalance,
  isLoading,
}: CardCurrentBalance) {
  return (
    <Card className="drop-shadow-md">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Saldo Atual (R - D)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">
          <div className="flex items-center">
            R${' '}
            {isLoading ? (
              <Skeleton className="ml-2 inline-block h-8 w-32 rounded-md" />
            ) : (
              <>
                {parseFloat(totalBalance).toLocaleString('pt-BR', {
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
                parseFloat(percentageBalance) < 0
                  ? 'text-destructive'
                  : parseFloat(percentageBalance) > 0
                    ? 'text-primary'
                    : 'text-muted-foreground'
              }`}
            >
              {parseFloat(percentageBalance) > 0 ? '+' : ''}
              {percentageBalance}
            </span>
          )}
          <span className="align-middle"> em relação ao mês passado</span>
        </p>
      </CardContent>
    </Card>
  )
}
