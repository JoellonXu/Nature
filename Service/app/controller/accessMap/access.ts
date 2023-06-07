import { Controller } from "egg";

export default class AccessController extends Controller {
    public async accessMap(){
        const {ctx} = this
        ctx.body = await ctx.service.accessMap.access.access()
    }
}