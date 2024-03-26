import { create } from 'zustand'
import { addRole, getAllRoles } from '../api/role'
import { RoleForm } from '../interfaces/role.interface'

export const useRoleStore = create<RoleState>(set => ({
  roles: [],
  fetchRoles: async () => {
    try {
      const res = await getAllRoles()
      set({ roles: res.data })
    } catch (error) {
      console.error('Failed to fetch users: ', error)
    }
  },
  createRole: async (data: RoleForm) => {
    try {
      const res = await addRole(data) // Assuming addRole expects an object with 'name' property
      console.log(res)
    } catch (error) {
      console.error('Failed to create role: ', error)
    }
  }
}))

interface RoleState {
  roles: []
  fetchRoles: () => Promise<void>
  createRole: (data: RoleForm) => Promise<void>
}
