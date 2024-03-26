import { useEffect } from 'react'
import { useUserStore } from '../../store/user.store'
import { Link } from 'react-router-dom'
import { Table } from 'antd'

const User = () => {
  const { users, fetchUsers, deleteUser, removeRoleFromUser } = useUserStore()

  useEffect(() => {
    fetchUsers(1, 100)
  }, [fetchUsers])

  const data = users.map(user => {
    return {
      key: user.id,
      name: user.name,
      email: user.email,
      role: user.roles
    }
  })

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Roles',
      key: 'roles',
      render: (_: any, record: any) => (
        console.log(record),
        (
          <div className="flex flex-wrap gap-2 w-2/3 justify-start items-center">
            {record.role.map((role: any, index: number) => (
              <div
                key={index}
                className="flex gap-2 bg-sky-200 items-center rounded-md p-2"
              >
                <p key={index} className="font-bold text-black font-dm-sans">
                  {role.name}
                </p>
                <button
                  className="text-white font-bold"
                  onClick={() => {
                    removeRoleFromUser(record.key, role.id)
                    console.log(record.key)
                    console.log(role.id)
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        )
      )
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <div className="flex gap-4">
          <Link to={`/users/edit/${record.key}`}>
            <button className="rounded-full bg-blue-500 w-24 h-10 text-white font-bold">
              Edit
            </button>
          </Link>
          <button
            className="rounded-full bg-red-500 w-24 h-10 text-white font-bold"
            onClick={() => deleteUser(record.key)}
          >
            Delete
          </button>
        </div>
      )
    }
  ]

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="absolute top-10 w-fit flex justify-center items-center gap-24">
        <h1 className="text-4xl font-bold">Users</h1>
        <Link to="/users/add">
          <button className="rounded-full bg-purple-500 w-32 h-10 text-white font-bold">
            Add User
          </button>
        </Link>
      </div>

      <div className="w-full text-center-center rounded-md px-10">
        <Table
          dataSource={data}
          columns={columns}
          pagination={{
            className: 'text-white',
            pageSize: 5
          }}
        />
      </div>
    </div>
  )
}

export default User
