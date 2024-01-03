import axios from "axios";

// 浏览器同源策略，只是限制ajax跨域
const baseURL = "http://localhost:8888";

const instance = axios.create({
  baseURL,
  timeout: 7000,
  headers: {},
});

// 请求拦截器
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // 加 token
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // 对后端数据进行过滤（状态码）
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
