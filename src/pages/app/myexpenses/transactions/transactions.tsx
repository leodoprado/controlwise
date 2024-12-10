import { useQuery } from '@tanstack/react-query'
import {
  Check,
  Edit,
  HelpCircle,
  Trash,
  TrendingDown,
  TrendingUp,
  X,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { getTransactionMonth } from '@/api/GET/get-transactions'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useQueryKey } from '@/contexts/queryKeyContext'

import { getIconById } from '../../config/categories/mappingIconColor'
import { CancelTransaction } from './cancel-transaction'
import { DeleteTransaction } from './delete-transaction'
import { ExecuteTransaction } from './execute-transaction'

export function ETransactionsPage() {
  const { currentKeyMonth } = useQueryKey()

  const { data: transactions, isLoading: isLoadingTransactions } = useQuery({
    queryKey: ['transactions', currentKeyMonth],
    queryFn: () => getTransactionMonth(currentKeyMonth),
    staleTime: Infinity,
  })

  return (
    <>
      <Helmet title="Movimentações" />

      <div className="space-y-2.5">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-slate-500" />
            <h1 className="font-semibold">Movimentações Agendadas</h1>
          </div>

          <div className="mb-2 rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/6 font-semibold">Tipo</TableHead>
                  <TableHead className="w-1/6 font-semibold">
                    Categoria
                  </TableHead>
                  <TableHead className="w-1/5 font-semibold">
                    Realizado em
                  </TableHead>
                  <TableHead className="w-1/6 font-semibold">Valor</TableHead>
                  <TableHead className="w-1/5 font-semibold">Status</TableHead>
                  <TableHead className="mr-2 flex items-center justify-end font-semibold">
                    Ações
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoadingTransactions ? (
                  <TableRow>
                    <TableCell colSpan={6}>
                      <div className="flex w-full animate-pulse justify-center">
                        <Skeleton className="h-6 w-full" />
                      </div>
                    </TableCell>
                  </TableRow>
                ) : transactions?.scheduledTransactions.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6}>
                      <div className="flex justify-center py-4 text-muted-foreground">
                        Nenhum registro de Movimentações Agendadas...
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  transactions?.scheduledTransactions.map((transaction) => {
                    const IconComponent = getIconById(
                      transaction.categoria.codIcone,
                    )

                    return (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-mono text-xs font-medium">
                          <div className="flex items-center gap-2">
                            {transaction.tipo === 'RECEITA' ? (
                              <>
                                <TrendingUp className="h-4 w-4 text-green-500" />
                                Receita
                              </>
                            ) : (
                              <>
                                <TrendingDown className="h-4 w-4 text-red-500" />
                                Despesa
                              </>
                            )}
                          </div>
                        </TableCell>

                        <TableCell className="font-mono text-xs font-medium">
                          <div className="flex items-center gap-2">
                            {IconComponent ? <IconComponent /> : <HelpCircle />}
                            {transaction.categoria.nome}
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {transaction.data}
                        </TableCell>
                        <TableCell
                          className={`font-medium ${transaction.tipo === 'RECEITA' ? 'text-green-500' : 'text-red-500'}`}
                        >
                          R$ {''}
                          {transaction.valor}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span
                              className={'h-2 w-2 rounded-full bg-slate-500'}
                            />
                            <span className="font-medium text-muted-foreground">
                              {transaction.status}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="flex justify-end gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="xs"
                                className="flex items-center gap-1"
                              >
                                <Check className="h-4 w-4 text-primary" />{' '}
                                Executar
                              </Button>
                            </DialogTrigger>
                            <ExecuteTransaction />
                          </Dialog>

                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="xs"
                                className="flex items-center gap-1"
                              >
                                <X className="h-4 w-4 text-destructive" />{' '}
                                Cancelar
                              </Button>
                            </DialogTrigger>
                            <CancelTransaction />
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    )
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </div>
        <div>
          <div className="mb-2 mt-9 flex items-center gap-2">
            <span className={'h-2 w-2 rounded-full bg-green-500'} />
            <span className={'h-2 w-2 rounded-full bg-red-500'} />
            <h1 className="font-semibold">Histórico de Movimentações</h1>
          </div>

          <div className="mb-2 rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/6 font-semibold">Tipo</TableHead>
                  <TableHead className="w-1/6 font-semibold">
                    Categoria
                  </TableHead>
                  <TableHead className="w-1/5 font-semibold">
                    Realizado em
                  </TableHead>
                  <TableHead className="w-1/6 font-semibold">Valor</TableHead>
                  <TableHead className="w-1/5 font-semibold">Status</TableHead>
                  <TableHead className="mr-2 flex items-center justify-end font-semibold">
                    Ações
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoadingTransactions ? (
                  <TableRow>
                    <TableCell colSpan={6}>
                      <div className="flex w-full animate-pulse justify-center">
                        <Skeleton className="h-6 w-full" />
                      </div>
                    </TableCell>
                  </TableRow>
                ) : transactions?.transactionHistory.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6}>
                      <div className="flex justify-center py-4 text-muted-foreground">
                        Nenhum registro de Movimentações...
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  transactions?.transactionHistory.map((transactionExec) => {
                    const IconComponent = getIconById(
                      transactionExec.categoria.codIcone,
                    )

                    return (
                      <TableRow key={transactionExec.id}>
                        <TableCell className="font-mono text-xs font-medium">
                          <div className="flex items-center gap-2">
                            {transactionExec.tipo === 'RECEITA' ? (
                              <>
                                <TrendingUp className="h-4 w-4 text-green-500" />
                                Receita
                              </>
                            ) : (
                              <>
                                <TrendingDown className="h-4 w-4 text-red-500" />
                                Despesa
                              </>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="font-mono text-xs font-medium">
                          <div className="flex items-center gap-2">
                            {IconComponent ? <IconComponent /> : <HelpCircle />}
                            {transactionExec.categoria.nome}
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {transactionExec.data}
                        </TableCell>
                        <TableCell
                          className={`font-medium ${transactionExec.tipo === 'RECEITA' ? 'text-green-500' : 'text-red-500'}`}
                        >
                          R$ {''}
                          {transactionExec.valor}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span
                              className={`h-2 w-2 rounded-full ${transactionExec.status === 'EXECUTADO' ? 'bg-green-500' : 'bg-red-500'}`}
                            />
                            <span className="font-medium text-muted-foreground">
                              {transactionExec.status}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="flex justify-end gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="xs"
                                className="flex items-center"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                          </Dialog>

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
                            <DeleteTransaction />
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    )
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  )
}
