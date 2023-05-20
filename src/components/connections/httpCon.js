export var token = null
const ip_address = 'http://192.168.115.246:8000'

export const auth = async ({ email, password }) => {
  const formData = new URLSearchParams()
  formData.append('username', email)
  formData.append('password', password)
  console.log(email, password)
  const response = await fetch(ip_address + '/token', {
    method: 'POST',
    headers: {
      //"Authorization":
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    body: formData.toString(),
  })
  const data = await response.json()
  token = data['access_token']
  document.cookie = `access_token=${token}; SameSite=Lax; Path=/`
}

export function getAccessToken() {
  const value = `; ${document.cookie}`
  const parts = value.split('; access_token=')
  token = parts[1]
  return token
}

// const f = ({ endpoint, body }) => {
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(body),
//   }
//   fetch('http://127.0.0.1:8000/' + endpoint, requestOptions)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
// }

export const get = async (endpoint) => {
  const response = await fetch(ip_address + endpoint, {
    headers: getHeaders(),
    method: 'GET',
  })

  const data = await response.json()
  console.log(data)
  return data
}

const getHeaders = () => {
  var myHeaders = new Headers()
  myHeaders.append('Authorization', 'Bearer ' + getAccessToken())
  return myHeaders
}
