import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { getGoals } from '@/api/GET/get-goals'
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

type GoalsSelectorProps = {
  selectedGoal: string | null
  onChange: (selectedGoal: string | null) => void
}

export function GoalsSelector({ selectedGoal, onChange }: GoalsSelectorProps) {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState('')

  const { data: goals, isLoading: isLoadingGoals } = useQuery({
    queryKey: ['goals'],
    queryFn: getGoals,
  })

  const filteredGoals = React.useMemo(() => {
    if (!goals || !query) return goals || []
    return goals.filter((goal) =>
      goal.titulo.toLowerCase().includes(query.toLowerCase()),
    )
  }, [goals, query])

  const handleSelect = (id: string) => {
    const selected = id === selectedGoal ? null : id
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
              {selectedGoal
                ? goals?.find((goal) => goal.id === selectedGoal)?.titulo
                : 'Selecione um Objetivo...'}
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
            placeholder="Buscar meta..."
            value={query}
            onValueChange={setQuery}
          />
          <CommandList>
            {isLoadingGoals ? (
              <CommandEmpty>Carregando objetivos...</CommandEmpty>
            ) : filteredGoals && filteredGoals.length > 0 ? (
              <CommandGroup>
                {filteredGoals.map((goal) => (
                  <CommandItem
                    key={goal.id}
                    value={goal.id}
                    onSelect={() => handleSelect(goal.id)}
                    className="cursor-pointer"
                  >
                    {goal.titulo}
                  </CommandItem>
                ))}
              </CommandGroup>
            ) : (
              <CommandEmpty>Nenhum objetivo encontrado.</CommandEmpty>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
