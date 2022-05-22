import axios from 'axios'

const BASE_DOMAIN = process.env.BASE_DOMAIN
interface Res {
  data: Object,
  status: number
}

// 创建axios实例
const service:any = axios.create({
  baseURL: BASE_DOMAIN,
  timeout: 10000,
})

service.interceptors.request.use(
  (config: Object) => {
    return config;
  },
  (error: Object) => {
    return Promise.reject(error);
  }
);
// response interceptors
service.interceptors.response.use(
  (response: Res) => {
    if ((response || {}).status == 200) {
      return response.data;
    }
  },
  (error: Object) => {
    Promise.reject(error);
  }
);

export default service


