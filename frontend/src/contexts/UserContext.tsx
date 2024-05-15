import { ReactNode, useEffect, useState, useCallback } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'

interface User {
  id: number
  name: string
  email: string
  password: string
}

interface CreateUserInput {
  name: string
  email: string
  password: string
}

interface UserContextType {
  users: User[]
  fetchUsers: (query?: string) => Promise<void>
  createUser: (data: CreateUserInput) => Promise<void>
}

interface UserProviderProps {
  children: ReactNode
}

export const UsersContext = createContext({} as UserContextType)

export function UsersProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<User[]>([])

  const fetchUsers = useCallback(async (query?: string) => {
    const response = await api.get('/user', {
      params: {
        //_sort: 'createdAt',
        //_order: 'desc',
        q: query,
      },
    })

    setUsers(response.data)
  }, [])

  const createUser = useCallback(
    async (data: CreateUserInput) => {
      const { name, email, password} = data
      const response = await api.post('/user', {
        name,
        email,
        password,
      })

      setUsers((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <UsersContext.Provider
      value={{
        users,
        fetchUsers,
        createUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}
