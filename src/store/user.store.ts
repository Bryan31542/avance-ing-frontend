import { create } from 'zustand'
import { addUser, getAllUsers } from '../api/user'

export const useUserStore = create<UserState>(set => ({
  users: [],
  fetchUsers: async (page: number, pageSize: number) => {
    try {
      const res = await getAllUsers(page, pageSize)
      set({ users: res.data })
    } catch (error) {
      console.error('Failed to fetch users: ', error)
    }
  },
  createUser: async (data: any) => {
    try {
      const res = await addUser(data)
      console.log(res)
    } catch (error) {
      console.error('Failed to create user: ', error)
    }
  }
}))

interface UserState {
  users: []
  fetchUsers: (page: number, pageSize: number) => Promise<void>
  createUser: (data: any) => Promise<void>
}
