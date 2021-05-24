/**
 * axios封装
 */
import axios from 'axios'
import config from '../config'
import { ElMessage } from 'element-plus'
const service = axios.create({
    baseUrl: config.baseApi,
    timeout: 8000
})


// 请求拦截
service.interceptors.request.use(config => {
    const headers = config.headers
    if (!headers.Authorization) headers.Authorization = 'Bear test' 
    return config
}) 

// 响应拦截
service.interceptors.response.use(res => {
    const { data, code, msg } = res.data
    if (code === 200) {
        return data
    } else if (res.code === 40001) {
        ElMessage.error(msg)
    } else {
        ElMessage.error(msg)
    }
})

/**
 * 
 * @param {} options 请求配置
 */
function request(options) {
    options.method = options.method || 'get'
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data
    }
    if (config.env === 'production') {
        options.defaults.baseUrl = config.baseApi
    } else {
        options.defaults.baseUrl = config.mock ? config.mockApi : config.baseApi
    }
    return service(options)
}

['get', 'post', 'put', 'delete', 'patch'].forEach(item => {
    request[item] = (url, data, options) => {
        return request({
            url,
            data,
            method: item,
            ...options
        })
    }
})
export default request