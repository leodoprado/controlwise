import { useMutation } from '@tanstack/react-query'
import {
  Banknote,
  Bookmark,
  Calendar,
  CircleDollarSignIcon,
  FilePen,
  Flag,
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
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { CategorySelector } from './categorySelector'
import { DatePickerDemo } from './date-picker'
import { PlanningSelector } from './planningSelector'

// Máscara de valor - Esquerda para a direita
function insertMaskInMoney(value: string): string {
  const onlyNumbers = value.replace(/\D/g, '')
  const formattedValue = (Number(onlyNumbers) / 100).toFixed(2)
  return formattedValue.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const transactionSchema = z.object({
  valor: z.string(),
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
    'DESPESA',
  )
  const [selectedType, setSelectedType] = useState<'RECEITA' | 'DESPESA'>(
    'DESPESA',
  )
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  )
  const [isRecurring, setIsRecurring] = useState(false)
  const [status, setStatus] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedPlanningId, setSelectedPlanningId] = useState<string | null>(
    null,
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
    watch,
    setValue,
  } = useForm<TransactionSchema>()

  const { mutateAsync: createTransactionFn } = useMutation({
    mutationFn: createTransaction,
  })

  async function handleTransaction(data: TransactionSchema) {
    try {
      const valor = parseFloat(data.valor.replace(/\./g, '').replace(',', '.'))

      if (isNaN(valor) || valor <= 0) {
        toast.error('O valor deve ser maior que 0.')
        return
      }

      if (!selectedCategoryId) {
        toast.error('Selecione uma categoria antes de continuar.')
        return
      }

      if (!selectedDate) {
        toast.error('Selecione uma data para continuar.')
        return
      }

      const FStatus = status ? 'EXECUTADO' : 'PENDENTE'

      await createTransactionFn({
        valor,
        categoryId: selectedCategoryId,
        planningId: selectedPlanningId,
        isRecurring,
        data: selectedDate,
        descricao: data.descricao,
        status: FStatus,
        tipo: transactionType,
      })
      reset()
      setSelectedCategoryId('')
      setIsRecurring(false)
      setStatus(false)
      setSelectedDate(undefined)
      toast.success('Sucesso ao cadastrar Movimentação!')
    } catch (error) {
      toast.error('Erro ao cadastrar Movimentação!')
    }
  }
  return (
    <DialogContent className="mx-auto flex w-[400px] max-w-[90vw] items-center justify-center">
      <Tabs
        defaultValue="DESPESA"
        className="w-full"
        onValueChange={(value) => {
          setSelectedType(value as 'RECEITA' | 'DESPESA')
          setTransactionType(value as 'RECEITA' | 'DESPESA')
          reset()
          setSelectedCategoryId('')
          setSelectedPlanningId(null)
          setIsRecurring(false)
          setStatus(false)
          setSelectedDate(undefined)
        }}
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="DESPESA"
            onClick={() => setTransactionType('DESPESA')}
          >
            <TrendingDown className="mr-1 h-4 w-4 text-destructive" /> Despesa
          </TabsTrigger>
          <TabsTrigger
            value="RECEITA"
            onClick={() => setTransactionType('RECEITA')}
          >
            <TrendingUp className="mr-1 h-4 w-4 text-primary" /> Receita
          </TabsTrigger>
        </TabsList>

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
                    className="pl-10"
                    placeholder="0,00"
                    {...register('valor', {
                      required: 'O valor é obrigatório',
                      validate: (value) =>
                        parseFloat(value.replace(/\./g, '').replace(',', '.')) >
                          0 || 'O valor deve ser maior que 0',
                    })}
                    onChange={(e) => {
                      const maskedValue = insertMaskInMoney(e.target.value)
                      setValue('valor', maskedValue, {
                        shouldValidate: true,
                      })
                    }}
                  />
                </div>
              </div>

              {/* Campo Categoria */}
              <div className="space-y-1">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Bookmark className="h-4 w-4 text-gray-500" />
                  </span>
                  <CategorySelector
                    type={selectedType}
                    selectedCategory={selectedCategoryId}
                    onChange={setSelectedCategoryId}
                  />
                </div>
              </div>

              {/* Campo Planejamento */}
              <div className="space-y-1">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Flag className="h-4 w-4 text-gray-500" />
                  </span>
                  <PlanningSelector
                    selectedPlanning={selectedPlanningId}
                    onChange={setSelectedPlanningId}
                    selectedCategoryId={selectedCategoryId}
                    type={selectedType}
                  />
                </div>
              </div>

              {/* Switch Receita/Despesa Recorrente */}
              <div className="flex items-center space-x-2">
                <Switch
                  id="isRecurring"
                  checked={isRecurring}
                  onCheckedChange={setIsRecurring}
                />
                <Label htmlFor="isRecurring">
                  {transactionType === 'RECEITA'
                    ? 'Receita Recorrente'
                    : 'Despesa Recorrente'}
                </Label>
              </div>

              {/* Data */}
              <div className="space-y-1">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Calendar className="h-4 w-4 text-gray-500" />
                  </span>
                  <DatePickerDemo
                    selectedDate={selectedDate}
                    onDateChange={setSelectedDate}
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
                <Switch
                  id="status"
                  checked={status}
                  onCheckedChange={setStatus}
                />
                <Label htmlFor="status">
                  {transactionType === 'RECEITA'
                    ? 'Receita Executada'
                    : 'Despesa Executada'}
                </Label>
              </div>
            </CardContent>

            <CardFooter>
              <Button
                type="submit"
                variant="outline"
                className="w-full"
                disabled={
                  isSubmitting ||
                  !selectedCategoryId ||
                  !selectedDate ||
                  !watch('valor') ||
                  parseFloat(
                    watch('valor').replace(/\./g, '').replace(',', '.'),
                  ) <= 0
                }
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
