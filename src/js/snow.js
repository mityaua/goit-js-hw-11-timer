import snowf from 'snowf';

snowf.init({
  size: 5,
  amount: 50,
});

// Сохраняет пропорции при смене экрана (костыль для бага пакета)
window.onresize = function () {
  setTimeout(() => {
    location.reload();
  }, 500);
};