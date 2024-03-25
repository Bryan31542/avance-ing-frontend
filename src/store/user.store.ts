import { create } from 'zustand'
import { getAllUsers } from '../api/user'

export const useUserStore = create<UserState>(set => ({
  users: [],
  fetchUsers: async (page: number, pageSize: number) => {
    try {
      const res = await getAllUsers(page, pageSize)
      set({ users: res.data })
    } catch (error) {
      console.error('Failed to fetch users: ', error)
    }
  }
}))

interface UserState {
  users: []
  fetchUsers: (page: number, pageSize: number) => Promise<void>
}
