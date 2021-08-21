const data = [
  {
    id: '1',
    name: 'Falabella',
  },
  {
    id: '2',
    name: 'Bice',
  }
]

const ClientRepository = {
  getAll: () => {
    return new Promise((resolve) => setTimeout(() => resolve(data), 500))
  }
}

export default ClientRepository