import axios from './axios'

export const loginRequest = async (data: any) => axios.post('/auth/login', data)

export const verifyToken = async () => axios.get('/auth/verify')

export const logoutRequest = async () => axios.get('/auth/logout')
