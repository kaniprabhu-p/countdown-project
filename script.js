const Days=document.querySelector("#days");
const Hours=document.querySelector("#hours");
const Minutes=document.querySelector("#minutes");
const Seconds=document.querySelector("#seconds");

function updateTime(){
    const currentyear= new Date().getFullYear();
    const newYear = new Date(`January 1 ${currentyear+1} 00:00:00`);
    const currentDate=new Date();
    const differnt = newYear-currentDate;
    const d= Math.floor(differnt/1000/60/60/24);
    const h= Math.floor((differnt/1000/60/60)%24);
    const m= Math.floor((differnt/1000/60)%60);
    const s= Math.floor((differnt/1000)%60);

    Days.innerHTML=d<10?"0"+d:d;
    Hours.innerHTML=h<10?"0"+h:h;
    Minutes.innerHTML=m<10?"0"+m:m;
    Seconds.innerHTML=s<10?"0"+s:s;
}
setInterval(updateTime,1000);