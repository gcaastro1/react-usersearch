// api
import { api } from './api'
// toast
import { toast } from 'react-toastify'
// router-dom
//import { useNavigate } from 'react-router-dom'

export const login = async (body, setLoading, setUser) => {
  //const navigate = useNavigate()

  try {
    setLoading(true)
    const response = await api.post('sessions ', body)

    const { token, user: userResponse } = response.data

    setUser(userResponse)

    localStorage.setItem('@TOKEN', token)
    localStorage.setItem('@USERID', userResponse.id)

    //navigate('/home')
  } catch (error) {
    toast.error('Senha ou email incorretos.')
  } finally {
    setLoading(false)
  }
}
