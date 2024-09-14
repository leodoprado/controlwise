import { Helmet } from 'react-helmet-async'

import { CardWithForm } from './form'

export function CProfilePage() {
  return (
    <>
      <Helmet title="Configurações" />
      <CardWithForm />
    </>
  )
}
