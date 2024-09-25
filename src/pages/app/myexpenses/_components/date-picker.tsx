'use client'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale' // Importa o locale do Brasil
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>()
  const [open, setOpen] = React.useState(false)

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full justify-start pl-10 text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <CalendarIcon className="h-4 w-4" />
          </span>
          {date ? (
            format(date, 'PPP', { locale: ptBR })
          ) : (
            <span>Escolha a data</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          initialFocus
          locale={ptBR}
        />
      </PopoverContent>
    </Popover>
  )
}
