import { Auth } from './auth.interface'
import { Role } from './role.interface'

export interface User extends Auth {
  id: number
  name: string
  email: string
  roles: Role[]
}

export type UserForm = Omit<User, 'id'> & { roles: number[] }
