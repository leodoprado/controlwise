import {
  Document,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'
import { useQuery } from '@tanstack/react-query'
import { Check, ChevronDown, Info } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { getReportByParameters } from '@/api/GET/get-dados-reports'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

import { PopoverMonthReference } from './month-reference'

const options = [
  { value: 'DESPESA', label: 'Categorias de Despesas' },
  { value: 'RECEITA', label: 'Categorias de Receitas' },
]

// Estilos para o PDF
const styles = StyleSheet.create({
  page: { padding: 30 },
  title: { fontSize: 18, marginBottom: 10, fontWeight: 'bold' },
  section: { marginBottom: 20 },
  table: { display: 'flex', flexDirection: 'column', marginBottom: 10 },
  tableRow: {
    flexDirection: 'row',
    borderBottom: '1px solid #ddd',
    padding: 5,
  },
  tableCell: { flex: 1, fontSize: 12 },
  headerCell: { fontWeight: 'bold', backgroundColor: '#f3f3f3' },
})

// Tipos
interface ReportData {
  id: string
  descricao: string | null
  valor: number // Deve ser number para evitar erros de renderização
  data: string
}

// Componente de preview do relatório
const ReportPreview = ({
  data,
  selectedCategory,
}: {
  data: ReportData[]
  selectedCategory: 'RECEITA' | 'DESPESA'
}) => {
  if (!data || data.length === 0) {
    return <p>Sem dados disponíveis para gerar o relatório.</p>
  }

  return (
    <PDFViewer width="100%" height="600">
      <Document>
        <Page style={styles.page}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <Text style={styles.title}>
              Relatório de Finanças -{' '}
              {selectedCategory === 'RECEITA' ? 'Receitas' : 'Despesas'}
            </Text>
          </View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.headerCell]}>
                Categoria
              </Text>
              <Text style={[styles.tableCell, styles.headerCell]}>
                Descrição
              </Text>
              <Text style={[styles.tableCell, styles.headerCell]}>Valor</Text>
              <Text style={[styles.tableCell, styles.headerCell]}>Data</Text>
            </View>
            {data.map((item) => (
              <View key={item.id} style={styles.tableRow}>
                <Text style={styles.tableCell}>{item.id}</Text>
                <Text style={styles.tableCell}>{item.descricao || '-'}</Text>
                <Text style={styles.tableCell}>
                  {item.valor.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </Text>
                <Text style={styles.tableCell}>
                  {new Date(item.data).toLocaleDateString('pt-BR')}
                </Text>
              </View>
            ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  )
}

export function EReportsPage() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
  const [selectedMonth, setSelectedMonth] = useState<number | undefined>(
    new Date().getMonth() + 1,
  )
  const [years, setYears] = useState<number[]>([])
  const [isPopoverOpen, setPopoverOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<
    'RECEITA' | 'DESPESA'
  >('DESPESA')

  const [queryParams, setQueryParams] = useState<{
    categoria: 'RECEITA' | 'DESPESA'
    ano: number
    mes?: number
  } | null>(null)

  useEffect(() => {
    const currentYear = new Date().getFullYear()
    const yearRange = Array.from({ length: 4 }, (_, i) => currentYear - 3 + i)
    setYears(yearRange)
  }, [])

  const handleYearSelect = (year: number) => {
    setSelectedYear(year)
    setPopoverOpen(false)
  }

  const handleCheckboxChange = () => {
    setIsCheckboxChecked((prev) => {
      if (!prev) {
        setSelectedMonth(new Date().getMonth() + 1)
      } else {
        setSelectedMonth(undefined)
      }
      return !prev
    })
  }

  const handleGeneratePreview = () => {
    setQueryParams({
      categoria: selectedCategory as 'RECEITA' | 'DESPESA',
      ano: selectedYear,
      mes: isCheckboxChecked ? selectedMonth : undefined,
    })
    refetch()
  }

  const { data, isLoading, refetch } = useQuery<ReportData[]>({
    queryKey: ['getDadosReports', queryParams],
    queryFn: async () => {
      if (queryParams) {
        const response = await getReportByParameters(queryParams)
        return response.dados.map((item) => ({
          id: item.categoria.nome,
          descricao: item.descricao,
          valor: parseFloat(item.valor),
          data: item.data,
        }))
      }
      return []
    },
    enabled: false, // Desabilita execução automática
  })

  return (
    <>
      <Helmet title="Relatórios" />
      <div className="flex flex-col">
        <Card>
          <CardHeader>
            <CardTitle>
              Relatório de Finanças
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
            <div className="mb-5 flex items-center space-x-4">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant={
                      selectedCategory === 'DESPESA' ? 'destructive' : 'default'
                    }
                    role="combobox"
                    aria-expanded={open}
                    className="flex w-[220px] items-center justify-between rounded-full border font-bold"
                  >
                    {options.find((option) => option.value === selectedCategory)
                      ?.label || 'Selecione uma categoria...'}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[220px] p-0">
                  <Command>
                    <CommandList>
                      <CommandGroup className="p-0">
                        {options.map((option) => (
                          <CommandItem
                            key={option.value}
                            value={option.value}
                            onSelect={(currentValue) => {
                              setSelectedCategory(
                                currentValue as 'RECEITA' | 'DESPESA',
                              )
                              setOpen(false)
                            }}
                            className="cursor-pointer p-3"
                          >
                            <Check
                              className={cn(
                                'mr-2 h-4 w-4',
                                selectedCategory === option.value
                                  ? 'opacity-100'
                                  : 'opacity-0',
                              )}
                            />
                            {option.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
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
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="agree"
                  checked={isCheckboxChecked}
                  onCheckedChange={handleCheckboxChange}
                />
                <Label htmlFor="agree" className="font-bold">
                  Mês de Referência:
                </Label>
              </div>
              {isCheckboxChecked && (
                <PopoverMonthReference
                  onSelectMonth={(month) => setSelectedMonth(month)}
                />
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="flex w-[140px] items-center justify-center gap-1 rounded-full border font-bold"
              onClick={handleGeneratePreview}
            >
              Gerar Preview
            </Button>
          </CardFooter>
        </Card>
        {isLoading ? (
          <p className="mt-4 text-center">Carregando...</p>
        ) : data && data.length > 0 ? (
          <div className="mt-4">
            <ReportPreview data={data} selectedCategory={selectedCategory} />
          </div>
        ) : (
          <p className="mt-4 text-center">Sem dados disponíveis</p>
        )}
      </div>
    </>
  )
}
