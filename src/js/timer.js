import showConfetti from './confetti';

// Декларация класса
class NewTimer {
  constructor({ selector, targetDate, intervalId = null }) {
    (this.selector = selector),
      (this.targetDate = targetDate),
      (this.intervalId = intervalId);
  }

  // Запускает отсчёт
  start() {
    this.updateTimer(0);

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;

      this.updateTimer(deltaTime);

      if (deltaTime <= 0) {
        this.stop();
        return;
      }
    }, 1000);
  }

  // Останавливает отсчёт
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.updateTitle();
    this.updateTimer(0);
  }

  // Обновляет таймер
  updateTimer(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    const timerRef = document.querySelector('#timer-1');
    const daysRef = timerRef.querySelector('[data-value="days"]');
    const hoursRef = timerRef.querySelector('[data-value="hours"]');
    const minsRef = timerRef.querySelector('[data-value="mins"]');
    const secsRef = timerRef.querySelector('[data-value="secs"]');

    daysRef.textContent = `${days}`;
    hoursRef.textContent = `${hours}`;
    minsRef.textContent = `${mins}`;
    secsRef.textContent = `${secs}`;
  }

  // Корректирует числовой формат
  pad(value) {
    return String(value).padStart(2, '0');
  }

  // Обновляет контент
  updateTitle() {
    const titleRef = document.querySelector('#title');
    titleRef.textContent = 'Happy New Year 2022! 🥳';
    setInterval(showConfetti, 2000);
  }
}

// Конструктор класса
const newYearTimer = new NewTimer({
  selector: '#timer-1',
  targetDate: new Date(2022, 0, 1, 0, 0, 0),
});

// Запускает отсчёт немедленно
newYearTimer.start();

// Первый вариант через обьект

// // Цифры от таймера в DOM
// const daysRef = document.querySelector('[data-value="days"]');
// const hoursRef = document.querySelector('[data-value="hours"]');
// const minsRef = document.querySelector('[data-value="mins"]');
// const secsRef = document.querySelector('[data-value="secs"]');
// const titleRef = document.querySelector('#title');

// // Обьект с методами
// const timer = {
//   intervalId: null,

//   start() {
//     const targetDate = new Date(2022, 0, 1, 0, 0, 0);

//     updateTimer(0);

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = targetDate - currentTime;

//       updateTimer(deltaTime);

//       if (deltaTime <= 0) {
//         alert('С Новым годом! 🎄');
//         this.stop();
//       }
//     }, 1000);
//   },

//   stop() {
//     clearInterval(this.intervalId);
//     this.intervalId = null;
//     updateTimer(0);
//   },
// };

// // Запускает отсчёт
// timer.start();

// // Обновляет таймер
// function updateTimer(time) {
//   /*
//    * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//    * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//    */
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

//   /*
//    * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//    * остатка % и делим его на количество миллисекунд в одном часе
//    * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//    */
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );

//   /*
//    * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//    * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//    */
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

//   /*
//    * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//    * миллисекунд в одной секунде (1000)
//    */
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   daysRef.textContent = `${days}`;
//   hoursRef.textContent = `${hours}`;
//   minsRef.textContent = `${mins}`;
//   secsRef.textContent = `${secs}`;
// }

// function pad(value) {
//   return String(value).padStart(2, '0');
// }
