// MovimentacaoDialogContent.tsx
// import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import {
  Banknote,
  Bookmark,
  CircleDollarSignIcon,
  FilePen,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { createTransaction } from '@/api/POST/post-transaction'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// import { insertMaskInMoney } from '@/functions/money-mask'
import { DatePickerDemo } from './date-picker'

const transactionSchema = z.object({
  valor: z.number(),
  descricao: z.string().nullable(),
  tipo: z.enum(['RECEITA', 'DESPESA']),
  data: z.date(),
  categoryId: z.string(),
  isRecurring: z.boolean().optional().default(false),
  status: z
    .enum(['PENDENTE', 'EXECUTADO', 'CANCELADO'])
    .optional()
    .default('PENDENTE'),
})

type TransactionSchema = z.infer<typeof transactionSchema>

export function AddTransaction() {
  const [transactionType, setTransactionType] = useState<'RECEITA' | 'DESPESA'>(
    'RECEITA',
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TransactionSchema>()

  const { mutateAsync: createTransactionFn } = useMutation({
    mutationFn: createTransaction,
  })

  async function handleTransaction(data: TransactionSchema) {
    try {
      await createTransactionFn({
        ...data,
        tipo: transactionType, // Define o tipo dinamicamente
      })

      toast.success('Sucesso ao cadastrar Movimentação!')
    } catch (error) {
      toast.error('Erro ao cadastrar Movimentação!')
    }
  }

  return (
    <DialogContent className="mx-auto flex w-[400px] max-w-[90vw] items-center justify-center">
      <Tabs defaultValue="receita" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="receita"
            onClick={() => setTransactionType('RECEITA')}
          >
            <TrendingUp className="mr-1 h-4 w-4 text-primary" /> Receita
          </TabsTrigger>
          <TabsTrigger
            value="despesa"
            onClick={() => setTransactionType('DESPESA')}
          >
            <TrendingDown className="mr-1 h-4 w-4 text-destructive" /> Despesa
          </TabsTrigger>
        </TabsList>

        {/* Conteúdo compartilhado */}
        <form onSubmit={handleSubmit(handleTransaction)}>
          <Card>
            <CardHeader>
              <CardTitle className="flex">
                <CircleDollarSignIcon
                  className={`mr-2 ${
                    transactionType === 'RECEITA'
                      ? 'text-primary'
                      : 'text-destructive'
                  }`}
                />
                {transactionType === 'RECEITA'
                  ? 'Cadastrar Receita'
                  : 'Cadastrar Despesa'}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              {/* Campo Valor */}
              <div className="space-y-1">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Banknote className="h-4 w-4 text-gray-500" />
                  </span>
                  <Input
                    id="valor"
                    type="number"
                    className="pl-10"
                    placeholder="0,00"
                    {...register('valor')}
                  />
                </div>
              </div>

              {/* Campo Categoria */}
              <div className="space-y-1">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Bookmark className="h-4 w-4 text-gray-500" />
                  </span>
                  <Input
                    id="categoryId"
                    className="pl-10"
                    placeholder="Categoria"
                    {...register('categoryId')}
                  />
                </div>
              </div>

              {/* Switch Receita/Despesa Recorrente */}
              <div className="flex items-center space-x-2">
                <Switch id="isRecurring" {...register('isRecurring')} />
                <Label htmlFor="isRecurring">
                  {transactionType === 'RECEITA'
                    ? 'Receita Recorrente'
                    : 'Despesa Recorrente'}
                </Label>
              </div>

              {/* Data */}
              <div className="space-y-1">
                <div className="relative">
                  <DatePickerDemo
                  // onSelect={(date) => setValue('data', date)} // Atualiza o valor da data
                  // className="pl-10" // Margem para o ícone à esquerda
                  />
                </div>
              </div>

              {/* Descrição */}
              <div className="space-y-1">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FilePen className="h-4 w-4 text-gray-500" />
                  </span>
                  <Input
                    id="descricao"
                    className="pl-10"
                    placeholder="Descrição"
                    {...register('descricao')}
                  />
                </div>
              </div>

              {/* Switch Receita/Despesa Executada */}
              <div className="flex items-center space-x-2">
                <Switch id="status" {...register('status')} />
                <Label htmlFor="status">
                  {transactionType === 'RECEITA'
                    ? 'Receita Executada'
                    : 'Despesa Executada'}
                </Label>
              </div>
            </CardContent>

            <CardFooter>
              <Button
                variant="outline"
                className="w-full"
                disabled={isSubmitting}
              >
                Adicionar
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Tabs>
    </DialogContent>
  )
}
