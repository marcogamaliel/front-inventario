import axios from 'axios'

const { REACT_APP__SERVICE__PAYREPORT__URL: baseUrl } = process.env

const ProductRepository = {
  getAll: async () => {
    const { data: result } = await axios.get(`${baseUrl}/v1/products`)
    return result
  },
  save: async (product) => {
    return await axios.post(`${baseUrl}/v1/products`, product)
  },
  getById: async (id) => {
    const { data: result } = await axios.get(`${baseUrl}/v1/products/${id}`)
    return result
  },
  getByUserId: async (id) => {
    const { data: result } = await axios.get(`${baseUrl}/v1/users/${id}/products`)
    return result
  }
}

export default ProductRepository