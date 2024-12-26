function countdown() {
  let newYearDate = new Date('January 1, 2025 00:00:00').getTime();
  let now = new Date().getTime();
  let gap = newYearDate - now;


  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let days = Math.floor(gap / day);
  let hours = Math.floor((gap % day) / hour);
  let minutes = Math.floor((gap % hour) / minute);
  let seconds = Math.floor((gap % minute) / second);


  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

  
  if (gap < 0) {
      document.querySelector('#countdown').innerHTML = "🎉 Happy New Year! 🎉";
  }
}

setInterval(countdown, 1000);
countdown();










