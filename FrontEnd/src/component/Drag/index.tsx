import React, { useEffect, useState } from "react"
import { _getDate } from "@/tools"

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

    return (
          <div className="container">
          <div className="time-clock" onClick={expandCalendar}>
            <div>{currentTime.hours}:{currentTime.minutes}:{currentTime.seconds}</div>
            <div>{currentTime.year}年{currentTime.month}月{currentTime.date}日</div>
          </div>
         {isCalendarOpen && 
         <div className='calendar'>
            <div>头部</div>
          </div>
          }
       
          </div>       
    )

}

export default Drag