const data = [
  {
    id: '1',
    name: 'Laptop',
  },
  {
    id: '2',
    name: 'Periférico',
  },
]

const TagRepository = {
  getAll: async () => {
    return new Promise((resolve) => setTimeout(() => resolve(data), 500))
  }
}

export default TagRepository