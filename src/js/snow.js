import snowf from 'snowf';

snowf.init();

// Сохраняет пропорции при смене экрана (костыль для бага пакета)
window.onresize = function () {
  setTimeout(() => {
    location.reload();
  }, 500);
};