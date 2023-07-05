import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'https://api-codeburger.up.railway.app'
})

apiCodeBurger.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburguer:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.Authorization = `Bearer ${token}`

  return config
})

export default apiCodeBurger
