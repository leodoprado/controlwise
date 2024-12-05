'use client'

import { useQuery } from '@tanstack/react-query'
import * as React from 'react'

import { getPlanningByCategory } from '@/api/GET/get-planning-bycategory'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useQueryKey } from '@/contexts/queryKeyContext'

type PlanningSelectorProps = {
  selectedPlanning: string | null
  onChange: (id: string | null) => void
  selectedCategoryId: string | null // Categoria selecionada
  type: 'RECEITA' | 'DESPESA'
}

export function PlanningSelector({
  selectedPlanning,
  onChange,
  selectedCategoryId,
  type,
}: PlanningSelectorProps) {
  const { currentKeyMonth } = useQueryKey()

  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState('')

  // Chamada da API para buscar planejamentos por categoria e tipo
  const { data: plannings, isLoading } = useQuery({
    queryKey: ['planningsCategory', selectedCategoryId, type],
    queryFn: () =>
      getPlanningByCategory(currentKeyMonth, selectedCategoryId as string),
    enabled: !!selectedCategoryId,
  })

  // Manipula a seleção de um planejamento
  const handleSelect = (id: string) => {
    const selected = id === selectedPlanning ? null : id
    onChange(selected)
    setOpen(false)
  }

  const filteredPlannings = Array.isArray(plannings)
    ? plannings.filter(
        (planning) =>
          planning.tipo === type && // Verifica se o tipo corresponde (RECEITA ou DESPESA)
          planning.titulo.toLowerCase().includes(query.toLowerCase()), // Verifica se o título inclui o texto da busca
      )
    : []

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-start pl-10 text-left font-normal"
          disabled={!selectedCategoryId}
        >
          <div className="flex items-center gap-2">
            <span>
              {!selectedCategoryId
                ? 'Selecione uma categoria primeiro'
                : selectedPlanning
                  ? plannings?.find((plan) => plan.id === selectedPlanning)
                      ?.titulo
                  : `Selecione um planejamento de ${type.toLowerCase()}...`}
            </span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-[var(--radix-popover-trigger-width)] p-0"
      >
        <Command>
          <Command
            placeholder={`Buscar planejamento de ${type.toLowerCase()}...`}
            value={query}
            onValueChange={setQuery}
          />
          <CommandList>
            {isLoading ? (
              <CommandEmpty>Carregando planejamentos...</CommandEmpty>
            ) : filteredPlannings.length > 0 ? (
              <CommandGroup>
                {filteredPlannings.map((planning) => (
                  <CommandItem
                    key={planning.id}
                    value={planning.id}
                    onSelect={() => handleSelect(planning.id)}
                    className="cursor-pointer gap-2"
                  >
                    {planning.titulo}
                  </CommandItem>
                ))}
              </CommandGroup>
            ) : (
              <CommandEmpty>
                Nenhum planejamento de {type.toLowerCase()} encontrado.
              </CommandEmpty>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
