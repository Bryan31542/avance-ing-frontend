import { create } from 'zustand'
import { addUser, deleteUser, getAllUsers, getUser, putUser } from '../api/user'

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
  fetchUser: async (id: string) => {
    try {
      const res = await getUser(id)
      set({ user: res.data })
    } catch (error) {
      console.error('Failed to fetch user: ', error)
    }
  },
  createUser: async (data: any) => {
    try {
      await addUser(data)
    } catch (error) {
      console.error('Failed to create user: ', error)
    }
  },
  updateUser: async (id: string, data: any) => {
    try {
      const res = await putUser(id, data)
      console.log('res', res)
    } catch (error) {
      console.error('Failed to update user: ', error)
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
  user?: any
  fetchUsers: (page: number, pageSize: number) => Promise<void>
  createUser: (data: any) => Promise<void>
  fetchUser: (id: string) => Promise<void>
  updateUser: (id: string, data: any) => Promise<void>
  deleteUser: (id: string) => Promise<void>
}
