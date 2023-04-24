import { Service } from "egg"

export default class treeDataList extends Service {
    public async treeDataList() {
        const data:string[] = []
        for(let i = 0;i<10000;i++){
         data.push(`第${i}条数据`)
        }

        return {
            errno: 0,
            req: {},
            res: data
        }
    }
}