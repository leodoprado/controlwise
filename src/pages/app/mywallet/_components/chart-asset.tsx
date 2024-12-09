'use client'

import { useQuery } from '@tanstack/react-query'
import { Cell, Pie, PieChart } from 'recharts'

import { getAssetsSummary } from '@/api/GET/get-assets-summary'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

// Definição da tipagem para os dados retornados pela query
interface AssetSummary {
  assetType: string
  totalEquity: number
}

// Mapeamento estático de cores para cada tipo de ativo
const assetTypeColors: Record<string, string> = {
  ACAO: '#60A5FA',
  FII: '#F97316',
  CRIPTOMOEDA: '#FACC15',
  STOCK: '#C084FC',
  BDR: '#4F46E5',
}

// Mapeamento estático de labels para os tipos de ativo
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

  const chartData =
    assetSummary?.map((item) => ({
      assetType: item.assetType,
      totalEquity: item.totalEquity,
      fill: assetTypeColors[item.assetType] || 'hsl(var(--chart-default))', // Cor padrão, caso o tipo não esteja no mapeamento
      label: assetTypeLabels[item.assetType] || 'Desconhecido', // Label amigável
    })) || []

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Ativos na Carteira</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoadingSummary ? (
          <p>Carregando...</p>
        ) : chartData.length === 0 ? (
          <p>Nenhum dado disponível.</p>
        ) : (
          <ChartContainer
            config={chartConfig}
            className="mx-auto h-[350px] w-[100%]"
          >
            <PieChart width={300} height={300}>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
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
