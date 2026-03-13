import { initializeApp } from './app/app-initializer.js';
import { TEXT } from './language.js';
import './export-highlight-enhancements.js';

// 移动端优化：禁止双击缩放
(function preventZoom() {
  // 禁止双击缩放
  document.addEventListener('dblclick', (event) => {
    event.preventDefault();
  }, { passive: false });
  
  // 禁止触摸缩放
  document.addEventListener('touchmove', (event) => {
    if (event.scale !== 1) {
      event.preventDefault();
    }
  }, { passive: false });
  
  // 禁止手势缩放
  document.addEventListener('gesturestart', (event) => {
    event.preventDefault();
  }, { passive: false });
})();

initializeApp().catch((error) => {
  console.error(TEXT.app.initFailed, error);
});
