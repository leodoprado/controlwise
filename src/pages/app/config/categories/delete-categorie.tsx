import { useMutation, useQuery } from '@tanstack/react-query'

import { deleteCategorie } from '@/api/DELETE/delete-categorie'
import { getCategorieDetails } from '@/api/GET/get-categorie-details'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { getIconById } from '../categories/mappingIconColor'

export interface DetailsCategorieProps {
  categorieId: string
  open: boolean
}

export function DeleteCategorie({ categorieId, open }: DetailsCategorieProps) {
  const { data: categorie } = useQuery({
    queryKey: ['categorie', categorieId],
    queryFn: () => getCategorieDetails({ categorieId }),
    enabled: open,
  })

  const IconComponent = categorie ? getIconById(categorie.codIcone) : null

  const { mutateAsync: deleteCategorieFn } = useMutation({
    mutationFn: deleteCategorie,
  })

  const handleDelete = async () => {
    if (!categorie?.id) {
      console.error('Categoria inválida ou não carregada.')
      return
    }

    try {
      await deleteCategorieFn({ categorieId: categorie.id }) // Passa um objeto com o parâmetro esperado
    } catch (error) {
      console.error('Erro ao excluir a categoria:', error)
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          Deseja realmente <span className="font-bold">excluir</span> a
          categoria de {categorie?.tipo}?
        </DialogTitle>
      </DialogHeader>
      <div className="my-4 flex items-center gap-4">
        {IconComponent && (
          <span className="text-2xl text-muted-foreground">
            <IconComponent />
          </span>
        )}
        <p className="text-lg font-semibold">{categorie?.nome}</p>
      </div>
      <DialogFooter>
        <Button variant="destructive" className="w-full" onClick={handleDelete}>
          Excluir
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
