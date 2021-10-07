import { colors } from './colors';
import refs from './refs';

const PROMPT_DELAY = 1000;
let intervalId = null;

refs.startBtn.addEventListener('click', onChangeTheme);
refs.stopBtn.addEventListener('click', onStopChangeTheme);

function onChangeTheme() {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, PROMPT_DELAY);

  refs.startBtn.disabled = true;
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function onStopChangeTheme() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}
