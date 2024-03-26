import { useEffect, useState } from 'react'
import { useUserStore } from '../../store/user.store'
import { Link } from 'react-router-dom'
import { Modal, Table } from 'antd'
import { useRoleStore } from '../../store/role.store'
import { PencilSquareIcon, BackspaceIcon } from '@heroicons/react/24/outline'
import { useAuthStore } from '../../store/auth.store'
import { Role } from '../../interfaces/role.interface'

const User = () => {
  const { users, fetchUsers, deleteUser, removeRoleFromUser, addRoleUser } =
    useUserStore()
  const { roles, fetchRoles } = useRoleStore()
  const { user } = useAuthStore()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedRole, setSelectedRole] = useState(null)
  const [selectedUserId, setSelectedUserId] = useState(null)

  useEffect(() => {
    fetchUsers(1, 100)
    fetchRoles()
  }, [fetchUsers, fetchRoles, selectedRole, isModalVisible])

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
    addRoleUser(selectedUserId ?? '', selectedRole ?? '')
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

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
        <div className="flex flex-wrap gap-2 w-2/3 justify-start items-center">
          {record.role.map((role: Role, index: number) => (
            <div
              key={index}
              className="flex gap-2 bg-slate-400 items-center rounded-md p-2"
            >
              <p key={index} className="font-bold text-white font-dm-sans">
                {role?.name}
              </p>
              <button
                className="text-white font-bold"
                onClick={() => {
                  removeRoleFromUser(record.key.toString(), role.id.toString())
                }}
              >
                <BackspaceIcon className="h-4 w-4 text-white" />
              </button>
            </div>
          ))}
          {/* Dropdown menu */}
          <div className="relative flex justify-center items-center">
            <button
              className="text-black font-bold"
              onClick={() => {
                showModal()
                setSelectedUserId(record.key)
              }}
            >
              <PencilSquareIcon className="h-5 w-5 text-blue-500" />
            </button>
          </div>
        </div>
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
            disabled={user === record.key}
            className="rounded-full bg-red-500 w-24 h-10 text-white font-bold"
            onClick={() => {
              deleteUser(record.key)
            }}
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
      <Modal
        title="Select Role"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <select
            onChange={(e: any) => setSelectedRole(e.target.value)}
            value={selectedRole || ''}
            className="w-full border text-black px-4 py-2 rounded-md my-2"
          >
            <option value="">Select Role</option>
            {roles.map((role: Role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>
      </Modal>
    </div>
  )
}

export default User
