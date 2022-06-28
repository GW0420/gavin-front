import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(config => {
  // 添加 iconde
  config.headers.icode = '6056960C884AADED'
  // 必须返回 config
  return config
})

// 响应拦截器
service.interceptors.response.use(response => {
  const { success, message, data } = response.data
  // 根据 success成功与否决定下面的操作
  if (success) {
    return data
  } else {
    // TODO: 业务错误
    return Promise.reject(new Error(message))
  }
})
export default service
