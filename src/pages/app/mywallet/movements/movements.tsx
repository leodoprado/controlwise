import { Trash } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

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

export function WMovementsPage() {
  return (
    <>
      <Helmet title="Lançamentos" />

      <div className="">
        <Card>
          <CardHeader className="flex items-start justify-between">
            <CardTitle>Lançamentos - 2024</CardTitle>
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
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">
                    Tipo de Investimento
                  </TableHead>
                  <TableHead className="font-semibold">Ativo</TableHead>
                  <TableHead className="font-semibold">Tipo de Ordem</TableHead>
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
              <TableRow>
                <TableCell>Ação</TableCell>
                <TableCell>SAPR4</TableCell>
                <TableCell>Compra</TableCell>
                <TableCell>5</TableCell>
                <TableCell>R$ 6,00</TableCell>
                <TableCell>R$ 30,00</TableCell>
                <TableCell>07/12/2024</TableCell>
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
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
