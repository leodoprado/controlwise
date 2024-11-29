'use client'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale' // Locale do Brasil
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

type DatePickerDemoProps = {
  selectedDate: Date | undefined
  onDateChange: (date: Date | undefined) => void
}

export function DatePickerDemo({
  selectedDate,
  onDateChange,
}: DatePickerDemoProps) {
  const [open, setOpen] = React.useState(false)

  const handleDateSelect = (date: Date | undefined) => {
    onDateChange(date) // Atualiza o estado externo
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full justify-start pl-10 text-left font-normal',
            !selectedDate && 'text-muted-foreground',
          )}
        >
          {selectedDate ? (
            format(selectedDate, 'PPP', { locale: ptBR })
          ) : (
            <span>Escolha a data</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selectedDate} // Agora aceita `undefined`
          onSelect={handleDateSelect}
          initialFocus
          locale={ptBR}
        />
      </PopoverContent>
    </Popover>
  )
}
