import { Helmet } from 'react-helmet-async'

export function Analysis() {
  return (
    <>
      <Helmet title="Análises" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Análises</h1>
      </div>
    </>
  )
}
