import React, { useState } from "react";
import { useEffect } from "react";
import styled, { css } from "styled-components";
import ReactDOM, { createPortal } from "react-dom";
import { Button } from "antd";
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
  `
  interface Modal  {
    show: Function
  }
const ModalDialog : Modal = {
   show: ()=>{}
}
ModalDialog.show = (props: any) => {
  console.log('props', props)
  const { title, content, type, ok, cancel } = props
  const close = (container: Element) => {
    container.remove()
    props.cancel()
}
const affirm = (props: any) => {
  console.log('点击了确认', props)
  props.ok()
}
const div = document.createElement('div')
div.className = 'dialog-modal'  
document.body.appendChild(div)
const modalContent = (
  <Dialog>
    <div className="dialog-title">{title}</div>
    <div className="dialog-contaoner">{content}</div>
    <div className="dialog-foooter">
      <Button onClick={()=>close(div)}>关闭</Button>
      <Button onClick={()=> affirm(props)}>确认</Button>
    </div>
  </Dialog>
);  

 ReactDOM.render(modalContent, div)
}

export default ModalDialog;
