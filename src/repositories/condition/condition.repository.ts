const data = [
  {
    name: 'Nuevo',
  },
  {
    name: 'Usado previamente',
  },
]

const ConditionRepository = {
  getAll: async () => {
    return new Promise((resolve) => setTimeout(() => resolve(data), 500))
  }
}

export default ConditionRepository