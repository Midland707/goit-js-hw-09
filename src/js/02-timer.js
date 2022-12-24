// Завдання 2 - таймер зворотного відліку
// Виконуй це завдання у файлах 02 - timer.html і 02 - timer.js.
// Напиши скрипт таймера, який здійснює зворотний відлік до певної дати.Такий таймер може використовуватися
// у блогах та інтернет - магазинах, сторінках реєстрації подій, під час технічного обслуговування тощо.

// Елементи інтерфейсу
// HTML містить готову розмітку таймера, поля вибору кінцевої дати і кнопку, по кліку на яку,
//     таймер повинен запускатися.Додай мінімальне оформлення елементів інтерфейсу.

// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// all modules
import Notiflix from 'notiflix';

const bodyStyles = document.querySelector('body');
const dataInputField = document.querySelector(`#datetime-picker`);
const dataDays = document.querySelector(`[data-days]`);
const dataHours = document.querySelector(`[data-hours]`);
const dataMinutes = document.querySelector(`[data-minutes]`);
const dataSeconds = document.querySelector(`[data-seconds]`);
const startButton = document.querySelector(`[data-start]`);
startButton.disabled = true;
dataInputField.disabled = false;
startButton.classList.remove('isActive');
let selectedDate = null;

const timeStyles = `
   <style>
   #datetime-picker {
    font-size: 30px;
    margin-top: 30px;
   }
   .isActive {
    background-color: SteelBlue;
    color: white;
   }
  button {
    font-size: 30px;
    cursor:pointer;
   }
   .timer {
    display: flex;
    margin-top: 30px;
    gap: 20px;
    }
   .field {
    display: flex;
    flex-direction: column;
    align-items: center;
   }
   .value {
    font-size: 45px;
   }
   .label {
    text-transform: uppercase;
    font-size: 28px;
   }
   </style>`;
bodyStyles.insertAdjacentHTML('afterbegin', timeStyles);

// Для підрахунку значень використовуй готову функцію convertMs, де ms - різниця між кінцевою і поточною датою в мілісекундах.
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  dateFormat: 'Y-m-d H:i',
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(tempSelectedDates) {
    selectedDate = tempSelectedDates[0].getTime();
    const tempCurrentDate = new Date().getTime();
    if (selectedDate < tempCurrentDate) {
      Notiflix.Notify.failure(
        'Будь ласка виберіть дату з найближчого майбутнього'
      );
      startButton.disabled = true;
      startButton.classList.remove('isActive');
    } else {
      startButton.disabled = false;
      startButton.classList.add('isActive');
      Notiflix.Notify.info('Гарний вибір');
    }
  },
};

flatpickr('#datetime-picker', options);

startButton.addEventListener('click', startTimer);
function startTimer() {
  startButton.disabled = true;
  dataInputField.disabled = true;
  startButton.classList.remove('isActive');
  Notiflix.Notify.success('Потинаємо відлік');
  const starttDate = new Date().getTime();
  setTimeToWindow(selectedDate - starttDate);
  setInterval(() => {
    const currentDate = new Date().getTime();
    setTimeToWindow(selectedDate - currentDate);
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function setTimeToWindow(ms) {
  const { days, hours, minutes, seconds } = convertMs(ms);
  dataDays.textContent = addLeadingZero(days);
  dataHours.textContent = addLeadingZero(hours);
  dataMinutes.textContent = addLeadingZero(minutes);
  dataSeconds.textContent = addLeadingZero(seconds);
}
