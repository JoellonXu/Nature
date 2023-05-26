import React, { useState } from "react";
import { useEffect } from "react";
import styled, { css } from "styled-components";
import ReactDOM, { createPortal } from "react-dom";
import { Button } from "antd";
import Modal from "antd/es/modal/Modal";

// function ModalDialog(props: any){ 
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
      <div className="dialog-title">111111</div>
      <div className="dialog-contaoner">22222</div>
      <div className="dialog-foooter"><Button>关闭</Button></div>
    </Dialog>
  );
  // ReactDOM.createPortal(modalContent, document.getElementById("root"))
// };
interface Modal  {
  show: Function
}
const ModalDialog = {}
ModalDialog.show = (values: any) => {
 console.log('values', values)
 const newContainer = React.createElement('div', null, modalContent)
 debugger
 document.body.appendChild(newContainer)
// ReactDOM.createPortal(newContainer, document.getElementById('root'))
// return createPortal(<div>111111111111</div>, newContainer)
}

export default ModalDialog;
