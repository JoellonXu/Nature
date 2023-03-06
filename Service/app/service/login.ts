import {Service} from "egg";

export  default  class Login extends Service {
    public async userLogin(query){
        const {accountNumber, password} = query
       if(accountNumber === 'admin' && password === '123456'){
        return {
            errno: 0,
            req: query,
            res:{
                isLogin: true,
                token: 'asd2313dada%da1231hgsajfah',
                indate:5
            }
        }
       } else {
        return {
            errno: 1,
            req: query,
            errmsg: '登陆失败',
            res: {
                isLogin: false
            }
        }
       }
       
    }
}