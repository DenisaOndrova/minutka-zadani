const alarm = document.querySelector('.alarm');
const audio = document.querySelector('audio');

const seconds = prompt('Enter how many seconds should pass before the alarm rings');
setTimeout(() => {
  alarm.classList.add('alarm--ring');
  audio.play();
}, seconds * 1000);

const cancelBtn = document.createElement('button');
cancelBtn.textContent = 'Cancel';
cancelBtn.addEventListener('click', () => {
  clearTimeout(timer);
  alarm.classList.remove('alarm--ring');
});
document.querySelector('.container').appendChild(cancelBtn);
