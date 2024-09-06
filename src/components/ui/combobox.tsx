'use client'

import { Check } from 'lucide-react'
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

const frameworks = [
  {
    value: 'jan',
    label: 'Janeiro',
  },
  {
    value: 'fev',
    label: 'Fevereiro',
  },
  {
    value: 'mar',
    label: 'Março',
  },
  {
    value: 'abr',
    label: 'Abril',
  },
  {
    value: 'mai',
    label: 'Maio',
  },
  {
    value: 'jun',
    label: 'Junho',
  },
  {
    value: 'jul',
    label: 'Julho',
  },
  {
    value: 'ago',
    label: 'Agosto',
  },
  {
    value: 'set',
    label: 'Setembro',
  },
  {
    value: 'out',
    label: 'Outubro',
  },
  {
    value: 'nov',
    label: 'Novembro',
  },
  {
    value: 'dez',
    label: 'Dezembro',
  },
]

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="w-[120px] justify-center rounded-full border font-semibold"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : 'Select framework...'}
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
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
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
