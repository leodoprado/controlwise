import {
  Document,
  Page,
  pdf,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'
import { Clipboard, Info } from 'lucide-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

// Mock de dados
const mockData = [
  {
    type: 'Ação',
    description: 'PETR4',
    quantity: 100,
    value: 2500.0,
  },
  {
    type: 'Fundo Imobiliário',
    description: 'HGLG11',
    quantity: 50,
    value: 5000.0,
  },
]

// Estilos do relatório
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  table: {
    display: 'table',
    width: '100%',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    width: '25%',
    padding: 5,
    borderBottom: '1px solid #ccc',
  },
  header: {
    fontWeight: 'bold',
  },
})

// Componente do PDF
const IRPFReport = ({
  data,
  year,
}: {
  data: typeof mockData
  year: string
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>
          Declaração de Imposto de Renda - Pessoa Física ({year})
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Detalhamento de Ativos</Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.header]}>
            <Text style={styles.tableCol}>Tipo</Text>
            <Text style={styles.tableCol}>Descrição</Text>
            <Text style={styles.tableCol}>Quantidade</Text>
            <Text style={styles.tableCol}>Valor Total (R$)</Text>
          </View>
          {data.map((item, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableCol}>{item.type}</Text>
              <Text style={styles.tableCol}>{item.description}</Text>
              <Text style={styles.tableCol}>{item.quantity}</Text>
              <Text style={styles.tableCol}>
                {item.value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
)

export function WExportIRPF() {
  const [year, setYear] = useState(new Date().getFullYear().toString()) // Ano selecionado

  // Função para gerar e abrir o PDF
  const handleGeneratePDF = async () => {
    const blob = await pdf(<IRPFReport data={mockData} year={year} />).toBlob()
    const pdfUrl = URL.createObjectURL(blob)
    window.open(pdfUrl, '_blank')
  }

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
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant={'default'}
                  className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-md transition-shadow duration-300 hover:shadow-lg"
                >
                  Gerar Relatório
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle className="flex">
                  <Clipboard className="h-4 w-4" /> Filtros do Relatório
                </DialogTitle>
                <div className="mb-4">
                  <label htmlFor="year" className="block text-sm font-medium">
                    Ano do Relatório:
                  </label>
                  <select
                    id="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    {Array.from({ length: 5 }, (_, i) => (
                      <option
                        key={i}
                        value={(new Date().getFullYear() - i).toString()}
                      >
                        {new Date().getFullYear() - i}
                      </option>
                    ))}
                  </select>
                </div>
                <DialogFooter>
                  <Button onClick={handleGeneratePDF}>
                    Gerar e Visualizar
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
