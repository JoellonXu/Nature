import {Controller} from "egg";

export default class LoginController extends Controller {
    public async userLogin() {
        const { ctx } = this
        ctx.body = await ctx.service.login.userLogin(ctx.query)
    }
    async getParam(){
        // const { ctx } = this
        let id = await this.ctx.query.id
        this.ctx.body = id
    }

}