import axios from 'axios'

const { REACT_APP__SERVICE__PAYREPORT__URL: baseUrl } = process.env

const EventRepository = {
  getByUserId: async (id) => {
    const { data } = await axios.get(`${baseUrl}/v1/events`)

    const result = data.filter(item => item.userId === id)

    return new Promise((resolve) => setTimeout(() => resolve(result), 500))
  },
  
  getByProductId: async (id) => {
    const { data } = await axios.get(`${baseUrl}/v1/events`)

    const result = data.filter(item => item.productId === id)

    return new Promise((resolve) => setTimeout(() => resolve(result), 500))
  }
}

export default EventRepository