const secondHand = document.querySelector('.second-hand');
const dayHand = document.querySelector('.day-hand');

function setDate() {
  const now = new Date();
  const second = now.getSeconds();
  const secondDeg = (second/60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  
  const hour = now.getHours();
  const min = now.getMinutes();
  const day = now.getDay() + (hour/24 + min/60/24 + second/60/60/24);
  const dayDeg = 90 + (360/14) + (360/7)*day;
  dayHand.style.transform = `rotate(${dayDeg}deg)`;
  return [secondDeg, dayDeg];
}
let [secondDeg, dayDeg] = setDate();

function upDate() {  
  secondDeg += 6;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  
  dayDeg += 6/60/60/24;
  dayHand.style.transform = `rotate(${dayDeg}deg)`;
}
setInterval(upDate, 1000);