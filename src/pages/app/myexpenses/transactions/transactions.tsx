import { Edit, Menu, Trash, TrendingDown } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
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

export function ETransactionsPage() {
  return (
    <>
      <Helmet title="Movimentações" />

      <div className="space-y-2.5">
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
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell className="font-mono text-xs font-medium">
                      <div className="flex items-center gap-2">
                        <TrendingDown className="h-4 w-4 text-red-500" />
                        Despesa
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">
                      Casa
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      19/09/2024
                    </TableCell>
                    <TableCell className="font-medium text-red-500">
                      R$ 149,90
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-slate-400" />
                        <span className="font-medium text-muted-foreground">
                          Pendente
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
                )
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
