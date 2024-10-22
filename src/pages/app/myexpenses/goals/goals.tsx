import { Helmet } from 'react-helmet-async'

import nocontent from '@/assets/nc-goals.svg'
import { NoContent } from '@/pages/no-content'

import { AddGoals } from '../_components/add-goals'

export function EGoalsPage() {
  return (
    <>
      <Helmet title="Metas" />
      <NoContent
        contentTitle="Ops! Sem metas registradas."
        imageSrc={nocontent}
        tooltipContent={
          <>
            Aqui você define e visualiza novas metas.
            <br />
            Fique por dentro das metas pretendidas.
          </>
        }
        buttonText="Adicionar Nova Meta"
        dialogContent={<AddGoals />}
      ></NoContent>
    </>
  )
}
