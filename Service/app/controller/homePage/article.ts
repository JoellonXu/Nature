import {Controller} from 'egg'

export default class ArticleController extends Controller {
   public async articleList(){
      const {ctx} = this
      ctx.body = await ctx.service.homePage.article.articleList()


   }


}