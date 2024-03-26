import { FieldValues, useForm } from 'react-hook-form'
import { useAuthStore } from '../../store/auth.store'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Auth } from '../../interfaces/auth.interface'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const { login, isLogged, checkAuth } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    checkAuth()
    if (isLogged) {
      navigate('/users')
    }
  }, [isLogged, navigate, checkAuth])

  const onSubmit = handleSubmit(async (values: FieldValues) => {
    try {
      await login(values as Auth)
    } catch (error) {
      console.error('Login failed: ', error)
    }
  })
  return (
    <div className="bg-zinc-900 w-1/3 p-10 rounded-2xl m-auto">
      <h1 className="text-3xl text-white font-bold mb-10 text-center">
        Log In
      </h1>
      <form onSubmit={onSubmit}>
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
        <label className="text-white font-bold">Password</label>
        <input
          className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
          type="password"
          placeholder="Password"
          {...register('password', { required: '* Password is required' })}
        />
        {errors.password && typeof errors.password.message === 'string' && (
          <p className="text-sm text-red-200 mb-2">{errors.password.message}</p>
        )}
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
