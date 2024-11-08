import { ArrowDownAZ, Search, TrendingDown, TrendingUp, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function FilterCategories() {
  return (
    <form className="ml-2 flex items-center">
      <Select defaultValue="todos">
        <SelectTrigger className="flex w-[140px] items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">
          <SelectValue defaultValue="todos" />
        </SelectTrigger>
        <SelectContent className="p-0">
          <SelectItem value="todos">
            <div className="flex cursor-pointer items-center gap-2">
              <ArrowDownAZ className="h-4 w-4" />
              <span>Todos</span>
            </div>
          </SelectItem>
          <SelectItem value="despesa">
            <div className="flex cursor-pointer items-center gap-2">
              <TrendingDown className="h-4 w-4 text-destructive" />
              <span>Despesa</span>
            </div>
          </SelectItem>
          <SelectItem value="receita">
            <div className="flex cursor-pointer items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span>Receita</span>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>

      <Button
        type="submit"
        variant="secondary"
        className="ml-2 rounded-full"
        size="xs"
      >
        <Search className="mr-2 h-4 w-4" />
        Filtrar Resultados
      </Button>
      <Button
        type="button"
        variant="outline"
        size="xs"
        className="ml-2 rounded-full"
      >
        <X className="mr-2 h-4 w-4" /> Remover Filtros
      </Button>
    </form>
  )
}
