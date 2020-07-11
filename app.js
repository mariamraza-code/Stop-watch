var min=0;
var sec=0;
var ms=0;
var interval;
var minDigit=document.getElementById("min");
var secDigit=document.getElementById("sec");
var msDigit=document.getElementById("ms");


function timer(){
    ms++
    msDigit.innerHTML=ms;
if(ms>=100){
    sec++
    secDigit.innerHTML=sec;
    ms=0;
}

else if(sec >= 10){
min++
minDigit.innerHTML=min;
sec=0;
}


} 
function start(){
    
    interval=setInterval(timer,10)
    timeElapsed += 1;
}
function Pause(){
    clearInterval(interval)
}
function Reset(){
    min=0;
    sec=0;
    ms=0;
    minDigit.innerHTML=min
    secDigit.innerHTML=sec
    msDigit.innerHTML=ms
    Pause()
}