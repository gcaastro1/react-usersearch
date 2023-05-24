// react
import { useContext } from "react"
// router-dom
import { Navigate, Outlet, useLocation } from "react-router-dom"
// context
import { UserContext } from "../../contexts/UserContext"


export const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext)
  const location = useLocation

  if(loading) {
    return null
  }

  return user ? <Outlet /> : <Navigate to='/' state={{from: location}} />
}