const data = {
  "totalProducts": 2,
  "totalAllocatedProducts": 2,
  "products": [
    {
      "name": "mac intel 8GB",
      "total": 2,
      "allocated": 2
    }
  ],
  "tags": [
    {
      "name": "Laptop",
      type: '1',
      "total": 2,
      image: 'laptop_mac',
      threshold: 1,
      "allocated": 2,
      "inRepair": 0,
      "discharged": 0,
      "free": 0,
    },
    {
      "name": "Screen",
      type: '1',
      threshold: 1,
      image: 'desktop_windows',
      "total": 2,
      "allocated": 2,
      "inRepair": 0,
      "discharged": 0,
      "free": 2,
    },
    {
      "name": "Mug",
      type: '1',
      image: 'coffee',
      "total": 2,
      "allocated": 2,
      "free": 0,
      "inRepair": 0,
      "discharged": 0
    },
    {
      "name": "Teclado",
      type: '1',
      threshold: 1,
      image: 'keyboard',
      "total": 2,
      "allocated": 2,
      "free": 0,
      "inRepair": 0,
      "discharged": 0
    }
  ]
}

const DashboardRepository = {
  get: async () => {
    return new Promise((resolve) => setTimeout(() => resolve(data), 500))
  }
}

export default DashboardRepository