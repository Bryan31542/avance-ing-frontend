import { FieldValues, useForm } from 'react-hook-form'
import { useRoleStore } from '../../store/role.store'
import { useNavigate } from 'react-router-dom'
import { RoleForm } from '../../interfaces/role.interface'

const RoleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const { createRole } = useRoleStore()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async (values: FieldValues) => {
    try {
      await createRole(values as RoleForm)
      navigate('/roles')
    } catch (error) {
      console.error('Failed to add role: ', error)
    }
  })

  return (
    <div className="bg-zinc-900 w-2/5 p-10 rounded-2xl m-auto">
      <h1 className="text-3xl text-white font-bold mb-10 text-center">
        Add Role
      </h1>
      <form onSubmit={onSubmit}>
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
        <button
          type="submit"
          className="bg-purple-700 text-white font-bold py-2 px-4 rounded w-full mt-6 transition-all duration-1000 ease-in-out hover:bg-purple-500"
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default RoleForm
