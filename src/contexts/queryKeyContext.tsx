import React, { createContext, useContext, useState } from 'react'

interface QueryKeyContextValue {
  currentKeyMonth: string
  setCurrentKeyMonth: (key: string) => void
}

const QueryKeyContext = createContext<QueryKeyContextValue | undefined>(
  undefined,
)

export const QueryKeyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const currentMonth = String(new Date().getMonth() + 1)
  const [currentKeyMonth, setCurrentKeyMonth] = useState(currentMonth)

  return (
    <QueryKeyContext.Provider value={{ currentKeyMonth, setCurrentKeyMonth }}>
      {children}
    </QueryKeyContext.Provider>
  )
}

export const useQueryKey = () => {
  const context = useContext(QueryKeyContext)
  if (!context) {
    throw new Error('useQueryKey must be used within a QueryKeyProvider')
  }
  return context
}
