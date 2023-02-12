import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";

const instance = axios.create({
    timeout: 10000,
    baseURL: '/api',
})
// 通过拦截器实现路径参数替换机制
instance.interceptors.request.use(urlArgs.request.onFulfilled, undefined);

export interface ResultFormat<T = any>{
    data: null | T
    err: AxiosError | null
    response: AxiosResponse<T> | null
}
// 重新定义RequestConfig, 在AxiosRequestConfig基础上再加 args数据
export interface RequestConfig extends AxiosRequestConfig {
    args?: Record<string, any>
}
/**
 * 允许定义四个可选的泛型参数：
 *    Payload: 用于定义响应结果的数据类型
 *    Data：用于定义data的数据类型
 *    Params：用于定义parmas的数据类型
 *    Args：用于定义存放路径参数的属性args的数据类型
 */
// 这里的定义中重点处理上述四个泛型在缺省和定义下的四种不同情况
interface MakeRequest {
  <Payload = any>(config: RequestConfig): (
      requestConfig?: Partial<RequestConfig>
  ) => Promise<ResultFormat<Payload>>
}






