import axios from './axios'

export const getAllRoles = async () => axios.get('/roles')
