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

interface PopoverMonthReferenceProps {
  onSelectMonth: (month: number) => void
  defaultMonth?: number // Passar o mês atual ou outro default se necessário
}

export function PopoverMonthReference({
  onSelectMonth,
  defaultMonth = new Date().getMonth() + 1,
}: PopoverMonthReferenceProps) {
  const [open, setOpen] = React.useState(false)
  const [selectedMonth, setSelectedMonth] = React.useState(
    defaultMonth.toString(),
  )

  const handleMonthChange = (selectedMonth: string) => {
    setSelectedMonth(selectedMonth)
    onSelectMonth(parseInt(selectedMonth, 10)) // Notifica o componente pai
    setOpen(false)
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
          {
            frameworks.find((framework) => framework.value === selectedMonth)
              ?.label
          }
          <ChevronDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="center"
        sideOffset={4}
        className="w-[200px] p-0"
        forceMount
      >
        <Command>
          <CommandList>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(month) => handleMonthChange(month)}
                  className="cursor-pointer"
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      selectedMonth === framework.value
                        ? 'opacity-100'
                        : 'opacity-0',
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
