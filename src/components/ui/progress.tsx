import * as ProgressPrimitive from '@radix-ui/react-progress'
import * as React from 'react'

import { cn } from '@/lib/utils'

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    value?: number
  }
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      'relative h-6 w-full overflow-hidden rounded-full border border-gray-300 bg-secondary', // Borda e estilos principais
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
    <span className="absolute inset-0 flex items-center justify-center px-2 font-semibold text-black">
      {value}%
    </span>
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
