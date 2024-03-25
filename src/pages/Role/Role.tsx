import { useEffect } from 'react'
import { useRoleStore } from '../../store/role.store'
import RoleCard from '../../components/Role/RoleCard'
import { Link } from 'react-router-dom'

const Role = () => {
  const { roles, fetchRoles } = useRoleStore()

  useEffect(() => {
    fetchRoles()
  }, [fetchRoles])

  return (
    <div className="flex flex-col items-center justify-center w-screen overflow-y-auto">
      <div className="absolute top-10 w-fit flex justify-center items-center gap-24">
        <h1 className="text-4xl font-bold">Roles</h1>
        <Link to="/users/add">
          <button className="rounded-full bg-purple-500 w-32 h-10 text-white font-bold">
            Add Role
          </button>
        </Link>
      </div>

      {roles.map((role: any) => (
        <RoleCard key={role.id} name={role.name} />
      ))}

      <div className="absolute bottom-10 flex justify-evenly gap-72 w-auto">
        <button
          className="bg-zinc-500 text-white font-bold rounded-full w-32 h-10"
          //onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          className="bg-zinc-500 text-white font-bold rounded-full w-32 h-10"
          // onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Role
