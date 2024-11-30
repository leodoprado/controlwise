import { useMutation } from '@tanstack/react-query'
import { Banknote, Bookmark, FilePen, Presentation } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { createPlanning } from '@/api/POST/post-planning'
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

import { CategorySelector } from './categorySelector'

// Máscara de valor - Esquerda para a direita
function insertMaskInMoney(value: string): string {
  const onlyNumbers = value.replace(/\D/g, '')
  const formattedValue = (Number(onlyNumbers) / 100).toFixed(2)
  return formattedValue.replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const planningSchema = z.object({
  titulo: z.string(),
  valorTarget: z.string(),
  categoryId: z.string(),
})

type PlanningSchema = z.infer<typeof planningSchema>

export function AddPlanning() {
  const [selectedTitulo, setSelectedTitulo] = useState<string>('')
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
    watch,
    setValue,
  } = useForm<PlanningSchema>()

  const { mutateAsync: createPlanningFn } = useMutation({
    mutationFn: createPlanning,
  })

  async function handlePlanning(data: PlanningSchema) {
    try {
      const valorTarget = parseFloat(
        data.valorTarget.replace(/\./g, '').replace(',', '.'),
      )

      await createPlanningFn({
        titulo: selectedTitulo,
        valorTarget,
        categoryId: selectedCategoryId,
      })

      reset()
      setSelectedTitulo('')
      setSelectedCategoryId('')

      toast.success('Sucesso ao cadastrar Planejamento!')
    } catch (error) {
      toast.error('Erro ao cadastrar Planejamento!')
    }
  }

  return (
    <DialogContent className="mx-auto w-[400px] max-w-[90vw] p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-semibold">
            <Presentation className="mr-2 h-5 w-5 text-gray-700" />
            Planejamento Mensal
          </CardTitle>
        </CardHeader>

        <form onSubmit={handleSubmit(handlePlanning)}>
          <CardContent className="space-y-4">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FilePen className="h-4 w-4 text-gray-500" />
              </span>
              <Input
                id="titulo"
                className="pl-10"
                placeholder="Título"
                {...register('titulo')}
                onChange={(e) => setSelectedTitulo(e.target.value)}
              />
            </div>

            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Banknote className="h-4 w-4 text-gray-500" />
              </span>
              <Input
                id="valorTarget"
                className="pl-10"
                placeholder="0,00"
                {...register('valorTarget', {
                  required: 'O valor é obrigatório',
                  validate: (value) =>
                    parseFloat(value.replace(/\./g, '').replace(',', '.')) >
                      0 || 'O valor deve ser maior que 0',
                })}
                onChange={(e) => {
                  const maskedValue = insertMaskInMoney(e.target.value)
                  setValue('valorTarget', maskedValue, {
                    shouldValidate: true,
                  })
                }}
              />
            </div>

            <div className="space-y-1">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Bookmark className="h-4 w-4 text-gray-500" />
                </span>
                <CategorySelector
                  type={'DESPESA'}
                  selectedCategory={selectedCategoryId}
                  onChange={(id) => setSelectedCategoryId(id || '')}
                />
              </div>
            </div>
          </CardContent>

          <CardFooter>
            <DialogFooter className="w-full">
              <Button
                variant="outline"
                className="w-full"
                disabled={
                  isSubmitting ||
                  !selectedTitulo ||
                  !selectedCategoryId ||
                  !watch('valorTarget') ||
                  parseFloat(
                    watch('valorTarget').replace(/\./g, '').replace(',', '.'),
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
