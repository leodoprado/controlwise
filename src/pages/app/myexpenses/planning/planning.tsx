import { Helmet } from 'react-helmet-async'

export function EPlanningPage() {
  return (
    <>
      <Helmet title="Planejamentos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Planejamentos</h1>
      </div>
    </>
  )
}
