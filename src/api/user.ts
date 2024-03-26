import { UserForm } from '../interfaces/user.interface'
import axios from './axios'

export const getAllUsers = async (page: number, pageSize: number) =>
  axios.get('/users', {
    params: {
      page,
      pageSize
    }
  })

export const getUser = async (id: string) => axios.get(`/users/${id}`)

export const addUser = async (data: UserForm) => axios.post('/users', data)

export const putUser = async (id: string, data: UserForm) =>
  axios.put(`/users/${id}`, data)

export const deleteUser = async (id: string) => axios.delete(`/users/${id}`)

export const addRoleToUser = async (userId: string, roleId: string) =>
  axios.get(`/users/${userId}/roles/${roleId}`)

export const deleteRoleToUser = async (userId: string, roleId: string) =>
  axios.delete(`/users/${userId}/roles/${roleId}`)
