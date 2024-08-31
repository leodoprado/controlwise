import { Helmet } from 'react-helmet-async'

export function Reports() {
  return (
    <>
      <Helmet title="Relatórios" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Relatórios</h1>
      </div>
    </>
  )
}
