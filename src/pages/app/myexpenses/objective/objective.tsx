import { Helmet } from 'react-helmet-async'

import nocontent from '@/assets/nc-goals.svg'
import { NoContent } from '@/pages/no-content'

import { AddObjective } from '../_components/add-objective'

export function EObjectivePage() {
  return (
    <>
      <Helmet title="Objetivos" />
      <NoContent
        contentTitle="Ops! Sem objetivos registrados."
        imageSrc={nocontent}
        tooltipContent={
          <>
            Aqui você define e visualiza novos objetivos.
            <br />
            Fique por dentro dos objetivos pretendidos.
          </>
        }
        buttonText="Adicionar Novo Objetivo"
        dialogContent={<AddObjective />}
      ></NoContent>
    </>
  )
}
