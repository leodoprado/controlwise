import { ArrowDownAZ, TrendingDown, TrendingUp } from 'lucide-react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function FilterTransaction() {
  return (
    <form className="ml-2 flex items-center">
      <Select defaultValue="todos">
        <SelectTrigger className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">
          <SelectValue defaultValue="todos" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="todos">
            <div className="flex items-center gap-1">
              <ArrowDownAZ className="h-4 w-4" />
              <span>Todos</span>
            </div>
          </SelectItem>
          <SelectItem value="despesa">
            <div className="flex items-center gap-1">
              <TrendingDown className="h-4 w-4 text-destructive" />
              <span>Despesa</span>
            </div>
          </SelectItem>
          <SelectItem value="receita">
            <div className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span>Receita</span>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </form>
  )
}
