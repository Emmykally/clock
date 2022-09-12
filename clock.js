const secondHand = document.querySelector(".second");
const minutesHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

setInterval(defineClock,1000);

function defineClock(){
    const actualDate = new Date();
    const secondsRatio = actualDate.getSeconds()/60;
    const minutesRatio = (secondsRatio + actualDate.getMinutes())/60;
    const hoursRatio = (minutesRatio + actualDate.getHours())/12;
    clockMovement(secondHand, secondsRatio);
    clockMovement(minutesHand, minutesRatio);
    clockMovement(hourHand, hoursRatio);
}

function clockMovement(element, rotation){
    element.style.setProperty("--rotation", rotation * 360);
}
defineClock();

//Digital Clock
const digitalHour = document.getElementById("digital-hour");
const digitalMinute = document.getElementById("digital-minute");
const digitalSecond = document.getElementById("digital-second");

setInterval(digitalClock, 1000);

function digitalClock(){
    const realDate = new Date();
    let mySecond = realDate.getSeconds();
    let myMinute = realDate.getMinutes();
    let myHour = realDate.getHours();
    
    if(myHour < 10){
        myHour = "0" + myHour;
    }
    if(myMinute < 10){
        myMinute = "0" + myMinute;
    }
    if(mySecond < 10){
        mySecond = "0" + mySecond;
    }
    digitalHour.textContent = myHour;
    digitalMinute.innerText = myMinute;
    digitalSecond.textContent = mySecond;
}