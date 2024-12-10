import { useQuery } from '@tanstack/react-query'
import { Cell, Pie, PieChart, TooltipProps } from 'recharts'

import { getAssetsSummary } from '@/api/GET/get-assets-summary'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from '@/components/ui/chart'

interface AssetSummary {
  assetType: string
  totalEquity: number
}

const assetTypeColors: Record<string, string> = {
  ACAO: '#60A5FA',
  FII: '#F97316',
  CRIPTOMOEDA: '#FACC15',
  STOCK: '#C084FC',
  BDR: '#4F46E5',
}

const assetTypeLabels: Record<string, string> = {
  ACAO: 'Ações',
  FII: 'FIIs',
  CRIPTOMOEDA: 'Criptomoedas',
  STOCK: 'Stocks',
  BDR: 'BDRs',
}

const chartConfig = {
  visitors: {
    label: 'Total',
  },
} satisfies ChartConfig

export function ChartAsset() {
  const { data: assetSummary, isLoading: isLoadingSummary } = useQuery<
    AssetSummary[]
  >({
    queryKey: ['assetsSummary'],
    queryFn: getAssetsSummary,
  })

  const totalEquity =
    assetSummary?.reduce((acc, item) => acc + item.totalEquity, 0) || 0

  const chartData =
    assetSummary?.map((item) => ({
      assetType: item.assetType,
      totalEquity: item.totalEquity,
      fill: assetTypeColors[item.assetType] || 'hsl(var(--chart-default))',
      label: assetTypeLabels[item.assetType] || 'Desconhecido',
    })) || []

  const renderTooltipContent = (data: TooltipProps<number, string>) => {
    if (!data.payload || data.payload.length === 0) return null

    const entry = data.payload[0].payload
    const percentage = ((entry.totalEquity / totalEquity) * 100).toFixed(1)

    return (
      <div className="rounded bg-white p-2 text-sm shadow">
        <p className="flex items-center">
          <span
            className="mr-2 h-3 w-3 rounded-full"
            style={{ backgroundColor: entry.fill }}
          ></span>
          <strong>{entry.label}</strong>
        </p>
        <p>
          Valor:{' '}
          {entry.totalEquity.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
        <p>Porcentagem: {percentage}%</p>
      </div>
    )
  }

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Ativos na Carteira</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoadingSummary ? (
          <p className="text-start text-sm font-medium text-gray-500">
            Carregando dados...
          </p>
        ) : chartData.length === 0 ? (
          <p className="text-start text-sm font-medium text-gray-500">
            Nenhum dado disponível.
          </p>
        ) : (
          <ChartContainer
            config={chartConfig}
            className="mx-auto h-[350px] w-[100%]"
          >
            <PieChart width={300} height={300}>
              <ChartTooltip cursor={false} content={renderTooltipContent} />
              <Pie
                data={chartData}
                dataKey="totalEquity"
                nameKey="label"
                innerRadius={80}
                outerRadius={160}
                stroke="white"
                strokeWidth={3}
                isAnimationActive={false}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  )
}
