// let today = new Date();

// 12 minutes in milliseconds
let twelveMinutes = 12 * 60 * 1000;

// timestamp in milliseconds upon page load
let initialTime = new Date().getTime();

// console.log("The initial time is: " + initialTime)

// calculate the time interval for updating styles
let interval = 1000; // 1 second

// target elements
let gooElement = document.querySelector('.goo');
let h1Element = document.querySelector('h1');
let drips = document.querySelectorAll('.drip');
let spanOne = document.querySelector('span');
let spanTwo = document.querySelector('span:nth-child(2)');
let spanThree = document.querySelector('span:nth-child(3)');


let timerInterval = setInterval(() => {
  // get time right now
  let currentTime = new Date().getTime();
  
  // console.log("The current time is: " + currentTime)
  
  let timeElapsed = currentTime - initialTime;
  
  let timeRemaining = twelveMinutes - timeElapsed;
  
  let countdownMinutes = timeRemaining / 1000 / 60;
  
  console.log(countdownMinutes);
  
 // color change after 3 minutes
  if (countdownMinutes <= 9) {
 h1Element.style.color = '#f49f3c'; 
  }
  // color change after 6 minutes
  if (countdownMinutes <= 6) {
 h1Element.style.color = '#f9ad54'; 
  }
   // color change after 9 minutes
  if (countdownMinutes <= 3) {
 h1Element.style.color = '#fbb768'; 
  }
  // color change after 12 minutes
  if (countdownMinutes <= 0) {
 h1Element.style.color = '#fbc88d'; 
  }
  

  // stop moving E after 6 minutes
  if (countdownMinutes <= 6) {
  spanOne.style.animation = 'none'; 
  }
  
  // stop moving G after 7 minutes
  if (countdownMinutes <= 5) {
 spanTwo.style.animation = 'none'; 
  }
  // stop moving G after 8 minutes
  if (countdownMinutes <= 4) { spanThree.style.animation = 'none'; 
  }
  
  // turn off drips at 8 minutes aka jammy yolk
  for(let drip of drips) {
    if(countdownMinutes <= 4) {
    drip.style.display = "none";
    }
  }
}, interval);