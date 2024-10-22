import { Helmet } from 'react-helmet-async'

import nocontent from '@/assets/nc-plann.svg'
import { NoContent } from '@/pages/no-content'

import { AddPlanning } from '../_components/add-planning'

export function EPlanningPage() {
  return (
    <>
      <Helmet title="Planejamentos" />
      <NoContent
        imageSrc={nocontent}
        contentTitle="Ops! Sem planejamentos registrados."
        tooltipContent={
          <>
            Aqui você define e visualiza novos planejamentos.
            <br />
            Fique por dentro dos seus planejamentos mensais.
          </>
        }
        buttonText="Adicionar Novo Planejamento"
        dialogContent={<AddPlanning />}
      ></NoContent>
    </>
  )
}
