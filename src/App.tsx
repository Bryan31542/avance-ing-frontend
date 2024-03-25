import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import User from './pages/User/User'
import Sidebar from './components/Sidebar'
import { ProtectedRoute } from './Routes/ProtectedRoute'
import { useAuthStore } from './store/auth.store'
import Role from './pages/Role/Role'

const App = () => {
  const { isLogged } = useAuthStore()
  return (
    <BrowserRouter>
      <main className="h-screen w-screen flex items-stretch ">
        {isLogged && <Sidebar />}
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/users" element={<User />} />
            <Route path="/roles" element={<Role />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
