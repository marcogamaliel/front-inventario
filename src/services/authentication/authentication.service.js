import axios from 'axios'

const { REACT_APP__SERVICE__PAYREPORT__URL: baseUrl } = process.env

export async function login(username, password, saveToken) {
  // const response = await axios.post(`${baseUrl}/v1/users/login`, { username, password })
  const response = {
    data: {
      user: {
        id: '1',
        firstName: 'Marco',
        lastName: 'Galindo',
        dni: '16.111.111-2',
        nickName: 'Gamaliel',
        client: {
          id: '1',
          name: 'Falabella',
        },
        roles: [
          {
            key: 'user',
            name: 'Usuario'
          }
        ]
      }, token: '892369872348923764982734'
    }
  }
  const { user, token } = response.data
  await saveToken(user, token)
  return !!user
}

export async function logout() {
  throw new Error('Not implemented')
}
