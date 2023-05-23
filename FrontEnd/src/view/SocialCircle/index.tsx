import React, { useEffect, useState } from "react";
import Article from "@/component/Article";
import ModalDialog from "@/component/ModalDialog";
import axios from "axios";
import { Button } from "antd";

const SocialCircle: React.FC = () => {
  axios.post("api/articleList").then((res) => {
    console.log(res);
  });
  const [isModalShow, setIsModalShow ] = useState(false)

  const modalClick = () => {
    ModalDialog(()=>({
      title:"弹窗测试",
      content: (<div>我是一个测试弹窗大大大还好好的还好好的</div>),
      type:"success"
    }))
    // ModalDialog({
      
    // })
  }
  return (
    <div>
      <Button onClick={modalClick}>点击</Button>
    </div>
  );
};
export default SocialCircle;
