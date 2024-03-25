import { Link } from 'react-router-dom'
import { useUserStore } from '../../store/user.store'

const UserCard = ({
  id,
  name,
  email,
  role
}: {
  id: string
  name: string
  email: string
  role: string
}) => {
  const { deleteUser } = useUserStore()

  return (
    <div className="flex items-center justify-center w-max mx-auto mb-6 px-20 h-20 bg-white rounded-full gap-20 drop-shadow-card">
      <div className="flex items-center justify-center gap-10">
        <p className="text-lg font-bold text-black font-dm-sans w-40 text-center">
          {name}
        </p>
        <p className="text-lg font-bold text-black font-dm-sans w-40 text-center">
          {email}
        </p>
        <p className="text-lg font-bold text-black font-dm-sans w-40 text-center">
          {role}
        </p>
        <Link to={`/users/edit/${id}`}>
          <button className="rounded-full bg-blue-500 w-32 h-10 text-white font-bold">
            Edit
          </button>
        </Link>
        <button
          className="rounded-full bg-red-500 w-32 h-10 text-white font-bold"
          onClick={() => deleteUser(id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default UserCard
