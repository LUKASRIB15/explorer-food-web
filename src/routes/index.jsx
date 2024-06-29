import { BrowserRouter } from 'react-router-dom'
import { AuthRoutes } from './auth.routes'
import { ClientRoutes } from './client.routes'
import { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/use-auth-context'
import { AdminRoutes } from './admin.routes'

function RoutesForRole({role}){
  if(role === "admin"){
    return <AdminRoutes />
  }else{
    return <ClientRoutes />
  }
}

export function Routes() {
  const [userLogged, setUserLogged] = useState(
    localStorage.getItem('@explorer-food:token')
  )
  const [userData, setUserData] = useState(
    localStorage.getItem('@explorer-food:user')
  )
  const { user } = useAuthContext()


  useEffect(() => {
    setUserLogged(localStorage.getItem('@explorer-food:token'))
    setUserData(localStorage.getItem('@explorer-food:user'))
  }, [user])


  return (
    <BrowserRouter>
      {
        userLogged && userData? 
          <RoutesForRole role={JSON.parse(userData).role} /> 
        : 
          <AuthRoutes />
      }
    </BrowserRouter>
  )
}
