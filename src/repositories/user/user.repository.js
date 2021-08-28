import axios from 'axios'

const { REACT_APP__SERVICE__PAYREPORT__URL: baseUrl } = process.env

const UserRepository = {
  getAll: async () => {
    const { data: result } = await axios.get(`${baseUrl}/v1/users`)
    return result
  },
  getById: async (id) => {
    const { data: result } = await axios.get(`${baseUrl}/v1/users/${id}`)
    return result
  },
  save: async (user) => {
    await axios.post(`${baseUrl}/v1/users`, user)
  }
}

export default UserRepository