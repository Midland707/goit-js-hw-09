// Завдання 1 - перемикач кольорів

// HTML містить кнопки «Start» і «Stop».

// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>

// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const styles = document.querySelector('body');
const buttonsStyles = `
<style>
button {
      height: 100px;
      width: 200px;
      text-transform: uppercase;
      font-size: 40px;
      cursor: pointer;
        margin: 0;
        position: absolute;
        top: 40%;
        -ms-transform: translateY(-50%, -50%);
        transform: translateY(-50%, -50%);
  }
  button[data-start] {
        left: 38%;
  }
    button[data-stop] {
        left: 50%;
  }
  </style>`;
styles.insertAdjacentHTML('afterbegin', buttonsStyles);

const bodyStyles = document.querySelector('body');
const buttonStart = document.querySelector(`[data-start]`);
const buttonStop = document.querySelector(`[data-stop]`);
let timerId = null;
buttonStart.disabled = false;
buttonStop.disabled = true;

function startFunction() {
  buttonStart.disabled = true;
  buttonStop.disabled = false;
  const startColor = getRandomHexColor();
  bodyStyles.style.backgroundColor = startColor;
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    bodyStyles.style.backgroundColor = color;
  }, 1000);
}

function stopFunction() {
  clearInterval(timerId);
  buttonStart.disabled = false;
  buttonStop.disabled = true;
}

buttonStart.addEventListener('click', startFunction);
buttonStop.addEventListener('click', stopFunction);
