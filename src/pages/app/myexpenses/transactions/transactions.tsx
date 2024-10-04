import { Dialog, DialogTrigger } from '@radix-ui/react-dialog'
import {
  Edit,
  Info,
  Menu,
  Plus,
  Trash,
  TrendingDown,
  TrendingUp,
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

// Simulando os dados como se fossem de um banco de dados
const transactions = [
  /* {
    
    id: 1,
    type: 'Despesa',
    category: 'Casa',
    date: '19/09/2024',
    value: 'R$ 149,90',
    status: 'Pendente',
    statusColor: 'bg-slate-400',
    icon: <TrendingDown className="h-4 w-4 text-red-500" />,
    color: 'text-red-500',
  },
  {
    id: 2,
    type: 'Receita',
    category: 'Salário',
    date: '18/09/2024',
    value: 'R$ 89,90',
    status: 'Executado',
    statusColor: 'bg-green-400',
    icon: <TrendingUp className="h-4 w-4 text-green-500" />,
    color: 'text-green-500',
  },
  {
    id: 3,
    type: 'Despesa',
    category: 'Carro',
    date: '21/09/2024',
    value: 'R$ 112,90',
    status: 'Cancelado',
    statusColor: 'bg-red-400',
    icon: <TrendingDown className="h-4 w-4 text-red-500" />,
    color: 'text-gray-500', 
  }, */
]

export function ETransactionsPage() {
  return (
    <>
      <Helmet title="Movimentações" />

      <div className="space-y-2.5">
        {transactions.length > 0 ? (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/6">Tipo</TableHead>
                  <TableHead className="w-1/6">Categoria</TableHead>
                  <TableHead className="w-1/5">Realizado em</TableHead>
                  <TableHead className="w-1/6">Valor</TableHead>
                  <TableHead className="w-1/5">Status</TableHead>
                  <TableHead className="w-1/6">Opções</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-mono text-xs font-medium">
                      <div className="flex items-center gap-2">
                        {transaction.icon}
                        {transaction.type}
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">
                      {transaction.category}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {transaction.date}
                    </TableCell>
                    <TableCell className={`font-medium ${transaction.color}`}>
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
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="xs">
                            <Menu className="h-6 w-6" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="end"
                          className="border-5 mt-1 w-56 transform p-0 shadow-2xl transition-all duration-500 ease-in-out"
                        >
                          <DropdownMenuItem className="cursor-pointer gap-2 p-3">
                            <Edit className="h-4 w-4" /> Editar Movimentação
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer gap-2 p-3">
                            <Trash className="h-4 w-4" /> Excluir Movimentação
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
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
            >
              <div className="mt-4 flex justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant={'default'}
                      className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-md transition-shadow duration-300 hover:shadow-lg"
                    >
                      Adicionar Nova Movimentação
                      <Plus className="h-5 w-5" />
                    </Button>
                  </DialogTrigger>

                  <AddTransaction />
                </Dialog>
              </div>
            </NoContent>
          </div>
        )}
      </div>
    </>
  )
}
