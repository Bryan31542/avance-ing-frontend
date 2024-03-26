import { useForm } from 'react-hook-form'
import { useRoleStore } from '../../store/role.store'
import { useUserStore } from '../../store/user.store'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Register = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm()

  const { roles, fetchRoles } = useRoleStore()
  const { createUser, fetchUser, updateUser } = useUserStore()

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getUser = async () => {
      const res = await fetchUser(params.id || '')
      if ((res as any) !== null) {
        setValue('name', (res as any).name)
        setValue('username', (res as any).username)
        setValue('email', (res as any).email)
        setSelectedRoles((res as any).roles.map((role: any) => role.id))
      }
    }
    fetchRoles()
    if (params.id) {
      getUser()
    }
  }, [params.id, fetchUser, setValue, fetchRoles])

  const onSubmit = handleSubmit(async values => {
    console.log('values', values)
    // Convert the selected roles array to the required format
    const rolesArray = selectedRoles.map(roleId => ({ id: roleId }))
    const formattedValues = {
      ...values,
      roles: rolesArray
    }
    try {
      if (params.id) {
        await updateUser(params.id, formattedValues)
      } else {
        await createUser(formattedValues)
      }
      navigate('/users')
    } catch (error) {
      console.error('Failed to add user: ', error)
    }
  })

  const [selectedRoles, setSelectedRoles] = useState<string[]>([])

  // State to store selected roles
  const handleAddRole = (event: any) => {
    const roleId = event.target.value
    // Check if the role is not already selected
    if (!selectedRoles.includes(roleId)) {
      setSelectedRoles([...selectedRoles, roleId])
    }
  }

  // Function to handle removing a role from selectedRoles
  const handleRemoveRole = (roleIdToRemove: string) => {
    setSelectedRoles(selectedRoles.filter(roleId => roleId !== roleIdToRemove))
  }

  return (
    <div className="bg-zinc-900 w-2/5 p-10 rounded-2xl m-auto">
      <h1 className="text-3xl text-white font-bold mb-2 text-center">
        {params.id ? 'Edit User' : 'Add User'}
      </h1>
      <form onSubmit={onSubmit} autoComplete="off">
        <label className="text-white font-bold">Name</label>
        <input
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
          type="text"
          placeholder="Name"
          {...register('name', { required: '* Name is required' })}
        />
        {errors.name && typeof errors.name.message === 'string' && (
          <p className="text-sm text-red-200 mb-2">{errors.name.message}</p>
        )}
        <label className="text-white font-bold">Username</label>
        <input
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
          type="text"
          placeholder="Username"
          {...register('username', { required: '* Username is required' })}
        />
        {errors.username && typeof errors.username.message === 'string' && (
          <p className="text-sm text-red-200 mb-2">{errors.username.message}</p>
        )}
        <label className="text-white font-bold">Email</label>
        <input
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
          type="email"
          placeholder="Email"
          {...register('email', { required: '* Email is required' })}
        />
        {errors.email && typeof errors.email.message === 'string' && (
          <p className="text-sm text-red-200 mb-2">{errors.email.message}</p>
        )}
        {!params.id && <label className="text-white font-bold">Password</label>}
        {!params.id && (
          <input
            className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
            type="password"
            disabled={!!params.id}
            placeholder="Password"
            {...register('password', { required: '* Password is required' })}
          />
        )}

        {errors.password && typeof errors.password.message === 'string' && (
          <p className="text-sm text-red-200 mb-2">{errors.password.message}</p>
        )}

        <label className="text-white font-bold">Role</label>
        <select
          onChange={handleAddRole}
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
        >
          <option value="">Select Role</option>
          {roles.map((role: any) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>

        {/* Display selected roles */}
        <div>
          <h2 className="my-2">Selected Roles:</h2>
          <ul>
            {selectedRoles.map((roleId: any) => (
              <li key={roleId}>
                {(roles.find((role: any) => role.id === roleId) as any)?.name}
                {/* Display role name */}
                <button onClick={() => handleRemoveRole(roleId)}>
                  <p className="text-red-200 ml-4">Remove</p>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {selectedRoles.length === 0 && (
          <p className="text-sm text-red-200 mb-2">* Role is required</p>
        )}
        <button
          type="submit"
          className="bg-purple-700 text-white font-bold py-2 px-4 rounded w-full mt-6 transition-all duration-1000 ease-in-out hover:bg-purple-500"
        >
          Save
        </button>
        <Link
          to="/users"
          className="text-white font-bold block text-center mt-4"
        >
          <button
            className="bg-red-700 text-white font-bold py-2 px-4 rounded w-full transition-all duration-1000 ease-in-out hover:bg-red-500"
          >
            Cancel
          </button>
        </Link>
      </form>
    </div>
  )
}

export default Register
