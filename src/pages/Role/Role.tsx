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
        <Link to="/roles/add">
          <button className="rounded-full bg-purple-500 w-32 h-10 text-white font-bold">
            Add Role
          </button>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {roles.map((role: any) => (
          <RoleCard key={role.id} name={role.name} />
        ))}
      </div>
    </div>
  )
}

export default Role
