import React, { useEffect } from "react";
import Article from '@/component/Article'
import axios from "axios";

const SocialCircle : React.FC = () => {
     axios.post('api/articleList').then((res)=>{
        console.log(res)
     })
  useEffect(()=>{
       


  })
    return (
        <div>社交圈
            <div> 
        <Article
         title="有什么一辈子不能说出来"
         content="匿名用户：2023年2月10日20：50"
        />
            </div>
        </div>
    )
}
export default SocialCircle