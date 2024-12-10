import { api } from '@/lib/axios'

// Interfaces de tipos
interface ReportTransactionCategory {
  nome: string
  codIcone: number
  codColor: number
}

interface ReportTransaction {
  id: string
  valor: string
  descricao: string | null
  tipo: 'RECEITA' | 'DESPESA'
  data: string
  categoria: ReportTransactionCategory
}

interface GetReportByParametersResponse {
  dados: ReportTransaction[]
}

// Função para buscar relatórios com base nos parâmetros
export async function getReportByParameters({
  categoria,
  ano,
  mes,
}: {
  categoria: 'RECEITA' | 'DESPESA'
  ano: number
  mes?: number
}) {
  // Construção da query string dinâmica
  const params = new URLSearchParams({
    categoria,
    ano: ano.toString(),
    ...(mes ? { mes: mes.toString() } : {}), // Adiciona 'mes' apenas se definido
  })

  // Chamada à API com a query string
  const response = await api.get<GetReportByParametersResponse>(
    `/reports?${params.toString()}`,
  )

  return response.data
}
