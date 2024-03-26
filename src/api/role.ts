import { RoleForm } from '../interfaces/role.interface'
import axios from './axios'

export const getAllRoles = async () => axios.get('/roles')

export const addRole = async (data: RoleForm) => axios.post('/roles', data)
