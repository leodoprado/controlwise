import { Card } from '@/components/ui/card'

interface NoContentProps {
  contentTitle: string
  imageSrc: string
}

export function NoContent({ contentTitle, imageSrc }: NoContentProps) {
  return (
    <>
      <Card className="flex h-full min-h-screen flex-col items-center justify-center rounded-lg border text-center shadow-lg">
        <h1 className="mb-2 text-xl font-semibold uppercase">{contentTitle}</h1>
        <img
          src={imageSrc}
          alt={contentTitle}
          className="h-auto max-h-[60vh] w-auto max-w-[80vw] object-contain"
        />
      </Card>
    </>
  )
}
