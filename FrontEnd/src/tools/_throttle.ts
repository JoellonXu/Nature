function _throttle(func: Function, time: number) {
    //定义原始时间为0 变量result接受函数执行结果
    let preTime = 0
    let result: any
    //返回函数形成闭包
    return function () {
        //解构传入进来的参数
        let args = [...arguments]
        //获取当前触发事件时的时间
        let now = +new Date()
        //判断时间间隔是否大于用户的要求，是的话执行
        if (now - preTime > time) {
            //执行传入进来的函数，改变this指向返回出去的函数，接受参数
            result = func.apply(this, args)
            //记录上一次触发函数的时间
            preTime = now
        }
        //返回函数执行结果
        return result
    }
}

export default _throttle