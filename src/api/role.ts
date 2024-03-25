import axios from './axios'

export const getAllRoles = async () => axios.get('/roles')

export const addRole = async (data: any) => axios.post('/roles', data)
