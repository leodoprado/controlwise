import { useMutation } from '@tanstack/react-query'
import { Bookmark, SquarePen } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { createCategorie } from '@/api/POST/create-categorie'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

import { ColorDialog } from './color-options'
import { IconDialog } from './icon-options'

const categorieRevenueForm = z.object({
  nome: z.string().nonempty('O nome é obrigatório'),
  tipo: z.enum(['DESPESA', 'RECEITA']),
  codIcone: z.number(),
  codColor: z.number(),
})

type CategorieRevenueForm = z.infer<typeof categorieRevenueForm>

export function FormCategorieRevenue() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CategorieRevenueForm>()

  // Estados para codColor e codIcone
  const [codColor, setCodColor] = useState<number | null>(null)
  const [codIcone, setCodIcone] = useState<number | null>(null)

  const navigate = useNavigate()

  // Mutação para criar a categoria
  const { mutateAsync: createCategorieExpenseFn } = useMutation({
    mutationFn: createCategorie,
  })

  async function handleSignUp(data: CategorieRevenueForm) {
    if (codColor === null || codIcone === null) {
      toast.error('Selecione uma cor e um ícone para continuar!')
      return
    }

    try {
      // Envia os dados para o backend
      await createCategorieExpenseFn({
        nome: data.nome,
        tipo: 'RECEITA',
        codColor,
        codIcone,
      })

      toast.success('Sucesso ao cadastrar categoria de Despesa!')
      navigate('/config/categories')
    } catch (error) {
      toast.error('Erro ao cadastrar categoria de Despesa!')
    }
  }

  return (
    <DialogContent>
      <DialogTitle className="flex items-center">
        <Bookmark className="mr-2 h-4 w-4" /> Nova Categoria de Receita
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

        {/* Componentes ColorDialog e IconDialog */}
        <div className="flex gap-4">
          <ColorDialog setCodColor={setCodColor} /> {/* Atualiza codColor */}
          <IconDialog setCodIcone={setCodIcone} /> {/* Atualiza codIcone */}
        </div>

        <DialogFooter>
          <Button
            variant={'outline'}
            className="w-full focus-visible:ring-red-500"
            disabled={isSubmitting}
          >
            Adicionar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
