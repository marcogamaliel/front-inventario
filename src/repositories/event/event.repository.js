const data = [
  {
    executorId: '1',
    productId: '1',
    userId: '1',
    date: '2021-02-12',
    description: 'Se asignó un equipo',
    type: 'assign',
  },
  {
    executorId: '1',
    productId: '1',
    userId: '1',
    date: '2021-02-12',
    description: 'Se asignó un equipo',
    type: 'assign',
  },
  {
    executorId: '1',
    productId: '2',
    userId: '1',
    date: '2021-02-12',
    description: 'Se asignó un equipo',
    type: 'assign',
  },
  {
    executorId: '1',
    productId: '2',
    userId: '1',
    date: '2021-03-12',
    description: 'Se quitó el equipo',
    type: 'desasignar',
  },
  {
    executorId: '1',
    productId: '2',
    userId: '2',
    date: '2021-03-21',
    description: 'Se asignó un equipo',
    type: 'assign',
  },
  {
    executorId: '2',
    productId: '1',
    userId: '2',
    date: '2021-02-12',
    description: 'Se lleva el equipo a reparaciones',
    type: 'repair',
  },
]

const EventRepository = {
  getByUserId: (id) => {
    const result = data.filter(item => item.userId === id)
    return new Promise((resolve) => setTimeout(() => resolve(result), 500))
  },
  getByProductId: (id) => {
    const result = data.filter(item => item.productId === id)
    return new Promise((resolve) => setTimeout(() => resolve(result), 500))
  }
}

export default EventRepository