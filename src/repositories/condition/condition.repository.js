const data = [
  {
    id: '1',
    name: 'Nuevo',
  },
  {
    id: '2',
    name: 'Usado previamente',
  },
]

const ConditionRepository = {
  getAll: async () => {
    return new Promise((resolve) => setTimeout(() => resolve(data), 500))
  }
}

export default ConditionRepository