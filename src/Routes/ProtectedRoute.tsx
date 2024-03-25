import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../store/auth.store'

export const ProtectedRoute = () => {
  const { isLogged } = useAuthStore()

  if (!isLogged) {
    return <Navigate to="/login" replace />
  }
  return <Outlet />
}
