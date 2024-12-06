import { useMutation } from '@tanstack/react-query'
import {
  Banknote,
  Calendar,
  CalendarPlus,
  CalendarSearch,
  CirclePlus,
  FilePen,
  Flag,
  HandCoins,
} from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { createGoal } from '@/api/POST/post-goal'
import { updateGoalValue } from '@/api/PUT/update-goal-value'
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { DatePickerDemo } from './date-picker'
import { GoalsSelector } from './goalSelector'

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
  valorAdicionado: z.string().optional(),
  descricao: z.string().optional(),
})

const goalValueSchema = z.object({
  valorAdicionado: z.string(),
})

type GoalSchema = z.infer<typeof goalSchema>
type GoalValueSchema = z.infer<typeof goalValueSchema>

export function AddObjective() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedGoalId, setSelectedGoalId] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { isSubmitting },
    watch,
  } = useForm<GoalSchema>()

  const {
    register: registerUpdate,
    handleSubmit: handleSubmitUpdate,
    setValue: setValueUpdate,
    reset: resetUpdate,
    formState: { isSubmitting: isUpdating },
  } = useForm<GoalValueSchema>()

  const { mutateAsync: createGoalFn } = useMutation({
    mutationFn: createGoal,
  })

  const { mutateAsync: updateGoalValueFn } = useMutation({
    mutationFn: updateGoalValue,
  })

  async function handleCreateGoal(data: GoalSchema) {
    try {
      const valorTotal = parseFloat(
        data.valorTotal.replace(/\./g, '').replace(',', '.'),
      )

      if (!selectedDate) {
        toast.error('Selecione uma data para continuar.')
        return
      }

      const valorAdicionado = data.valorAdicionado
        ? parseFloat(data.valorAdicionado.replace(/\./g, '').replace(',', '.'))
        : 0

      await createGoalFn({
        titulo: data.titulo,
        dataLimite: selectedDate,
        valorTotal,
        valorAdicionado,
        descricao: data.descricao,
      })

      reset()
      setSelectedDate(undefined)
      toast.success('Objetivo criado com sucesso!')
    } catch (error) {
      toast.error('Erro ao criar objetivo!')
    }
  }

  async function handleUpdateGoalValue(data: GoalValueSchema) {
    try {
      if (!selectedGoalId) {
        toast.error('Selecione um objetivo para continuar.')
        return
      }

      const valorAdicionado = parseFloat(
        data.valorAdicionado.replace(/\./g, '').replace(',', '.'),
      )

      if (valorAdicionado <= 0) {
        toast.error('O valor deve ser maior que zero.')
        return
      }

      await updateGoalValueFn({
        goalId: selectedGoalId,
        valorAdicionado,
      })

      resetUpdate()
      setSelectedGoalId(null)
      toast.success('Valor adicionado ao objetivo com sucesso!')
      reset()
    } catch (error) {
      toast.error('Erro ao adicionar valor ao objetivo!')
    }
  }

  return (
    <DialogContent className="mx-auto w-[400px] max-w-[90vw] p-6">
      <Tabs defaultValue="CREATE">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="CREATE">
            <CalendarPlus className="mr-1 h-4 w-4" />
            Novo Objetivo
          </TabsTrigger>
          <TabsTrigger value="ASSIGN">
            <CirclePlus className="mr-1 h-4 w-4" />
            Adicionar Valor
          </TabsTrigger>
        </TabsList>

        <TabsContent value="CREATE">
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
                    id="valorAdicionado"
                    className="pl-10"
                    placeholder="Valor Inicial (opcional)"
                    {...register('valorAdicionado')}
                    onChange={(e) => {
                      const maskedValue = insertMaskInMoney(e.target.value)
                      setValue('valorAdicionado', maskedValue)
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
                        watch('valorTotal')
                          .replace(/\./g, '')
                          .replace(',', '.'),
                      ) <= 0
                    }
                  >
                    Adicionar
                  </Button>
                </DialogFooter>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        <TabsContent value="ASSIGN">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-semibold">
                <Flag className="mr-2 h-5 w-5" />
                Adicionar Valor ao Objetivo
              </CardTitle>
            </CardHeader>

            <form onSubmit={handleSubmitUpdate(handleUpdateGoalValue)}>
              <CardContent className="space-y-4">
                {/* Selecione um Objetivo */}
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <CalendarSearch className="h-4 w-4 text-gray-500" />
                  </span>
                  <GoalsSelector
                    onChange={setSelectedGoalId}
                    selectedGoal={selectedGoalId}
                  />
                </div>

                {/* Adicione um valor ao Objetivo */}
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Banknote className="h-4 w-4 text-gray-500" />
                  </span>
                  <Input
                    id="valorAdicionado"
                    className="pl-10"
                    placeholder="Adicione um Valor"
                    {...registerUpdate('valorAdicionado', {
                      required: 'O valor é obrigatório',
                      validate: (value) =>
                        parseFloat(value.replace(/\./g, '').replace(',', '.')) >
                          0 || 'O valor deve ser maior que 0',
                    })}
                    onChange={(e) => {
                      const maskedValue = insertMaskInMoney(e.target.value)
                      setValueUpdate('valorAdicionado', maskedValue, {
                        shouldValidate: true,
                      })
                    }}
                  />
                </div>
              </CardContent>

              <CardFooter>
                <DialogFooter className="w-full">
                  <Button
                    variant="outline"
                    className="w-full"
                    disabled={isUpdating}
                  >
                    Adicionar
                  </Button>
                </DialogFooter>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </DialogContent>
  )
}
