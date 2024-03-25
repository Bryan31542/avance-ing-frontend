import { useEffect, useState } from 'react'
import { useUserStore } from '../../store/user.store'
import UserCard from '../../components/User/UserCard'
import { Link } from 'react-router-dom'

const User = () => {
  const { users, fetchUsers } = useUserStore()

  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchUsers(currentPage, 5)
  }, [fetchUsers, currentPage])

  const handleNext = () => {
    if (users.length < 5) {
      return
    }

    setCurrentPage(currentPage + 1)
  }

  const handlePrevious = () => {
    if (currentPage === 1) {
      return
    }

    setCurrentPage(currentPage - 1)
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="absolute top-10 w-fit flex justify-center items-center gap-24">
        <h1 className="text-4xl">Users</h1>
        <Link to="/users/add">
          <button className="rounded-full bg-purple-500 w-32 h-10 text-white font-bold">
            Add User
          </button>
        </Link>
      </div>

      {users.map((user: any) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          role="Admin"
        />
      ))}

      <div className="absolute bottom-10 flex justify-evenly gap-96 w-auto">
        <button
          className="bg-zinc-500 text-white font-bold rounded-full w-32 h-10"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="bg-zinc-500 text-white font-bold rounded-full w-32 h-10"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default User
