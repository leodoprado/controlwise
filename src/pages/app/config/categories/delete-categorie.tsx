import { useQuery } from '@tanstack/react-query'

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
        <Button variant="destructive" className="w-full">
          Excluir
        </Button>
      </DialogFooter>
    </DialogContent>
  )
}
