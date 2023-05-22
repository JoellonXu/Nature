import React, { useState } from "react";
import { useEffect } from "react";
import styled, { css } from "styled-components";
import { createPortal } from "react-dom";
import { Button } from "antd";

const ModalDialog: React.FC = (props) => {

    const { isShow } = props
    const [isOpen, setIsOpen ] = useState(false)
  const Dialog = styled.div`
    position: absolute;
    padding: 20px;
    width: 500px;
    height: 300px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #ddd;
    box-shadow: 0px 0px 20px 2px #ddd;
    .title {
      color: red;
    }
  `;

  const modalContent = (
    <Dialog>
      <div className="dialog-title">我是标题</div>
      <div className="dialog-contaoner">我是内容区域</div>
      <div className="dialog-foooter"><Button>关闭</Button></div>
    </Dialog>
  );
  debugger
  return isOpen ?  (createPortal(modalContent, document.getElementById("root"))) : null
};

export default ModalDialog;
