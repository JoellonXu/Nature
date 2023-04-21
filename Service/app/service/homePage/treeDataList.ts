import { Service } from "egg"

export default class treeDataList extends Service {
    public async treeDataList() {

        const listData = []
        const obj = {
            title: '组织架构',
            key:  '0-0',
            children: []
        }
        for(let i = 0;i<2000;i++){

        const  childrenObj = {}
                //@ts-ignore    
            childrenObj.title = `index${i}`
           //@ts-ignore
             childrenObj.key = `0-0-${i}`
            //@ts-ignore
            listData.push(childrenObj)
        }
             //@ts-ignore
        obj.children = listData

        return {
            errno: 0,
            req: {},
            res: [obj]
        }
    }
}