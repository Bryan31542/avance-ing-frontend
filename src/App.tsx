import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Auth/Login'
import UserForm from './pages/User/UserForm'
import User from './pages/User/User'
import Sidebar from './components/Sidebar'
import { ProtectedRoute } from './routes/ProtectedRoute'
import { useAuthStore } from './store/auth.store'
import Role from './pages/Role/Role'
import RoleForm from './pages/Role/RoleForm'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const { isLogged } = useAuthStore()
  return (
    <BrowserRouter>
      <main className="h-screen w-screen flex items-stretch ">
        <ToastContainer />
        {isLogged && <Sidebar />}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/users" element={<User />} />
            <Route path="/users/add" element={<UserForm />} />
            <Route path="/users/edit/:id" element={<UserForm />} />
            <Route path="/roles" element={<Role />} />
            <Route path="/roles/add" element={<RoleForm />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
