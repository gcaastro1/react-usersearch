// react
import React, { createContext, useState, useEffect } from 'react'
// api
import { login } from '../services/login'
import { createUser } from '../services/createUser'
// router-dom
import { useNavigate } from 'react-router-dom'
import { getUser } from '../services/getUser'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [registerUser, setRegisterUser] = useState(false)
  const [user, setUser] = useState(null)
  //const navigate = useNavigate()

  const submitLogin = async (data) => {
    await login(data, setLoading, setUser)
  }

  const submitRegister = async (data) => {
    delete data.passwordConfirmation
    await createUser(data, setLoading, setRegisterUser)
  }

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('@TOKEN')

      if(!token) {
        setLoading(false)
        return
      }
      getUser(setUser, setLoading)
    }
    loadUser()
  }, [])

  // modules object list
  const modules = [
    {
      label: 'Selecione um Módulo',
      value: '',
    },
    {
      label: 'Primeiro Módulo',
      value: 'Primeiro Módulo',
    },
    {
      label: 'Segundo Módulo',
      value: 'Segundo Módulo',
    },
    {
      label: 'Terceiro Módulo',
      value: 'Terceiro Módulo',
    },
    {
      label: 'Quarto Módulo',
      value: 'Quarto Módulo',
    },
    {
      label: 'Quinto Módulo',
      value: 'Quinto Módulo',
    },
    {
      label: 'Sexto Módulo',
      value: 'Sexto Módulo',
    },
  ]

  return (
    <UserContext.Provider value={{ submitLogin, submitRegister, registerUser, modules, user, setUser, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  )
}
