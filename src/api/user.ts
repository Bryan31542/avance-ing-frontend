import axios from './axios'

export const getAllUsers = async (page: number, pageSize: number) =>
  axios.get('/users', {
    params: {
      page,
      pageSize
    }
  })

export const addUser = async (data: any) => axios.post('/users', data)
