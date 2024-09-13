import { Plus, TrendingDown, TrendingUp } from 'lucide-react'
import { useState } from 'react'

import { Button } from '../../../../components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../../../../components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../../../components/ui/dropdown-menu'
import { Input } from '../../../../components/ui/input'
import { Label } from '../../../../components/ui/label'

export function TransactionMenu() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [dialogType, setDialogType] = useState<'receita' | 'despesa' | null>(
    null,
  )
  const [valor, setValor] = useState('')

  const openDialog = (type: 'receita' | 'despesa') => {
    setDialogType(type)
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    setDialogType(null)
  }

  const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, '') // Remove tudo que não for número
    const formattedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(parseFloat(inputValue) / 100) // Divide por 100 para obter valores monetários corretos
    setValor(formattedValue.replace('R$', 'R$ ')) // Adiciona espaço após o R$
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={'default'}
            className="flex items-center gap-1 rounded-full px-4 py-2"
          >
            <span className="font-bold">Adicionar</span>
            <Plus className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="center"
          className="border-5 mt-1 w-56 transform p-0 shadow-2xl transition-all duration-500 ease-in-out"
        >
          <DropdownMenuItem
            className="cursor-pointer p-3"
            onClick={() => openDialog('receita')}
          >
            <TrendingUp className="mr-2 h-4 w-4 text-primary" /> Receita
          </DropdownMenuItem>

          <DropdownMenuItem
            className="cursor-pointer p-3"
            onClick={() => openDialog('despesa')}
          >
            <TrendingDown className="mr-2 h-4 w-4 text-destructive" /> Despesa
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader className="flex flex-row items-center">
            {dialogType === 'receita' ? (
              <TrendingUp className="mr-2 h-6 w-6 text-primary" />
            ) : (
              <TrendingDown className="mr-2 h-6 w-6 text-destructive" />
            )}
            <DialogTitle>
              {dialogType === 'receita'
                ? 'Adicionar Receita'
                : 'Adicionar Despesa'}
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="flex flex-row items-center">
            {dialogType === 'receita'
              ? 'Preencha os detalhes para adicionar uma nova receita.'
              : 'Preencha os detalhes para adicionar uma nova despesa.'}
          </DialogDescription>

          {/* Formulário */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="valor">Valor</Label>
              <Input
                id="valor"
                placeholder="R$ 0,00"
                value={valor}
                onChange={handleValorChange}
                inputMode="numeric" // Garante teclado numérico
                className={`${
                  dialogType === 'receita'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-red-100 text-red-600'
                }`}
              />
            </div>
            <div>
              <Label htmlFor="categoria">Categoria</Label>
              <Input id="categoria" placeholder="Categoria" />
            </div>
            <div>
              <Label htmlFor="observacao">Observação</Label>
              <Input id="observacao" placeholder="Observação" />
            </div>
          </div>

          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={closeDialog}>
              Cancelar
            </Button>
            <Button onClick={closeDialog}>Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
