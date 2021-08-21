const data = [
  {
    id: '1',
    firstName: 'Marco',
    lastName: 'Galindo',
  },
  {
    id: '2',
    firstName: 'Alejandro',
  },
]

const UserRepository = {
  getAll: async () => {
    return new Promise((resolve) => setTimeout(() => resolve(data), 500))
  }
}

export default UserRepository