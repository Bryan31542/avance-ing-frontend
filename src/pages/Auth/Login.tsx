import { useForm } from 'react-hook-form'
import { useAuthStore } from '../../store/auth.store'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Login = () => {
  const { register, handleSubmit } = useForm()

  const { login, isLogged, checkAuth } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    checkAuth()
    if (isLogged) {
      navigate('/users')
    }
  }, [isLogged, navigate, checkAuth])

  const onSubmit = handleSubmit(async values => {
    try {
      await login(values.username, values.password)
    } catch (error) {
      console.error('Login failed: ', error)
    }
  })
  return (
    <div className="bg-zinc-900 max-w-md p-10 rounded-2xl m-auto">
      <h1 className="text-3xl text-white font-bold mb-10 text-center">
        Log In
      </h1>
      <form onSubmit={onSubmit}>
        <label className="text-white font-bold">Username</label>
        <input
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
          type="text"
          placeholder="Username"
          {...register('username', { required: true })}
        />
        <label className="text-white font-bold">Password</label>
        <input
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
        />
        <button
          type="submit"
          className="bg-purple-700 text-white font-bold py-2 px-4 rounded w-full mt-6 transition-all duration-1000 ease-in-out hover:bg-purple-500"
        >
          LOG IN
        </button>
      </form>
    </div>
  )
}

export default Login
