import { Helmet } from 'react-helmet-async'

import nocontent from '@/assets/nc-analysiss.svg'
import { NoContent } from '@/pages/no-content'

export function EAnalysisPage() {
  return (
    <>
      <Helmet title="Análises" />
      <NoContent
        contentTitle="Ops! Sem Análises Realizadas."
        imageSrc={nocontent}
      />
    </>
  )
}
