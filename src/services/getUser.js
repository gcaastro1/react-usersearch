// api
import { api } from './api'

export const getUser = async (setUser, setLoading) => {
  const token = localStorage.getItem('@TOKEN')

  try {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const { data } = await api.get(`profile`)
    setUser(data)
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false)
  }
}
