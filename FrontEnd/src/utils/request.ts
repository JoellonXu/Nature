import axios, {
    type AxiosInstance,
    type AxiosRequestConfig,
    type AxiosResponse,
    type AxiosError,
  } from "axios";
import { config } from "process";

let baseURL
if(process.env.NODE_ENV === 'development') baseURL = ''
else if(process.env.NODE_ENV === 'production') baseURL = ''

const http = axios.create({
    headers: {
        'token': localStorage.getItem('token') || ''
    },
    baseURL,

    timeout: 10000,

    withCredentials: true

})

http.interceptors.request.use(
    config  => {
        const token = localStorage.getItem('token') || ''

        config.headers['token'] =  token

        return config
    },
    error => {
        console.warn(error)
        return Promise.reject(error)
    }
)
// request('getusersug', {
//     methods: 'POST',
//     body: {
//         req :{

//         }
//     }
// })


// request('api/user', {
//     name: 'name',
//     age: 11
// })
http.interceptors.response.use(
    res =>{
        return res
    },
    error =>{
        return Promise.reject(error)
    }
)

// export const request = (url, ) =>{

//     const { method, }


// }