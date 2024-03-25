import { create } from 'zustand'
import { addUser, deleteUser, getAllUsers } from '../api/user'

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
      await addUser(data)
    } catch (error) {
      console.error('Failed to create user: ', error)
    }
  },
  deleteUser: async (id: string) => {
    try {
      await deleteUser(id)
      set((state: UserState) => {
        return {
          ...state,
          users: state.users.filter((user: any) => user.id !== id)
        }
      })
    } catch (error) {
      console.error('Failed to delete user: ', error)
    }
  }
}))

interface UserState {
  users: any[]
  fetchUsers: (page: number, pageSize: number) => Promise<void>
  createUser: (data: any) => Promise<void>
  deleteUser: (id: string) => Promise<void>
}
