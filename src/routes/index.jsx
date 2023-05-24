// router-dom
import { Routes, Route } from 'react-router-dom'
// pages
import { Register } from '../pages/RegisterPage'
import { Login } from '../pages/LoginPage'
import { Home } from '../pages/HomePage'
import { ProtectedRoutes } from '../components/ProtectedRoutes'

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route element={<ProtectedRoutes />}>        
        <Route path='/home' element={<Home />}/>
      </Route>
    </Routes>
  )
}