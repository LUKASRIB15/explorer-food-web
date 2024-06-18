import { useContext } from 'react'
import { AuthContext } from '../contexts/auth-context'

export function useAuthContext() {
  const context = useContext(AuthContext)

  return context
}
