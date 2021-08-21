const data = [
  {
    key: 'admin',
    name: 'Administrador',
  },
  {
    key: 'user',
    name: 'Usuario'
  },
]

const RoleRepository = {
  getAll: () => {
    return new Promise((resolve) => setTimeout(() => resolve(data), 500))
  }
}

export default RoleRepository