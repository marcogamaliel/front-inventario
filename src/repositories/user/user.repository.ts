const data = [
  {
    name: 'Marco',
  },
  {
    name: 'Alejandro',
  },
]

const UserRepository = {
  getAll: async () => {
    return new Promise((resolve) => setTimeout(() => resolve(data), 500))
  }
}

export default UserRepository