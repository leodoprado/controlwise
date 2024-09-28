import { Helmet } from 'react-helmet-async'

import imgnocontent from '@/assets/nc-repo.svg'
import { NoContent } from '@/pages/no-content'

export function EReportsPage() {
  return (
    <>
      <Helmet title="Relatórios" />
      <NoContent
        contentTitle="Ops! Sem Relatórios Gerados."
        imageSrc={imgnocontent}
      />
    </>
  )
}
