import axios from 'axios'

const { REACT_APP__SERVICE__PAYREPORT__URL: baseUrl } = process.env

export async function login(username, password, saveToken) {
  const { data: result } = await axios.post(`${baseUrl}/v1/users/login`, { username, password })
  
  const { user, token } = result
  await saveToken(user, token)

  return !!user
}

export async function logout() {
  throw new Error('Not implemented')
}
