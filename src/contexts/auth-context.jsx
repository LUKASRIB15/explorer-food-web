import { createContext, useState, useEffect } from 'react'
import { api } from '../libs/axios/api'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  async function connectUser(token) {
    localStorage.setItem('@explorer-food:token', token)
    api.defaults.headers.common.Authorization = `Bearer ${token}`

    const getUser = await api.get('/users')

    localStorage.setItem('@explorer-food:user', JSON.stringify(getUser.data))
    setUser(getUser.data)
  }

  async function signIn({ email, password }) {
    const access = await api.post('/sessions', { email, password })

    await connectUser(access.data.token)
  }

  async function signUp({ name, email, password }) {
    const access = await api.post('/users', { name, email, password })

    await connectUser(access.data.token)
  }

  useEffect(() => {
    const token = localStorage.getItem('@explorer-food:token')
    const user = localStorage.getItem('@explorer-food:user')

    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setUser(JSON.parse(user))
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, signUp, user }}>
      {children}
    </AuthContext.Provider>
  )
}
