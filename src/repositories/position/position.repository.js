const data = [
  {
    id: '1',
    name: 'Dev fullstack',
  },
  {
    id: '2',
    name: 'UX/UI',
  }
]

const PositionRepository = {
  getAll: () => {
    return new Promise((resolve) => setTimeout(() => resolve(data), 500))
  }
}

export default PositionRepository