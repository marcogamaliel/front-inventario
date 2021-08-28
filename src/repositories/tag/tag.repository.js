import axios from 'axios'

const { REACT_APP__SERVICE__PAYREPORT__URL: baseUrl } = process.env

const TagRepository = {
  getAll: async () => {
    const { data: result } = await axios.get(`${baseUrl}/v1/tags`)
    return new Promise((resolve) => setTimeout(() => resolve(result), 500))
  }
}

export default TagRepository