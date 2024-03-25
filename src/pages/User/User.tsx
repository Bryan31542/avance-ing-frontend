import { useEffect } from 'react'
import { useUserStore } from '../../store/user.store'

const User = () => {
  const { users, fetchUsers } = useUserStore()


  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  console.log(users)

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="absolute text-4xl top-10 w-fit">Users</h1>

      {users.map((user: any) => (
        <div key={user.id} className="m-5 flex">
          <h1>{user.name}</h1>
          <h1>{user.username}</h1>
          <h1>{user.email}</h1>
        </div>
      ))}
    </div>
  )
}

export default User
