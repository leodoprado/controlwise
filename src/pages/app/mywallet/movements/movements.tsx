import { useQuery } from '@tanstack/react-query'
import { Trash } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { getAllMovements } from '@/api/GET/get-all-movements'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const investmentTypeLabels: Record<string, string> = {
  ACAO: 'Ações',
  FII: 'FIIs',
  CRIPTOMOEDA: 'Criptomoedas',
  STOCK: 'Stocks',
  BDR: 'BDRs',
}

export function WMovementsPage() {
  const { data: allMovements, isLoading: isLoadingAllMovements } = useQuery({
    queryKey: ['all-movements'],
    queryFn: getAllMovements,
  })

  return (
    <>
      <Helmet title="Lançamentos" />

      <div className="">
        <Card>
          <CardHeader className="flex items-start justify-between">
            <CardTitle>Lançamentos</CardTitle>
            <div className="flex items-center gap-4">
              <CardDescription className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Compra
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  Venda
                </div>
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            {isLoadingAllMovements ? (
              <p>Carregando movimentações...</p>
            ) : !allMovements || allMovements.length === 0 ? (
              <p>Nenhuma movimentação encontrada.</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">
                      Tipo de Investimento
                    </TableHead>
                    <TableHead className="font-semibold">Ativo</TableHead>
                    <TableHead className="font-semibold">
                      Tipo de Ordem
                    </TableHead>
                    <TableHead className="font-semibold">Quantidade</TableHead>
                    <TableHead className="font-semibold">
                      Preço Unitário
                    </TableHead>
                    <TableHead className="font-semibold">Valor Total</TableHead>
                    <TableHead className="font-semibold">
                      Data de Negociação
                    </TableHead>
                    <TableHead className="font-semibold">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                {allMovements.map((movement) => (
                  <TableRow key={movement.movementId}>
                    <TableCell>
                      {investmentTypeLabels[movement.tipo] || movement.tipo}
                    </TableCell>
                    <TableCell className="flex items-center gap-2">
                      {movement.tipoMovimento === 'COMPRA' ? (
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                      ) : (
                        <span className="h-2 w-2 rounded-full bg-red-500" />
                      )}
                      {movement.ticker}
                    </TableCell>
                    <TableCell>
                      {movement.tipoMovimento === 'COMPRA' ? 'Compra' : 'Venda'}
                    </TableCell>
                    <TableCell>{movement.quantidade}</TableCell>
                    <TableCell>
                      {movement.valorUnitario.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </TableCell>
                    <TableCell>
                      {movement.valorTotal.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </TableCell>
                    <TableCell>
                      {new Date(movement.data).toLocaleDateString('pt-BR')}
                    </TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="xs"
                            className="flex items-center"
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent></DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  )
}
