import { Helmet } from 'react-helmet-async'

import nocontent from '@/assets/nc-goals.svg'
import { NoContent } from '@/pages/no-content'

export function EGoalsPage() {
  return (
    <>
      <Helmet title="Metas" />
      <NoContent
        contentTitle="Ops! Você ainda não possui metas registradas."
        imageSrc={nocontent}
      />
    </>
  )
}
