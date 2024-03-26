import { Auth } from '../interfaces/auth.interface'
import axios from './axios'

export const loginRequest = async (data: Auth) =>
  axios.post('/auth/login', data)

export const verifyToken = async () => axios.get('/auth/verify')

export const logoutRequest = async () => axios.get('/auth/logout')
