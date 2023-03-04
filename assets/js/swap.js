let button = document.getElementById("button-swap");
const numberArr = document.querySelectorAll(".number-information-text");
const minNumber = 0;
let maxNumber;
/**array number text */
numberArr.forEach((element) => {
  maxNumber = element.innerHTML * 1000;
  animatePercentageValue(element, minNumber, maxNumber, 4000);
});
/**swap function */

function swap() {
  /*assegnazioni variabili*/ 
  const text = document.querySelector(".swap-text");
  let realFirstContainer = document.querySelector(".first-trading-card-container-not-border");
  let realSecondContainer = document.querySelector(".second-trading-card-container-not-border");
  let realThirdContainer = document.querySelector(".third-trading-card-container-not-border");
  let realFourthContainer = document.querySelector(".fourth-trading-card-container-not-border");
  let firstContainer = document.querySelectorAll(".first-trading-card-container");
  let secondContainer = document.querySelectorAll(".second-trading-card-container");
  let thirdContaier = document.querySelectorAll(".third-trading-card-container");
  let fourthContainer = document.querySelectorAll(".fourth-trading-card-container");

  /*cicli per effettuare lo scambio */ 
  if (firstContainer.length > 0) {
    text.innerHTML = "farm";
    realFirstContainer.setAttribute("class","second-trading-card-container-not-border");
    realThirdContainer.setAttribute("class","fourth-trading-card-container-not-border");
    for (let i = 0; i < firstContainer.length; i++) {
      firstContainer[i].setAttribute("class", "second-trading-card-container");
      thirdContaier[i].setAttribute("class", "fourth-trading-card-container");
    }
  } else if (secondContainer.length > 0) {
    text.innerHTML = "Pool Syrup";
    realSecondContainer.setAttribute("class","first-trading-card-container-not-border");
    realFourthContainer.setAttribute("class","third-trading-card-container-not-border");
    for (let i = 0; i < secondContainer.length; i++) {
      secondContainer[i].setAttribute("class", "first-trading-card-container");
      fourthContainer[i].setAttribute("class", "third-trading-card-container");
    }
  }
}
/*swap call button*/
let timeCheck = setInterval(swap, 5500);
button.addEventListener("click", () => {
  clearInterval(timeCheck);
  swap();
  timeCheck = setInterval(swap, 5500);
});
/**animation function */
function animatePercentageValue(targetElement, startValue, endValue, duration) {
  let startTime = 0;
  const updateFunc = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const value = startValue + progress * (endValue - startValue);
    targetElement.innerHTML = `${Math.round(value).toLocaleString()}%`;
    if (progress < 1) {
      window.requestAnimationFrame(updateFunc);
    }
  };
  window.requestAnimationFrame(updateFunc);
}
