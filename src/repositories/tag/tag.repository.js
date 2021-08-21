const data = [
  {
    id: '1',
    name: 'Laptops',
  },
  {
    id: '2',
    name: 'Periféricos',
  },
]

const TagRepository = {
  getAll: async () => {
    return new Promise((resolve) => setTimeout(() => resolve(data), 500))
  }
}

export default TagRepository