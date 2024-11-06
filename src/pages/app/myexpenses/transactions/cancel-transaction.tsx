import { Home, TrendingDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
export function CancelTransaction() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="flex items-center gap-1">
          <span className="font-bold">Cancelar</span> Despesa
          <TrendingDown className="h-4 w-4 text-red-500" />
        </DialogTitle>
        <DialogDescription>Detalhes da Movimentação</DialogDescription>
      </DialogHeader>
      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Valor</TableCell>
              <TableCell className="flex items-center justify-end gap-2 text-red-500">
                R$ 149,90
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Tipo</TableCell>
              <TableCell className="flex items-center justify-end gap-2">
                <TrendingDown className="h-4 w-4 text-red-500" />
                Despesa
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Categoria</TableCell>
              <TableCell className="flex items-center justify-end gap-2">
                <Home className="h-4 w-4" /> Casa
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado em
              </TableCell>
              <TableCell className="flex justify-end">03/11/2024</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button className="w-full" variant="outline">
          Cancelar
        </Button>
      </div>
    </DialogContent>
  )
}
