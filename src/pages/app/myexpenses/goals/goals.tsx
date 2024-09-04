import { Helmet } from 'react-helmet-async'

export function EGoalsPage() {
  return (
    <>
      <Helmet title="Metas" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Metas</h1>
      </div>
    </>
  )
}
