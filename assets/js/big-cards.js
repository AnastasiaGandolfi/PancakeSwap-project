const MIN_VALUE = 63516;
const MAX_VALUE = 85607;
const ANIMATION_DURATION = 1000; // in milliseconds
const UPDATE_INTERVAL = 10; // in milliseconds

function animateValue(targetElement, startValue, endValue, duration) {
  let startTime = null;
  const updateFunc = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const value = startValue + progress * (endValue - startValue);
    targetElement.innerHTML = `$${Math.round(value).toLocaleString()}`;
    if (progress < 1) {
      window.requestAnimationFrame(updateFunc);
    }
  };
  window.requestAnimationFrame(updateFunc);
}

const amountElem = document.getElementById('amount');
const startValue = MIN_VALUE;
const endValue = MAX_VALUE;
animateValue(amountElem, startValue, endValue, ANIMATION_DURATION);
