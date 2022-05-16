
import { DATA } from "./config.js";

const timerDiv = document.getElementById('timer')

const [day, month, yearTime] = DATA.time.split('.')
const [year, time] = yearTime.split(' ')
const [hours, minutes] = time.split(':')

const endDate = new Date( +year, month-1, +day, hours, minutes).getTime() 

const drawTime = ( day, hours, minutes, sec) =>{
    timerDiv.innerHTML = [ day, hours, minutes, sec].join(' | ')
}

let timeOut = setInterval(()=>{
    let nowDate = new Date().getTime()
    if( endDate > nowDate){
        let leftDate = (endDate - nowDate)
        let days = Math.floor(leftDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor((leftDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        hours < 10 && hours > 0 ? hours = `0${hours}`: null
        let minutes = Math.floor((leftDate % (1000 * 60 * 60)) / (1000 * 60));
        minutes < 10 && minutes > 0 ? minutes = `0${minutes}`: null
        let seconds = Math.floor((leftDate % (1000 * 60)) / 1000);
        seconds < 10 && seconds > 0 ? seconds = `0${seconds}`: null
        drawTime( days, hours, minutes, seconds )
    }else{
        console.log('invalid date')
        clearInterval(timeOut)
    }
}, 1000)