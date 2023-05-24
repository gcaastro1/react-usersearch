// api
import { api } from './api'
// toast
import { toast } from 'react-toastify'

export const createTech = async (body, techs, setTech) => {
  const token = localStorage.getItem('@TOKEN')
  try {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const response = await api.post('users/techs', body)

    const { data } = response

    setTech([...techs, data])
    toast.success('Tecnologia criada com sucesso.')
  } catch (error) {
    console.log(error)
    toast.error('Erro ao cadastrar nova tecnologia.')
  }
}
