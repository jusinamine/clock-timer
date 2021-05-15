let secondes = 0; //secondes counter
let millisecondes = 0; // millisecondes counter
let minutes = 0; // minutes counter
let hours = 0; // hours counter
let interval; // interval of timer //setInterval()

//dom elements
const secondeElement = document.getElementById("s");
const minuteElement = document.getElementById("m");
const millisecondeElement = document.getElementById("ms");
const hoursElement = document.getElementById("h");

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

//start the timer
startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  stopButton.style.display = "block";
  startTimer();
});

//stop the timer
stopButton.addEventListener("click", () => {
  stopButton.style.display = "none";
  startButton.style.display = "block";
  stopTimer();
});

//timer function
const startTimer = () => {
  //interval each 100ms
  interval = setInterval(() => {
    //when the timer is less than 24hours
    if (hours !== 24) {
      //minutes equal to 60 => add 1 hour to number of hours
      if (minutes === 60) {
        hours += 1;
        hoursElement.textContent = hours < 10 ? "0" + hours : hours; // if number is less than 10 for example 5 => 05
        secondes = 0;
        millisecondes = 0;
        minutes = 0;
        secondeElement.textContent = "00";
        millisecondes.textContent = "00";
        minuteElement.textContent = "00";
      } else {
        //secondes equal to 60 => add 1 to minutes counter
        if (secondes === 60) {
          minutes += 1;
          //not showing 01:60:30 it should be like that 01:59:30
          if (minutes != 60)
            minuteElement.textContent = minutes < 10 ? "0" + minutes : minutes; // if number is less than 10 for example 5 => 05
          secondes = 0;
          millisecondes = 0;
          secondeElement.textContent = "00";
          millisecondes.textContent = "00";
        } else {
          //millisocndes eual to 10 add 1 to secondes counter
          if (millisecondes === 10) {
            secondes += 1;
            //not showing 01:20:60 it should be like that 01:20:60
            if (secondes != 60)
              secondeElement.textContent =
                secondes < 10 ? "0" + secondes : secondes;
            millisecondes = 0;
          } else {
            millisecondeElement.textContent =
              millisecondes < 10 ? "0" + millisecondes : millisecondes; // if number is less than 10 for example 5 => 05
            millisecondes += 1;
          }
        }
      }
    } else {
      //if the timer reach 24 hours we will stop the timer
      stopTimer();
    }
  }, 100);
};

//stop the timer => set variables to default and clearing the interval
const stopTimer = () => {
  secondes = 0;
  minutes = 0;
  hours = 0;
  millisecondes = 0;
  secondeElement.textContent = "00";
  minuteElement.textContent = "00";
  hoursElement.textContent = "00";
  millisecondeElement.textContent = "00";
  clearInterval(interval);
};
