import { useQuery } from '@tanstack/react-query'

import { getAssetsMovement } from '@/api/GET/get-assets-movement'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableCell, TableHead, TableRow } from '@/components/ui/table'

import { ToAddAsset } from '../_components/to-add-asset'

type AssetMovement = {
  id: string
  type: string
  asset: string
  ticker: string
  quantity: number
  averagePrice: number
  balance: number
  currentPrice?: number
  profitability?: number
}

type MarketPriceResult = {
  symbol: string
  regularMarketPrice: number
}

const API_TOKEN = 'a1tcbpjoLgqRTpUhyLy4jN'

// Função para buscar a cotação de um único ticker na brapi
async function fetchMarketPrice(ticker: string): Promise<number> {
  const response = await fetch(
    `https://brapi.dev/api/quote/${ticker}?token=${API_TOKEN}`,
  )
  const data: { results: MarketPriceResult[] } = await response.json()

  if (data.results && data.results.length > 0) {
    return data.results[0].regularMarketPrice
  }
  return 0 // Retorna 0 se não houver cotação
}

// Função para buscar cotações para todos os tickers, uma por vez
async function fetchMarketPricesSequential(
  tickers: string[],
): Promise<Record<string, number>> {
  const prices: Record<string, number> = {}

  for (const ticker of tickers) {
    prices[ticker] = await fetchMarketPrice(ticker)
  }

  return prices
}

// Mapa para nomes amigáveis
const typeLabels: Record<string, string> = {
  ACAO: 'Ações',
  FII: 'Fundos Imobiliários',
  CRIPTOMOEDA: 'Criptomoedas',
  BDR: 'BDRs',
  STOCK: 'Stocks',
}

export function AccordionAssets() {
  const { data: assets, isLoading } = useQuery({
    queryKey: ['assets-movement'],
    queryFn: async (): Promise<AssetMovement[]> => {
      const response = await getAssetsMovement()
      return response.map((item) => ({
        id: item.assetId,
        type: item.tipo,
        asset: item.nome,
        ticker: item.ticker,
        quantity: item.quantidade ?? 0,
        averagePrice: item.valorMedio ?? 0,
        balance: (item.quantidade ?? 0) * (item.valorMedio ?? 0),
      }))
    },
  })

  const { data: marketPrices, isLoading: isLoadingPrices } = useQuery({
    queryKey: ['market-prices'],
    queryFn: async () => {
      const tickers = assets?.map((asset) => asset.ticker) || []
      return fetchMarketPricesSequential(tickers)
    },
    enabled: !!assets, // Ativa apenas quando os ativos forem carregados
  })

  if (isLoading || isLoadingPrices) {
    return <div>Carregando Ativos...</div>
  }

  const assetsWithPrices = assets?.map((asset) => {
    const currentPrice = marketPrices?.[asset.ticker] || 0
    const profitability =
      ((currentPrice - asset.averagePrice) / asset.averagePrice) * 100

    return {
      ...asset,
      currentPrice,
      profitability,
    }
  })

  const groupedAssets = (assetsWithPrices || []).reduce<
    Record<string, AssetMovement[]>
  >((acc, asset) => {
    if (!acc[asset.type]) {
      acc[asset.type] = []
    }
    acc[asset.type].push(asset)
    return acc
  }, {})

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Ativos</CardTitle>
        <ToAddAsset />
      </CardHeader>

      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {Object.entries(groupedAssets).map(([type, movements]) => (
            <AccordionItem key={type} value={type}>
              <AccordionTrigger className="text-lg font-semibold">
                {typeLabels[type] || type}
              </AccordionTrigger>
              <AccordionContent>
                <Table>
                  <TableRow>
                    <TableHead className="font-semibold">Ativo</TableHead>
                    <TableHead className="font-semibold">Ticker</TableHead>
                    <TableHead className="font-semibold">Quantidade</TableHead>
                    <TableHead className="font-semibold">Preço Médio</TableHead>
                    <TableHead className="font-semibold">
                      Cotação Atual
                    </TableHead>
                    <TableHead className="font-semibold">
                      Rentabilidade (%)
                    </TableHead>
                  </TableRow>
                  {movements.map((movement) => (
                    <TableRow key={movement.id}>
                      <TableCell>{movement.asset}</TableCell>
                      <TableCell>{movement.ticker}</TableCell>
                      <TableCell>{movement.quantity}</TableCell>
                      <TableCell>
                        {movement.averagePrice.toFixed(2) || 'N/A'}
                      </TableCell>
                      <TableCell>
                        {movement.currentPrice?.toFixed(2) || 'N/A'}
                      </TableCell>
                      <TableCell
                        className={
                          movement.profitability
                            ? movement.profitability > 0
                              ? 'text-green-500'
                              : 'text-red-500'
                            : ''
                        }
                      >
                        {movement.profitability?.toFixed(2) || 'N/A'}%
                      </TableCell>
                    </TableRow>
                  ))}
                </Table>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
