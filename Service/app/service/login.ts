import {Service} from "egg";

export  default  class Login extends Service {
    public async userLogin(){
        return {
            login: true
        }
    }
}