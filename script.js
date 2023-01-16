function NewyearTime(){
days=document.getElementById("days");
hours=document.getElementById("hours");
minutes=document.getElementById("minutes");
seconds=document.getElementById("seconds");
const currentyear=new Date().getFullYear();
const currentDate=new Date();
const nextyear=new Date(`January 1 ${currentyear+1} 00:00:00`);
const diff=nextyear-currentDate;
const d=Math.floor(diff/1000/60/60/24);
const h=Math.floor((diff/1000/60/60)%24);
const m=Math.floor((diff/1000/60)%60);
const s=Math.floor(diff/1000%60);
days.innerHTML=d;
hours.innerHTML=h;
minutes.innerHTML=m;
seconds.innerHTML=s;
}
setInterval(NewyearTime,1000);