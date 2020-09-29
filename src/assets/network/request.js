import axios from 'axios'


export function request(config) {
  let install = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
  })
  return install(config)
}
