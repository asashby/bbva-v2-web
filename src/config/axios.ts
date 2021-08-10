import axios from 'axios'

const axiosClient = axios.create({
  baseURL: `https://apibbva.regalovers.com/`
})

export default axiosClient