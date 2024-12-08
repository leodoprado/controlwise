import { Info, Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface NoContentProps {
  contentTitle: string
  imageSrc: string
  children?: React.ReactNode
  tooltipContent?: React.ReactNode
  buttonText?: string
  dialogContent?: React.ReactNode
}

export function NoContent({
  contentTitle,
  imageSrc,
  children,
  tooltipContent,
  buttonText,
  dialogContent,
}: NoContentProps) {
  return (
    <>
      <Card className="flex h-full min-h-screen flex-col items-center justify-center rounded-lg border text-center shadow-lg">
        <h1 className="mb-2 flex items-center gap-2 text-xl font-semibold uppercase">
          {contentTitle}
          {tooltipContent && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-flex cursor-pointer items-center">
                    <Info className="h-5 w-5 transition-colors hover:text-primary" />
                  </span>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  align="center"
                  className="rounded-md bg-gray-800 p-2 text-start normal-case text-white shadow-lg"
                >
                  {tooltipContent}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </h1>

        {buttonText && (
          <div className="mb-4 mt-2 flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant={'outline'}
                  className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-md transition-shadow duration-300 hover:shadow-lg"
                >
                  {buttonText}
                  <Plus className="h-5 w-5" />
                </Button>
              </DialogTrigger>

              {dialogContent}
            </Dialog>
          </div>
        )}

        <img
          src={imageSrc}
          alt={contentTitle}
          className="h-auto max-h-[60vh] w-auto max-w-[80vw] object-contain"
        />
        {children && <div className="mt-4">{children}</div>}
      </Card>
    </>
  )
}
