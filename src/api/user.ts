import axios from './axios'

export const getAllUsers = async (page: number, pageSize: number) =>
  axios.get('/users', {
    params: {
      page,
      pageSize
    }
  })

export const getUser = async (id: string) => axios.get(`/users/${id}`)

export const addUser = async (data: any) => axios.post('/users', data)

export const putUser = async (id: string, data: any) =>
  axios.put(`/users/${id}`, data)

export const deleteUser = async (id: string) => axios.delete(`/users/${id}`)
