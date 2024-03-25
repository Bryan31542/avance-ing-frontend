import { Link } from 'react-router-dom'

const UserCard = ({
  name,
  email,
  role
}: {
  name: string
  email: string
  role: string
}) => {
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
        <Link to={`/edit`}>
          <button className="rounded-full bg-blue-500 w-32 h-10 text-white font-bold">
            Edit
          </button>
        </Link>
        <Link to={`/edit`}>
          <button className="rounded-full bg-red-500 w-32 h-10 text-white font-bold">
            Delete
          </button>
        </Link>
      </div>
    </div>
  )
}

export default UserCard
