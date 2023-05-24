import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'
import { createTech } from '../services/createTech'
import { deleteTech } from '../services/deleteTech'
import { getUser } from '../services/getUser'
import { updateTech } from '../services/updateTech'
import { UserContext } from './UserContext'

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
  const { user, setUser, setLoading } = useContext(UserContext)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalType, setModalType] = useState('')
  const [techs, setTech] = useState(user.techs)
  const [currTech, setCurrTech] = useState({ title: '', status: '' })

  useEffect(() => {
    if (modalIsOpen === false) {
      setCurrTech({ id: '', title: '', status: '' })
    }
    
  }, [modalIsOpen])

  const techSubmit = async (data) => {
    if (modalType === 'createTech') {
      await createTech(data, techs, setTech)
    } else if (modalType === 'updateTech') {
      console.log(data)
      await updateTech(data, techs, setTech)
    }
    setIsOpen(false)
  }

  const techDelete = async (id) => {
    await deleteTech(id, techs, setTech)
    setIsOpen(false)
    setCurrTech(null)
  }

  const status = [
    {
      label: 'Selecione um Módulo',
      value: '',
    },
    {
      label: 'Iniciante',
      value: 'Iniciante',
    },
    {
      label: 'Intermediário',
      value: 'Intermediário',
    },
    {
      label: 'Avançado',
      value: 'Avançado',
    },
  ]

  return (
    <TechContext.Provider
      value={{
        modalIsOpen,
        setIsOpen,
        status,
        modalType,
        setModalType,
        techSubmit,
        techs,
        currTech,
        setCurrTech,
        techDelete,
      }}
    >
      {children}
    </TechContext.Provider>
  )
}
