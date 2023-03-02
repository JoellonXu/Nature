import React, { useState } from "react";
import { render } from "react-dom";
import styled, {css} from "styled-components";

const Article: React.FC = (props) => {

const  { title, content } = props
const [applaud, setApplaud] = useState(1)
const [applaudIndex, setApplaudIndex] = useState(1)

const applaudClick = () => {
    if(applaudIndex%2 === 1){
      setApplaud(applaud+1)
      setApplaudIndex(applaudIndex +1)
      setOpposeIndex(1)
    } else {
        setApplaud(applaud -1)
        setApplaudIndex(applaudIndex -1)
    }
 
}
const Title = styled.h2`
    color: #121212;
`
const Content = styled.span`
     white-space: normal;
     margin-bottom: 10px;
`
// #056de8
const ButtonAgree = styled.div`
     border: 1px solid #e5f0fd;
     width: 60px;
     height: 30px;
     background-color: ${applaudIndex === 1 ?  '#e5f0fd' : '#056de8'};
     text-align: center;
     line-height: 30px;
     color: ${applaudIndex === 1 ? '#1473e7': '#ffffff'} ;
     display: inline-block;
`
const [oppose, setOppose] = useState(11)
const [opposeIndex, setOpposeIndex] = useState(1)
const ButtonOppose = styled.div`
     border: 1px solid #e5f0fd;
     width: 60px;
     height: 30px;
     background-color: ${opposeIndex === 1 ?  '#e5f0fd' : '#056de8'};
     text-align: center;
     line-height: 30px;
     color: ${opposeIndex === 1 ? '#1473e7': '#ffffff'} ;
     display: inline-block;
`
const opposeClick = () => {
    if(opposeIndex%2 === 1){
        setOppose(oppose+1)
        setOpposeIndex(opposeIndex +1)
        setApplaudIndex(1)
    } else {
        setOppose(oppose -1)
        setOpposeIndex(opposeIndex -1)
    }
 
}

return (
    <div className='article'>
    <div className='article-title'><Title>{title}</Title></div>
    <div className='article-content'><Content>{content}</Content></div>
    <div className='article-bottom'>
        <ButtonAgree  onClick={applaudClick}>赞同  { applaudIndex === 1 ? '' : applaud}</ButtonAgree>
        <ButtonOppose onClick={opposeClick}>反对  {opposeIndex === 1 ? '' : oppose}</ButtonOppose>
        <span>评论</span>
    </div>
    </div>
)


}
export default Article