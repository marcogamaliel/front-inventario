const data = [
  {
    key: "assigned",
    tag: "Asignado",
  },
  {
    key: 'inStock',
    tag: 'Libre',
  }
]

const StateRepository = {
  getAll: () => {
    const result = data
    return new Promise((resolve) => {
      setTimeout(() => resolve(result), 500)
    })
  }
}

export default StateRepository