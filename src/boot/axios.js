import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5020'
})

export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}

export { axiosInstance }
