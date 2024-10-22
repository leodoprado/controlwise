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
        tooltipContent={
          <>
            Aqui você realiza uma análise sob um determinado período.
            <br />
            Fique por dentro dos detalhes minunciosos de suas despesas.
          </>
        }
        buttonText="Realizar Nova Análise"
      />
    </>
  )
}
