let deadline = 'September 25 2023 15:00:00'

if (Date.parse(new Date()) < Date.parse(deadline)) initializeClock('countdown', deadline);


/**
 * 
 * @param {string} endtime - string in the format: "January 01 2018 00:00:00 GMT+0300"
 * @returns {object} days,hours, minutes, seconds, t -timer time in milliseconds
 */
function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24))

  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}


/**
 * Запуск таймера
 * @param {string} id timer name
 * @param {string} endtime variable or string with the end date of the promotion
 */

function initializeClock(id, endtime) {
  let clock = document.getElementById(id);

  let hoursSpan = clock.querySelector('.hours');
  let minutesSpan = clock.querySelector('.minutes');
  let secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    let t = getTimeRemaining(endtime);

    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);

    }

  }

  // updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}




