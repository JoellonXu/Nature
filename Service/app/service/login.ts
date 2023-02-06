import {Service} from "egg";

export  default  class Login extends Service {
    public async userLogin(id){
        return {
            login: true,
            id: id
        }
    }
}