import { Dialog, DialogTrigger } from '@radix-ui/react-dialog'
import {
  Car,
  Check,
  Edit,
  Home,
  Info,
  Menu,
  Plus,
  Trash,
  TrendingDown,
  TrendingUp,
  Wallet,
  X,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import transaction from '@/assets/nc-transactio.svg'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { DialogContent } from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
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
import { NoContent } from '@/pages/no-content'

import {
  AddTransaction,
  AddTransactionDialog,
} from '../_components/add-transaction'
import { FilterTransaction } from './filter-transaction'

// Simulando os dados como se fossem de um banco de dados
const transactions = [
  {
    id: 1,
    type: 'Despesa',
    category: 'Casa',
    date: '19/09/2024',
    value: 'R$ 149,90',
    status: 'Pendente',
    statusColor: 'bg-slate-500',
    icon: <TrendingDown className="h-4 w-4 text-red-500" />,
    categoryIcon: <Home className="h-4 w-4" />,
    color: 'text-red-500',
  },
  {
    id: 2,
    type: 'Receita',
    category: 'Salário',
    date: '18/09/2024',
    value: 'R$ 89,90',
    status: 'Executado',
    statusColor: 'bg-green-500',
    icon: <TrendingUp className="h-4 w-4 text-green-500" />,
    categoryIcon: <Wallet className="h-4 w-4" />,
    color: 'text-green-500',
  },
  {
    id: 3,
    type: 'Despesa',
    category: 'Carro',
    date: '21/09/2024',
    value: 'R$ 112,90',
    status: 'Cancelado',
    statusColor: 'bg-red-500',
    icon: <TrendingDown className="h-4 w-4 text-red-500" />,
    categoryIcon: <Car className="h-4 w-4" />,
    color: 'text-gray-500',
  },
]

export function ETransactionsPage() {
  return (
    <>
      <Helmet title="Movimentações" />

      <div className="space-y-2.5">
        {transactions.length > 0 ? (
          <>
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className={'h-2 w-2 rounded-full bg-slate-500'} />
                <h1 className="font-semibold">Movimentações Agendadas</h1>
                <FilterTransaction />
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/6">Tipo</TableHead>
                      <TableHead className="w-1/6">Categoria</TableHead>
                      <TableHead className="w-1/5">Realizado em</TableHead>
                      <TableHead className="w-1/6">Valor</TableHead>
                      <TableHead className="w-1/5">Status</TableHead>
                      <TableHead className="mr-2 flex items-center justify-end">
                        Ações
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions
                      .filter(
                        (transaction) => transaction.status === 'Pendente',
                      )
                      .map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell className="font-mono text-xs font-medium">
                            <div className="flex items-center gap-2">
                              {transaction.icon}
                              {transaction.type}
                            </div>
                          </TableCell>
                          <TableCell className="font-mono text-xs font-medium">
                            <div className="flex items-center gap-2">
                              {transaction.categoryIcon}
                              {transaction.category}
                            </div>
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {transaction.date}
                          </TableCell>
                          <TableCell
                            className={`font-medium ${transaction.color}`}
                          >
                            {transaction.value}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <span
                                className={`h-2 w-2 rounded-full ${transaction.statusColor}`}
                              />
                              <span className="font-medium text-muted-foreground">
                                {transaction.status}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="flex justify-end gap-2">
                            <Button
                              variant="outline"
                              size="xs"
                              className="flex items-center gap-1"
                            >
                              <Check className="h-4 w-4 text-primary" />{' '}
                              Executar
                            </Button>
                            <Button
                              variant="outline"
                              size="xs"
                              className="flex items-center gap-1"
                            >
                              <X className="h-4 w-4 text-destructive" />{' '}
                              Cancelar
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            <div>
              <div className="mb-2 mt-9 flex items-center gap-2">
                <span className={'h-2 w-2 rounded-full bg-green-500'} />
                <span className={'h-2 w-2 rounded-full bg-red-500'} />
                <h1 className="font-semibold">Histórico de Movimentações</h1>
                <FilterTransaction />
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/6">Tipo</TableHead>
                      <TableHead className="w-1/6">Categoria</TableHead>
                      <TableHead className="w-1/5">Realizado em</TableHead>
                      <TableHead className="w-1/6">Valor</TableHead>
                      <TableHead className="w-1/5">Status</TableHead>
                      <TableHead className="mr-2 flex items-center justify-end">
                        Ações
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions
                      .filter(
                        (transaction) => transaction.status !== 'Pendente',
                      )
                      .map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell className="font-mono text-xs font-medium">
                            <div className="flex items-center gap-2">
                              {transaction.icon}
                              {transaction.type}
                            </div>
                          </TableCell>
                          <TableCell className="font-mono text-xs font-medium">
                            <div className="flex items-center gap-2">
                              {transaction.categoryIcon}
                              {transaction.category}
                            </div>
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {transaction.date}
                          </TableCell>
                          <TableCell
                            className={`font-medium ${transaction.color}`}
                          >
                            {transaction.value}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <span
                                className={`h-2 w-2 rounded-full ${transaction.statusColor}`}
                              />
                              <span className="font-medium text-muted-foreground">
                                {transaction.status}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="flex justify-end gap-2">
                            <Button
                              variant="outline"
                              size="xs"
                              className="flex items-center"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="xs"
                              className="flex items-center"
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </>
        ) : (
          <div>
            <NoContent
              contentTitle="Ops! Sem movimentações registradas."
              imageSrc={transaction}
              tooltipContent={
                <>
                  Aqui você registra e visualiza novas movimentações.
                  <br />
                  Fique por dentro de todas suas Receitas e Despesas.
                </>
              }
              buttonText="Adicionar Nova Movimentação"
              dialogContent={<AddTransaction />}
            ></NoContent>
          </div>
        )}
      </div>
    </>
  )
}
