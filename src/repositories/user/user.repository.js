import axios from 'axios'

const { REACT_APP__SERVICE__PAYREPORT__URL: baseUrl } = process.env

const UserRepository = {
  getAll: async () => {
    const { data: result } = await axios.get(`${baseUrl}/v1/users`)

    return new Promise((resolve) => setTimeout(() => resolve(result), 500))
  },
  getById: async (id) => {
    const { data: result } = await axios.get(`${baseUrl}/v1/users/${id}`)

    return new Promise((resolve) => setTimeout(() => resolve(result), 500))
  },
  save: async (user) => {
    const { data: result } = await axios.post(`${baseUrl}/v1/users`, user)

    return new Promise((resolve) => {
      setTimeout(() => resolve(result), 500)
    })
  }
}

export default UserRepository