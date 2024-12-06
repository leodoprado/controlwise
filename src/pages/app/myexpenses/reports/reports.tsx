import {
  Document,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'
import React from 'react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'

// Estilos personalizáveis para o relatório
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },
  section: {
    margin: 10,
    padding: 10,
    borderBottom: '1px solid #ccc',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
})

// Componente para o conteúdo do relatório
function ReportContent() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.title}>
          <Text>Relatório Simples</Text>
        </View>
        <View style={styles.section}>
          <Text>Seção 1: Informações importantes</Text>
        </View>
        <View style={styles.section}>
          <Text>Seção 2: Dados adicionais</Text>
        </View>
      </Page>
    </Document>
  )
}

// Página de relatórios
export function EReportsPage() {
  const [showReport, setShowReport] = React.useState(false)

  return (
    <>
      <Helmet title="Relatórios" />
      <Button onClick={() => setShowReport(!showReport)}>
        {showReport ? 'Fechar Relatório' : 'Gerar Relatório'}
      </Button>
      {showReport && (
        <div style={{ marginTop: 20 }}>
          <PDFViewer width="100%" height="600">
            <ReportContent />
          </PDFViewer>
        </div>
      )}
    </>
  )
}
