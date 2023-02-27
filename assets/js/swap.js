function swap() {
  let element = document.querySelector(".first-trading-card-container");
  let secondContainer = document.querySelector(
    ".second-trading-card-container"
  );
  let thirdElement = document.querySelector(".third-trading-card-container");
  let fourthContainer = document.querySelector(
    ".fourth-trading-card-container"
  );
  if (element != null && element.className === "first-trading-card-container") {
    element.setAttribute("class", "second-trading-card-container");
    thirdElement.setAttribute("class", "fourth-trading-card-container");
  } else {
    secondContainer.setAttribute("class", "first-trading-card-container");
    fourthContainer.setAttribute("class", "third-trading-card-container");
  }
}
setInterval(swap, 5500);
