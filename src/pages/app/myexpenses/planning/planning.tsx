import { Helmet } from 'react-helmet-async'

import nocontent from '@/assets/nc-planning.svg'
import { NoContent } from '@/pages/no-content'

export function EPlanningPage() {
  return (
    <>
      <Helmet title="Planejamentos" />
      <NoContent
        imageSrc={nocontent}
        contentTitle="Ops! Você ainda não possui planejamentos registrados."
      />
    </>
  )
}
