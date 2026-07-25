const intro = document.getElementById('intro');
const main = document.getElementById('main');

main.classList.add('hidden');

document.getElementById('startButton').onclick = () => {
  intro.classList.add('hidden');
  main.classList.remove('hidden');
};

const target = new Date('2026-08-11T15:00:00');

const countdown = document.getElementById('countdown');

setInterval(() => {
  let d = target - new Date();

  if (d < 0) {
    countdown.innerHTML = '¡La misión ha comenzado!';
    return;
  }

  let days = Math.floor(d / 86400000);
  let hours = Math.floor((d % 86400000) / 3600000);
  let minutes = Math.floor((d % 3600000) / 60000);
  let seconds = Math.floor((d % 60000) / 1000);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

}, 1000);
