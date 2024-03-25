import { useEffect } from 'react'
import { useRoleStore } from '../../store/role.store'

const Role = () => {
  const { roles, fetchRoles } = useRoleStore()

  console.log(roles)

  useEffect(() => {
    fetchRoles()
  }, [fetchRoles])

  return <div>Role</div>
}

export default Role
