import { useMutation } from '@tanstack/react-query'
import { Bookmark, SquarePen } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { createCategorie } from '@/api/POST/post-categorie'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

import { ColorDialog } from './color-options'
import { IconDialog } from './icon-options'

const categorieExpenseForm = z.object({
  nome: z.string().nonempty('O nome é obrigatório'),
  tipo: z.enum(['DESPESA', 'RECEITA']),
  codIcone: z.number(),
  codColor: z.number(),
})

type CategorieExpenseForm = z.infer<typeof categorieExpenseForm>

export function FormCategorieExpense() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
    watch,
  } = useForm<CategorieExpenseForm>()

  const [codColor, setCodColor] = useState<number | null>(null)
  const [codIcone, setCodIcone] = useState<number | null>(null)

  const { mutateAsync: createCategorieExpenseFn } = useMutation({
    mutationFn: createCategorie,
  })

  async function handleSignUp(data: CategorieExpenseForm) {
    if (codColor === null || codIcone === null) {
      toast.error('Selecione uma cor e um ícone para continuar!')
      return
    }

    try {
      await createCategorieExpenseFn({
        nome: data.nome,
        tipo: 'DESPESA',
        codColor,
        codIcone,
      })

      reset()
      setCodColor(null)
      setCodIcone(null)
      toast.success('Sucesso ao cadastrar categoria de Despesa!')
    } catch (error) {
      toast.error('Erro ao cadastrar categoria de Despesa!')
    }
  }

  return (
    <DialogContent>
      <DialogTitle className="flex items-center">
        <Bookmark className="mr-2 h-4 w-4" /> Nova Categoria de Despesa
      </DialogTitle>

      <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <SquarePen className="h-4 w-4 text-gray-500" />
          </span>
          <Input
            id="nome"
            className="pl-10 focus-visible:ring-red-500"
            placeholder="Nome"
            type="text"
            {...register('nome')}
          />
        </div>
        <div className="flex gap-4">
          <ColorDialog setCodColor={setCodColor} selectedColor={codColor} />{' '}
          <IconDialog setCodIcone={setCodIcone} selectedIcon={codIcone} />
        </div>
        <DialogFooter>
          <Button
            variant={'outline'}
            className="w-full focus-visible:ring-red-500"
            disabled={isSubmitting || !watch('nome') || !codColor || !codIcone}
          >
            Adicionar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
