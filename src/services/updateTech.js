// api
import { api } from './api'
// toast
import { toast } from 'react-toastify'
import { getUser } from './getUser'

export const updateTech = async (data, techs, setTech) => {
  const token = localStorage.getItem('@TOKEN')
  const { id, status } = data

  const body = { status }

  try {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const response = await api.put(`users/techs/${id}`, body)

    const index = techs.findIndex((tech) => tech.id === id)

    techs[index] = data

    setTech(techs)
    toast.success('Tecnologia editada com sucesso.')
  } catch (error) {
    console.log(error)
    toast.error('Erro ao editar tecnologia.')
  }
}
