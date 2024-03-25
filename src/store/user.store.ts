import { create } from 'zustand'
import { getAllUsers } from '../api/user'

export const useUserStore = create<UserState>((set, get) => ({
  users: [],
  fetchUsers: async () => {
    try {
      const res = await getAllUsers()
      set({ users: res.data })
    } catch (error) {
      console.error('Failed to fetch users: ', error)
    }
  }
}))

interface UserState {
  users: []
  fetchUsers: () => Promise<void>
}
