import {Controller} from "egg";

export default class LoginController extends Controller {
    public async userLogin() {
        const { ctx } = this
        ctx.body = await ctx.service.login.userLogin()
    }

}