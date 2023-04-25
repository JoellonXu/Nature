function _debounce(func: Function, time: number) {
    //定义变量接受计时器，函数执行结果
    var timeout: any, result: any
    //返回出函数形成闭包
    return function () {
        let that = this
        //解构传入进来的参数
        let args = [...arguments]
        //在规定时间内再次执行此函数时清除上一个计时器
        clearTimeout(timeout)
        //创建一个计时器在规定时间内执行函数
        timeout = setTimeout(() => {
            //执行传入进来的函数，改变this指向返回出去的函数，接受参数
            result = func.apply(that, args)
        }, time)
        //返回函数执行结果
        return result
    }
}
export default _debounce
