import { TrendingDown } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthCanceledOrdersAmountCard() {
  return (
    <Card className="drop-shadow-md">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Despesas (mês)
        </CardTitle>
        <TrendingDown className="h-4 w-4 text-destructive" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">R$ 1630,12</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-destructive">-2%</span> em relação ao mês
          passado
        </p>
      </CardContent>
    </Card>
  )
}
