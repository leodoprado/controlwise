import { Helmet } from 'react-helmet-async'

export function Dashboard() {
  return (
    <>
      <Helmet title="Painel" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Painel</h1>
      </div>
    </>
  )
}
