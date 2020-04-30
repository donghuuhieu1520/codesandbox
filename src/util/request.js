import axios from 'axios'
import store from '@/store'

const axiosInstance = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 15000
})

instance.interceptors.request.use(opts => {
  if (store.getters.token)
    opts.headers['Authorization'] = `Bearer ${store.getters.token}`
  return opts
}, err => {
  Promise.reject(err)
})

export default axiosInstance
