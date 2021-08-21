const data = [
  {
    id: '1',
    firstName: 'Marco',
    lastName: 'Galindo',
    dni: '16.111.111-2',
    nickName: 'Gamaliel',
    client: {
      id: '1',
      name: 'Falabella',
    },
    roles: [
      {
        id: '2',
        name: 'Usuario'
      }
    ]
  },
  {
    id: '2',
    firstName: 'Alejandro',
  },
]

const UserRepository = {
  getAll: async () => {
    return new Promise((resolve) => setTimeout(() => resolve(data), 500))
  },
  getById: async (id) => {
    const result = data.find(u => u.id === id)
    return new Promise((resolve) => setTimeout(() => resolve(result), 500))
  }
}

export default UserRepository