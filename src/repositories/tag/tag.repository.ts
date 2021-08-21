const data = [
  {
    name: 'Laptops',
  },
  {
    name: 'Periféricos',
  },
]

const TagRepository = {
  getAll: async () => {
    return new Promise((resolve) => setTimeout(() => resolve(data), 500))
  }
}

export default TagRepository