import { Link } from 'react-router-dom'
import { useUserStore } from '../../store/user.store'

const UserCard = ({
  id,
  name,
  email,
  roles
}: {
  id: string
  name: string
  email: string
  roles: string[]
}) => {
  const { deleteUser } = useUserStore()

  return (
    <div className="flex flex-col justify-center items-center w-1/4 h-max py-8 bg-zinc-500 rounded-md shadow-md p-4">
      <p className="text-lg font-bold text-white font-dm-sans mb-2">{name}</p>
      <p className="text-lg font-bold text-white font-dm-sans mb-2">{email}</p>
      {/* Map over roles to render each role */}
      <div className="flex flex-wrap gap-2 w-2/3 justify-center items-center">
        {roles.map((role, index) => (
          <p key={index} className="text-lg font-bold text-black font-dm-sans">
            {role}
          </p>
        ))}
      </div>
      <div className="mt-4 flex gap-4">
        <Link to={`/users/edit/${id}`}>
          <button className="rounded-full bg-blue-500 w-24 h-10 text-white font-bold">
            Edit
          </button>
        </Link>
        <button
          className="rounded-full bg-red-500 w-24 h-10 text-white font-bold"
          onClick={() => deleteUser(id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default UserCard
