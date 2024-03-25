import axios from './axios'

export const getAllUsers = async () => axios.get('/users')
