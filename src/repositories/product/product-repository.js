import axios from 'axios'

const { REACT_APP__SERVICE__PAYREPORT__URL: baseUrl } = process.env

const ProductRepository = {
  getAll: async () => {
    const { data: result } = await axios.get(`${baseUrl}/v1/products`)

    return new Promise((resolve) => {
      setTimeout(() => resolve(result), 500)
    })
  },
  save: async (product) => {
    const { data: result } = await axios.post(`${baseUrl}/v1/products`)

    return new Promise((resolve) => {
      setTimeout(() => resolve(result), 500)
    })
  },
  getById: async (id) => {
    const { data: result } = await axios.get(`${baseUrl}/v1/products/${id}`)

    return new Promise((resolve) => {
      setTimeout(() => resolve(result), 500)
    })
  },
  getByUserId: async (id) => {
    const { data: result } = await axios.get(`${baseUrl}/v1/users/${id}/products`)

    return new Promise((resolve) => {
      setTimeout(() => resolve(result), 500)
    })
  }
}

export default ProductRepository