'use client'

import { Check, ChevronDown } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

// Mapeamento de meses com valores numéricos
const frameworks = [
  { value: '1', label: 'Janeiro' },
  { value: '2', label: 'Fevereiro' },
  { value: '3', label: 'Março' },
  { value: '4', label: 'Abril' },
  { value: '5', label: 'Maio' },
  { value: '6', label: 'Junho' },
  { value: '7', label: 'Julho' },
  { value: '8', label: 'Agosto' },
  { value: '9', label: 'Setembro' },
  { value: '10', label: 'Outubro' },
  { value: '11', label: 'Novembro' },
  { value: '12', label: 'Dezembro' },
]

export function PopoverMonths() {
  const currentMonth = React.useMemo(() => {
    // Obtém o mês da URL ou usa o mês atual como fallback
    const params = new URLSearchParams(window.location.search)
    return params.get('month') || (new Date().getMonth() + 1).toString()
  }, [])

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(currentMonth) // Mês atual como valor inicial

  const handleSelect = (selectedValue: string) => {
    setValue(selectedValue) // Atualiza o estado local
    setOpen(false)

    // Atualiza o parâmetro `month` na URL
    const params = new URLSearchParams(window.location.search)
    params.set('month', selectedValue)
    window.history.pushState(
      {},
      '',
      `${window.location.pathname}?${params.toString()}`,
    )

    // Opcional: Dispare eventos para atualizações em outros componentes
    window.dispatchEvent(new Event('monthChanged'))
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="flex w-[140px] items-center justify-center gap-1 rounded-full border font-semibold"
        >
          {frameworks.find((framework) => framework.value === value)?.label ||
            'Selecione um mês'}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={() => handleSelect(framework.value)}
                  className="cursor-pointer"
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === framework.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
