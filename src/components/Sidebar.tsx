import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/auth.store'

const Sidebar = () => {
  const { logout } = useAuthStore()
  return (
    <div className="bg-zinc-900 text-white h-full w-min px-5 flex flex-col sticky bottom-0 left-0 top-0">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Navigation</h1>
      </div>
      <nav className="flex-1 my-8">
        <ul className="space-y-2">
          <li>
            <Link to="/users" className="block py-2 px-4">
              Users
            </Link>
          </li>
          <li>
            <Link to="/roles" className="block py-2 px-4">
              Roles
            </Link>
          </li>
          <li className="block py-2 px-4 absolute bottom-8">
            <button onClick={logout}>Log out</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
