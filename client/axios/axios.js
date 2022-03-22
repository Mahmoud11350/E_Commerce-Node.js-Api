import axios from 'axios'

const isServer = typeof window === 'undefined'
const token = isServer ? null : window.localStorage.getItem('token')

const api = axios.create({
  baseURL: 'https://e-c-ommerce.herokuapp.com/api/v1',
})

// handle requests
api.interceptors.request.use(
  (config) => {
    config.headers.common['Authorization'] = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(error)
)

// handle response
api.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
)
export default api