import {Controller} from 'egg'

export default class TreeDataList extends Controller {
   public async treeDataList(){
      const {ctx} = this
      ctx.body = await ctx.service.homePage.treeDataList.treeDataList()


   }


}