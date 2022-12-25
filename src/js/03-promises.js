// Завдання 3 - генератор промісів

// HTML містить розмітку форми, в поля якої користувач буде вводити першу затримку в мілісекундах,
//   крок збільшення затримки для кожного промісу після першого і кількість промісів, яку необхідно створити.

// <form class="form">
//   <label>
//     First delay (ms)
//     <input type="number" name="delay" required />
//   </label>
//   <label>
//     Delay step (ms)
//     <input type="number" name="step" required />
//   </label>
//   <label>
//     Amount
//     <input type="number" name="amount" required />
//   </label>
//   <button type="submit">Create promises</button>
// </form>

//   Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) стільки разів, скільки ввели в поле amount.
// Під час кожного виклику передай їй номер промісу(position), що створюється, і затримку, враховуючи першу затримку(delay),
//   введену користувачем, і крок(step).

// Доповни код функції createPromise таким чином, щоб вона повертала один проміс,
//   який виконується або відхиляється через delay часу.Значенням промісу повинен бути об'єкт,
//   в якому будуть властивості position і delay зі значеннями однойменних параметрів.
//   Використовуй початковий код функції для вибору того, що потрібно зробити з промісом - виконати або відхилити.

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// all modules
import Notiflix from 'notiflix';
const fromForm = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

fromForm.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const fromFormToInput = document.querySelectorAll('label input');
  // console.log(event.currentTarget.elements.delay.value);
  // console.log(fromFormToInput[0].value); //firstDelay
  // console.log(fromFormToInput[1].value); //step
  // console.log(fromFormToInput[2].value); //amount
  const firstDelay = Number(fromFormToInput[0].value);
  let delay = firstDelay;
  const step = Number(fromFormToInput[1].value);
  const amount = Number(fromFormToInput[2].value);

  for (let i = 1; i <= amount + 1; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
}
