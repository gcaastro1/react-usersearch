// api
import { api } from './api'
// toast
import { toast } from 'react-toastify'

export const createUser = async (body, setLoading, setRegisterUser) => {
  try {
    setLoading(true)
    const response = await api.post('users', body)

    toast.success('Conta criada com sucesso.')
    setRegisterUser(true)
  } catch (error) {
    toast.error('Erro ao criar conta.')
  } finally {
    setLoading(false)
  }
}
