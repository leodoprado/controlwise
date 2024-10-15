import { useQuery } from '@tanstack/react-query'
import { createContext, useContext, useEffect, useState } from 'react'

import { authenticateUser } from '@/api/authenticate-user'
import { getProfile as getProfileAPI } from '@/api/get-profile'

interface AuthContextType {
  isAuth: boolean
  user: {
    email: string
    name: string | null
  } | null
  login: (props: {
    email: string
    password: string
  }) => Promise<{ accessToken: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'))

  const { data: result, refetch } = useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      if (isAuth) {
        const response = await getProfileAPI()
        return response
      }
      return null
    },
  })

  useEffect(() => {
    if (isAuth) refetch()
  }, [isAuth, refetch])

  const user = result || null

  async function login({
    email,
    password,
  }: {
    email: string
    password: string
  }) {
    try {
      const { accessToken } = await authenticateUser({ email, password })
      localStorage.setItem('token', JSON.stringify(accessToken))
      setIsAuth(true)

      return { accessToken }
    } catch (err) {
      throw new Error()
    }
  }

  function logout() {
    localStorage.removeItem('token')
    setIsAuth(false)
  }

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within a useAuthProvider')
  }
  return context
}
