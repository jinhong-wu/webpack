import axios from 'axios'

// 封装axios
export function request(config) {
  // 方法一
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  })
  // 2.拦截器
  instance.interceptors.request.use(config => {
    // 操作：config修改、加载的动画状态、必须携带的一些特殊信息
    return config
  }, err => {

  })
  instance.interceptors.response.use(res => {
    // 真正返回的数据是res.data
    return res.data
  }, err => {

  })
  // 发送真正的网络请求
  return instance(config)

  // 方法二
  // return new Promise((resolve, reject) => {
  //   const instance = axios.create({
  //     baseURL: '',
  //     timeout: 5000
  //   })
  //   instance(config)
  //     .then(res => {
  //       resolve(res)
  //     }).catch(err => {
  //       reject(err)
  //     })
  // })
}