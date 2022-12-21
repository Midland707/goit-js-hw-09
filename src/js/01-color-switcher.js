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

const bodyStyles = document.querySelector('body');
const buttonStart = document.querySelector(`[data-start]`);
const buttonStop = document.querySelector(`[data-stop]`);
let timerId = null;

function startFunction() {
  console.log('Start');
  timerId = setInterval(() => {
    const color = getRandomHexColor();
    bodyStyles.style.backgroundColor = color;
    console.log(`Random color =${color}`);
  }, 1000);
}

function stopFunction() {
  console.log('Stop');
  clearInterval(timerId);
}

buttonStart.addEventListener('click', startFunction);
buttonStop.addEventListener('click', stopFunction);
