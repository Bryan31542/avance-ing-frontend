import { useForm } from 'react-hook-form'
import { useRoleStore } from '../../store/role.store'
import { useNavigate } from 'react-router-dom'

const RoleForm = () => {
  const { register, handleSubmit } = useForm()
  const { createRole } = useRoleStore()
  const navigate = useNavigate()

  const onSubmit = handleSubmit(async values => {
    try {
      await createRole(values.name)
      navigate('/roles')
    } catch (error) {
      console.error('Failed to add role: ', error)
    }
  })

  return (
    <div className="bg-zinc-900 max-w-md p-10 rounded-2xl m-auto">
      <h1 className="text-3xl text-white font-bold mb-10 text-center">
        Add Role
      </h1>
      <form onSubmit={onSubmit}>
        <label className="text-white font-bold">Name</label>
        <input
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
          type="text"
          placeholder="Name"
          {...register('name', { required: true })}
        />

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
