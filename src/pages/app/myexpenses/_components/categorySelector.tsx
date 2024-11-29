'use client'

import { useQuery } from '@tanstack/react-query'
import * as React from 'react'

import { getCategories } from '@/api/GET/get-categories'
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

type CategorySelectorProps = {
  selectedCategory: string | null
  onChange: (id: string | null) => void
  type: 'RECEITA' | 'DESPESA'
}

export function CategorySelector({
  selectedCategory,
  onChange,
  type,
}: CategorySelectorProps) {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState('')

  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  })

  const filteredCategories =
    categories?.filter(
      (category) =>
        category.tipo === type &&
        category.nome.toLowerCase().includes(query.toLowerCase()),
    ) || []

  const handleSelect = (id: string) => {
    const selected = id === selectedCategory ? null : id
    onChange(selected)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-start pl-10 text-left font-normal"
        >
          <div className="flex items-center gap-2">
            <span>
              {selectedCategory
                ? categories?.find((cat) => cat.id === selectedCategory)?.nome
                : `Selecione uma categoria de ${type.toLowerCase()}...`}
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
            placeholder={`Buscar categoria de ${type.toLowerCase()}...`}
            value={query}
            onValueChange={setQuery}
          />
          <CommandList>
            {isLoading ? (
              <CommandEmpty>Carregando categorias...</CommandEmpty>
            ) : filteredCategories.length > 0 ? (
              <CommandGroup>
                {filteredCategories.map((category) => (
                  <CommandItem
                    key={category.id}
                    value={category.id}
                    onSelect={() => handleSelect(category.id)}
                    className="cursor-pointer"
                  >
                    {category.nome}
                  </CommandItem>
                ))}
              </CommandGroup>
            ) : (
              <CommandEmpty>
                Nenhuma categoria de {type.toLowerCase()} encontrada.
              </CommandEmpty>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
