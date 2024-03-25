import { useForm } from 'react-hook-form'

const Register = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit(async values => {
    console.log(values)
    // const res = await registerRequest(values)
    // console.log(res)
  })
  return (
    <div className="bg-zinc-900 max-w-md flex justify-center items-center p-10 rounded-md m-auto">
      <form onSubmit={onSubmit}>
        <input
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
          type="text"
          placeholder="Name"
          {...register('name', { required: true })}
        />
        <input
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
          type="text"
          placeholder="Username"
          {...register('username', { required: true })}
        />
        <input
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
          type="email"
          placeholder="Email"
          {...register('email', { required: true })}
        />
        <input
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
        />
        <input
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
          type="text"
          placeholder="roleId"
          {...register('roleId', { required: true })}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
