import { useMutation } from '@tanstack/react-query'
import { Banknote, Calendar, FilePen, Flag, HandCoins } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { createGoal } from '@/api/POST/post-goal'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DialogContent, DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

import { DatePickerDemo } from './date-picker'

// Máscara de valor - Esquerda para a direita
function insertMaskInMoney(value: string): string {
  const onlyNumbers = value.replace(/\D/g, '')
  const formattedValue = (Number(onlyNumbers) / 100).toFixed(2)
  return formattedValue.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const goalSchema = z.object({
  titulo: z.string(),
  dataLimite: z.date(),
  valorTotal: z.string(),
  valorInicial: z.string().optional(),
  descricao: z.string().optional(),
})

type GoalSchema = z.infer<typeof goalSchema>

export function AddObjective() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { isSubmitting },
    watch,
  } = useForm<GoalSchema>()

  const { mutateAsync: createGoalFn } = useMutation({
    mutationFn: createGoal,
  })

  async function handleCreateGoal(data: GoalSchema) {
    try {
      const valorTotal = parseFloat(
        data.valorTotal.replace(/\./g, '').replace(',', '.'),
      )
      const valorInicial = data.valorInicial
        ? parseFloat(data.valorInicial.replace(/\./g, '').replace(',', '.'))
        : 0

      if (!selectedDate) {
        toast.error('Selecione uma data para continuar.')
        return
      }

      await createGoalFn({
        titulo: data.titulo,
        dataLimite: selectedDate,
        valorTotal,
        valorInicial,
        descricao: data.descricao,
      })

      reset()
      setSelectedDate(undefined)
      toast.success('Objetivo criado com sucesso!')
    } catch (error) {
      toast.error('Erro ao criar objetivo!')
    }
  }

  return (
    <DialogContent className="mx-auto w-[400px] max-w-[90vw] p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-semibold">
            <Flag className="mr-2 h-5 w-5 text-gray-700" />
            Novo Objetivo
          </CardTitle>
        </CardHeader>

        <form onSubmit={handleSubmit(handleCreateGoal)}>
          <CardContent className="space-y-4">
            {/* Título */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FilePen className="h-4 w-4 text-gray-500" />
              </span>
              <Input
                id="titulo"
                className="pl-10"
                placeholder="Título do Objetivo"
                {...register('titulo')}
              />
            </div>

            {/* Data Limite */}
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

            {/* Valor Total */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Banknote className="h-4 w-4 text-gray-500" />
              </span>
              <Input
                id="valorTotal"
                className="pl-10"
                placeholder="Valor do Objetivo"
                {...register('valorTotal', {
                  required: 'O valor é obrigatório',
                  validate: (value) =>
                    parseFloat(value.replace(/\./g, '').replace(',', '.')) >
                      0 || 'O valor deve ser maior que 0',
                })}
                onChange={(e) => {
                  const maskedValue = insertMaskInMoney(e.target.value)
                  setValue('valorTotal', maskedValue, {
                    shouldValidate: true,
                  })
                }}
              />
            </div>

            {/* Valor Inicial */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <HandCoins className="h-4 w-4 text-gray-500" />
              </span>
              <Input
                id="valorInicial"
                className="pl-10"
                placeholder="Valor Inicial (opcional)"
                {...register('valorInicial')}
                onChange={(e) => {
                  const maskedValue = insertMaskInMoney(e.target.value)
                  setValue('valorInicial', maskedValue)
                }}
              />
            </div>

            {/* Descrição */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FilePen className="h-4 w-4 text-gray-500" />
              </span>
              <Input
                id="descricao"
                className="pl-10"
                placeholder="Descrição (opcional)"
                {...register('descricao')}
              />
            </div>
          </CardContent>

          <CardFooter>
            <DialogFooter className="w-full">
              <Button
                variant="outline"
                className="w-full"
                disabled={
                  isSubmitting ||
                  !watch('titulo') ||
                  !watch('valorTotal') ||
                  parseFloat(
                    watch('valorTotal').replace(/\./g, '').replace(',', '.'),
                  ) <= 0
                }
              >
                Adicionar
              </Button>
            </DialogFooter>
          </CardFooter>
        </form>
      </Card>
    </DialogContent>
  )
}
