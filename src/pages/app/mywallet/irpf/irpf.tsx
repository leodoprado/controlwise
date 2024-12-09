import { useQuery } from '@tanstack/react-query'
import { ChevronDown, Info } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { getAssetsYear } from '@/api/GET/get-assets-year'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

// Tipos
interface Asset {
  name: string
  ticker: string
  totalQuantity: number
  totalValue: number
}

interface AssetGroup {
  assetType: string
  assets: Asset[]
}

// Mapeamento de títulos por tipo de ativo
const assetTypeTitles: Record<string, string> = {
  ACAO: 'GRUPO 03 - Participações societárias / Código 01 - Ações',
  FII: 'GRUPO 07 - Fundos / Código 03 - Fundos de investimento imobiliário',
  CRIPTOMOEDA: 'GRUPO 08 - Criptoativos',
}

export function WExportIRPF() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [years, setYears] = useState<number[]>([])
  const [isPopoverOpen, setPopoverOpen] = useState(false)

  useEffect(() => {
    const currentYear = new Date().getFullYear()
    const yearRange = Array.from({ length: 4 }, (_, i) => currentYear - 3 + i)
    setYears(yearRange)
  }, [])

  const handleYearSelect = (year: number) => {
    setSelectedYear(year)
    setPopoverOpen(false)
  }

  const { data: assetsYear, isLoading: isLoadingAssetsYear } = useQuery({
    queryKey: ['assetsYearIRPF', selectedYear],
    queryFn: () => getAssetsYear(selectedYear.toString()),
  })

  const groupedAssets = assetsYear?.reduce(
    (groups: Record<string, Asset[]>, assetGroup: AssetGroup) => {
      if (!groups[assetGroup.assetType]) {
        groups[assetGroup.assetType] = []
      }
      groups[assetGroup.assetType].push(...assetGroup.assets)
      return groups
    },
    {},
  )

  return (
    <>
      <Helmet title="IRPF" />
      <div className="flex flex-col">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              Relatório IRPF{' '}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="ml-2 inline-flex cursor-pointer items-center">
                      <Info className="h-5 w-5 transition-colors hover:text-primary" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    align="center"
                    className="rounded-md bg-gray-800 p-2 text-center normal-case text-white shadow-lg"
                  >
                    <span>
                      Atenção! É de responsabilidade exclusiva do usuário a
                      conferência dos dados disponibilizados.
                    </span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="flex items-center gap-4">
              <label htmlFor="year-selector" className="text-sm font-bold">
                Ano de Referência:
              </label>
              <Popover open={isPopoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button
                    id="year-selector"
                    variant="secondary"
                    role="combobox"
                    className="flex w-[140px] items-center justify-center gap-1 rounded-full border font-semibold"
                  >
                    {selectedYear} <ChevronDown className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-2">
                  <div className="flex flex-col gap-2">
                    {years.map((year) => (
                      <Button
                        key={year}
                        variant={year === selectedYear ? 'default' : 'ghost'}
                        className="w-full text-center"
                        onClick={() => handleYearSelect(year)}
                      >
                        {year}
                      </Button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <Separator className="mt-4" />

            {isLoadingAssetsYear ? (
              <p className="mt-4 text-center text-sm font-medium text-gray-500">
                Carregando dados...
              </p>
            ) : !groupedAssets || Object.keys(groupedAssets).length === 0 ? (
              <p className="mt-4 text-center text-sm font-medium text-gray-500">
                Nenhum dado disponível para o ano selecionado.
              </p>
            ) : (
              groupedAssets &&
              Object.entries(groupedAssets).map(([assetType, assets]) => (
                <div className="mt-4" key={assetType}>
                  <h2 className="mb-2 text-sm font-bold uppercase">
                    {assetTypeTitles[assetType] || assetType}
                  </h2>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-1/3 text-left">Nome</TableHead>
                        <TableHead className="w-1/6 text-left">
                          Ticker
                        </TableHead>
                        <TableHead className="w-1/6 text-right">
                          Quantidade Total
                        </TableHead>
                        <TableHead className="w-1/3 text-right">
                          Valor Total
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {assets.map((asset, index) => (
                        <TableRow key={index}>
                          <TableCell className="w-1/3">{asset.name}</TableCell>
                          <TableCell className="w-1/6">
                            {asset.ticker}
                          </TableCell>
                          <TableCell className="w-1/6 text-right">
                            {asset.totalQuantity}
                          </TableCell>
                          <TableCell className="w-1/3 text-right">
                            {asset.totalValue.toLocaleString('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            })}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </>
  )
}
