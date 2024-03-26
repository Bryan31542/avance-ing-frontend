export interface Role {
  id: number
  name: string
}

export type RoleForm = Omit<Role, 'id'>
