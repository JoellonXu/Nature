import Item from "antd/es/list/Item";
import React from "react";
import styled from "styled-components";
const NavBar= (props: {
    title: string,
    item: Array<any>,
    onClick: Function
}) => {

    const { title , item, onClick } = props

console.log('props', props)
const NavBarStyled = styled.div`
width: 200px;
background-color: white;
.nav-bar-title{
    padding-left: 40px;
}
.nav-bar-line{
    height: 1px;
    background: #f0f0f0;
    margin: 5px 0 5px 0;
    padding-left: 40px;
}
.nav-bar-item{
    height: 45px;
    line-height: 45px;
    padding-left: 40px;
    border-radius: 10px;
}
.nav-bar-item:hover{
    background: #f0f0f0;
}

`
 const click = (name: any, key: any) => {
    props.onClick(name, key)
 }

    return (
        <NavBarStyled>
            <div className="nav-bar-title">{title}</div>
            <div className="nav-bar-line"></div>
            {
                item.map((item, index)=>{
                    return (<div key={index} className="nav-bar-item" onClick={()=>click(item.name, item.key)}>{item.name}</div>)
                })
            }
        </NavBarStyled>
    )
}
export default NavBar