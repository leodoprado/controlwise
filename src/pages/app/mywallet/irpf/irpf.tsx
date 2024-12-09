import { Helmet } from 'react-helmet-async'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function WExportIRPF() {
  return (
    <>
      <Helmet title="IRPF" />
      <div className="flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Ações</CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </>
  )
}
