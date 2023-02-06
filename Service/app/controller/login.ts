import {Controller} from "egg";

export default class LoginController extends Controller {
    public async userLogin() {
        const { ctx } = this
        let { id } = ctx.request.body
        ctx.body = await ctx.service.login.userLogin(id)
    }
    async getParam(){
        // const { ctx } = this
        let id = await this.ctx.query.id
        this.ctx.body = id
    }

}