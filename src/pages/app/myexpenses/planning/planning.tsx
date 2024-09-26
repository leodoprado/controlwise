import { Helmet } from 'react-helmet-async'

import nocontent from '@/assets/nc-plann.svg'
import { NoContent } from '@/pages/no-content'

export function EPlanningPage() {
  return (
    <>
      <Helmet title="Planejamentos" />
      <NoContent
        imageSrc={nocontent}
        contentTitle="Ops! Sem planejamentos registrados."
      />
    </>
  )
}
