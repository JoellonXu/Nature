import { Service } from "egg"

export default class access extends Service {
   public async access(){
    return {
        errno: 0,
        res: ['HOME', 'TEST1', 'TEST2', 'LOGIN', 'DEFAULT']
    }
   }


}