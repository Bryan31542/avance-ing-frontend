import { create } from 'zustand'
import { addRole, getAllRoles } from '../api/role'
import { RoleForm } from '../interfaces/role.interface'
import { toast } from 'react-toastify'

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
      await addRole(data)
      toast.success('Role created successfully')
    } catch (error) {
      toast.error('Role not valid')
      console.error('Failed to create role: ', error)
    }
  }
}))

interface RoleState {
  roles: []
  fetchRoles: () => Promise<void>
  createRole: (data: RoleForm) => Promise<void>
}
