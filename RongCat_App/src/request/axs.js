// 网络封装
import axios from 'axios';
import NProgress from "nprogress";

const instance = axios.create({
  timeout: 5000,
  baseURL: ''
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  NProgress.start();
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  NProgress.done();
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});