const _getDate:Function = (time: Date) => {



const seconds = time.getSeconds()
const minutes = time.getMinutes()
const hours = time.getHours()
const day = time.getDay()
let date = time.getDate()
const year = time.getFullYear()
const month = time.getMonth()+1
if(date && date<10){
    date =  +`0${date}`
}
return {
    seconds,
    minutes,
    hours,
    day,
    date,
    month,
    year
}

}

export default _getDate