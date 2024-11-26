import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export function CParametersPage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const [open, setOpen] = useState(false) // Estado do Popover
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 7 }, (_, i) => currentYear - 3 + i) // 5 anos para trás e 5 para frente

  const handleSelectYear = (year: number) => {
    setSelectedYear(year)
    setOpen(false)
  }

  return (
    <>
      <Helmet title="Parâmetros" />
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Minhas Finanças</CardTitle>
          <CardDescription>
            Configure os parâmetro referente ao módulo.
          </CardDescription>
          <form>
            <CardContent className="mt-3 flex items-center gap-4">
              <Label htmlFor="nome" className="font-semibold">
                Data de Referência:
              </Label>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="secondary"
                    role="combobox"
                    aria-expanded={open}
                    className="flex w-[140px] items-center justify-center gap-1 rounded-full border font-semibold"
                  >
                    {selectedYear || currentYear}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-2">
                  <ul className="space-y-2">
                    {years.map((year) => (
                      <li
                        key={year}
                        className="cursor-pointer rounded px-2 py-1 hover:bg-gray-100"
                        onClick={() => handleSelectYear(year)}
                      >
                        {year}
                      </li>
                    ))}
                  </ul>
                </PopoverContent>
              </Popover>
            </CardContent>
          </form>
        </CardHeader>
      </Card>
    </>
  )
}
