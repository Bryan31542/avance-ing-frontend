import { create } from 'zustand'
import { loginRequest, logoutRequest, verifyToken } from '../api/auth'
import Cookie from 'js-cookie'
import { toast } from 'react-toastify'
import { Auth } from '../interfaces/auth.interface'

interface AuthState {
  isLogged: boolean
  user: string
  token: string
  login: (data: Auth) => Promise<void>
  checkAuth: () => void
  logout: () => void
}

export const useAuthStore = create<AuthState>(set => ({
  isLogged: false,
  token: Cookie.get('token') || '',
  user: '',
  login: async (data: Auth) => {
    try {
      const res = await loginRequest(data)
      const { token, ...userData } = res.data
      toast.success('Logged in successfully')
      set({ isLogged: true, user: userData.id, token }) // Set token and user data in the store
    } catch (error: any) {
      toast.error(error.response.data)
      console.error('Login failed: ', error.response.data)
    }
  },
  checkAuth: async () => {
    try {
      const res = await verifyToken()
      if (!res.data) return set({ isLogged: false, user: '' })
      set({ isLogged: true, user: res.data.id })
    } catch (error) {
      set({ isLogged: false, user: '' })
    }
  },
  logout: async () => {
    const response = await logoutRequest()
    if (response.status === 200) {
      set({ isLogged: false, user: '' })
    }
  }
}))
