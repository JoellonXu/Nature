const Controller = require('egg').Controller

class UserController extends Controller {
  public async findById() {
        const {ctx, params} = this
        const userId = params
        console.log('this===', this)
        const userList = [
            {
                id: '1',
                name: '张三'
            },
            {
                id:'2',
                name:'李四'
            },
            {
                id: '3',
                name: '王五'
            }
        ]
        const result = userList.find(item=> item.id === userId)
        ctx.body = {
            code: 200,
            data:result,
            msg: '操作成功'
        }
    }
}
export  default  UserController