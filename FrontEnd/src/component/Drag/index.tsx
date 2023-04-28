import React, { useEffect, useState } from "react"
import { _getDate } from "@/tools"
import styled, {css} from "styled-components";

const Drag:React.FC = (props) =>{


  const [currentTime, setCurrentTime] = useState({
    year: '',
    month: '',
    date: '',
    hours: '',
    minutes: '',
    seconds: ''
  })
  

  const handleNowDate = () => {
    const { year, day, month, seconds, minutes, hours, date }   =_getDate(new Date)
    setCurrentTime({
        year,
        month,
        hours,
        minutes,
        seconds,
        date,
    })

  }

  useEffect(()=>{
    handleNowDate()
   const updateTime = setInterval(()=>{
        handleNowDate() 
   }, 1000) 
      
   return ()=>{
    clearInterval(updateTime)
   }

  }, [])

   const [isCalendarOpen, setIsCalendarOpen] = useState(false)
   const expandCalendar = () => {
    setIsCalendarOpen((pre)=>{
        return !pre
    })
   }
   
  
   const Container = styled.div`
     .time-box{
      width: 360px;
      height: 110px;
      background-color: #3b3b3b;
      color: white;
      position: relative;
     }
     .time-clock{
        position: absolute;
        font-size: 36px;
        left: 25px;
        top: 25px;
        height: 35px;
        line-height: 35px;
      }
      .time-year-day{
        position: absolute;
        left: 30px;
        bottom: 20px;
        color: #a6d8ff;
      }
   `
    return (
          <Container>
          <div className="time-box" onClick={expandCalendar}>
            <div className="time-clock">{currentTime.hours}:{currentTime.minutes}:{currentTime.seconds}</div>
            <div className="time-year-day">{currentTime.year}年{currentTime.month}月{currentTime.date}日</div>
          </div>
         {isCalendarOpen && 
         <div className='calendar'>
            <div>头部</div>
          </div>
          }   
       </Container>      
    )

}

export default Drag