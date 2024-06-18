import { BrowserRouter } from 'react-router-dom'
import { AuthRoutes } from './auth.routes'
import { ClientRoutes } from './client.routes'
import { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/use-auth-context'

export function Routes() {
  const [userLogged, setUserLogged] = useState(
    localStorage.getItem('@explorer-food:token'),
  )
  const { user } = useAuthContext()

  useEffect(() => {
    setUserLogged(localStorage.getItem('@explorer-food:token'))
  }, [user])

  return (
    <BrowserRouter>
      {userLogged ? <ClientRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}
