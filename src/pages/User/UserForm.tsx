import { useForm } from 'react-hook-form'

const Register = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit(async values => {
    console.log(values)
  })
  return (
    <div className="bg-zinc-900 max-w-xl p-10 rounded-2xl m-auto">
      <h1 className="text-3xl text-white font-bold mb-10 text-center">
        Add User
      </h1>
      <form onSubmit={onSubmit} autoComplete="off">
        <label className="text-white font-bold">Name</label>
        <input
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
          type="text"
          placeholder="Name"
          {...register('name', { required: true })}
        />
        <label className="text-white font-bold">Username</label>
        <input
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
          type="text"
          placeholder="Username"
          {...register('username', { required: true })}
        />
        <label className="text-white font-bold">Email</label>
        <input
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
          type="email"
          placeholder="Email"
          {...register('email', { required: true })}
        />
        <label className="text-white font-bold">Password</label>
        <input
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
        />
        <label className="text-white font-bold">Role</label>
        <input
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
          type="text"
          placeholder="roleId"
          {...register('roleId', { required: true })}
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

export default Register
