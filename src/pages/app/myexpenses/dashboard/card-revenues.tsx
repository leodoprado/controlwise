import { TrendingUp } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function CardRevenues() {
  return (
    <Card className="drop-shadow-md">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receitas (mês)
        </CardTitle>
        <TrendingUp className="mr-2 h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">R$ 2950,45</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-400">+6%</span> em relação ao mês
          passado
        </p>
      </CardContent>
    </Card>
  )
}
