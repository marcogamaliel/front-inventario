import axios from 'axios'

const { REACT_APP__SERVICE__PAYREPORT__URL: baseUrl } = process.env

const QrCodeRepository = {
  getByProductId: async (productId) => {
    const { data: result } = await axios.get(`${baseUrl}/v1/products/${productId}/qr`)
    return result
  }
}

export default QrCodeRepository