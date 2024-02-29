const countdownContainer = document.querySelector('.countdown-container');
const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector('#hours');
const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 10);

const updateCountdown = () => {
  const now = new Date();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    countdownContainer.style.display = 'none';
    document.querySelector('.display').innerHTML = 'WE ARE LIVE';
  }
};

const x = setInterval(updateCountdown, 1000);
updateCountdown();