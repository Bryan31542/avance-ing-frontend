import { create } from 'zustand'
import { getAllRoles } from '../api/role'

export const useRoleStore = create<RoleState>(set => ({
  roles: [],
  fetchRoles: async () => {
    try {
      const res = await getAllRoles()
      set({ roles: res.data })
    } catch (error) {
      console.error('Failed to fetch users: ', error)
    }
  }
}))

interface RoleState {
  roles: []
  fetchRoles: () => Promise<void>
}
