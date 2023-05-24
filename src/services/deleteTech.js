// api
import { api } from './api'
// toast
import { toast } from 'react-toastify'

export const deleteTech = async (id, techs, setTech) => {
  const token = localStorage.getItem('@TOKEN')
  try {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const response = await api.delete(`users/techs/${id}`)

    const filteredTechs = techs.filter((tech) => tech.id != id)

    setTech(filteredTechs)

    toast.success('Tecnologia deletada com sucesso.')
  } catch (error) {
    console.log(error)
    toast.error('Erro ao deletar tecnologia.')
  }
}
