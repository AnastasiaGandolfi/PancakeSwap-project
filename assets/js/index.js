let activeSwiper = 1;
const settings = document.getElementById("settings");
settings.addEventListener("click", openModalSettings);

function setDismissModalEventListeners() {
  const dismissModal = Array.from(document.querySelectorAll(".dismiss-modal"));

  for (let dismiss of dismissModal) {
    console.log(dismissModal);
    dismiss.addEventListener("click", closeModal);
  }
}

function openModalSettings() {
  let modalBackground = document.getElementById("modal-background");
  modalBackground.style.opacity = 0.3;
  let modal = document.querySelector(".modal-settings");
  modal.style.visibility = "visible";
  modalBackground.style.zIndex = "9999";
  modal.style.zIndex = "9999";
  console.log("Ciao");
}

function closeModal() {
  let modalBackground = document.getElementById("modal-background");
  modalBackground.style.opacity = 0;
  modalBackground.style.zIndex = "-1";
  let modal = document.querySelector(".modal-settings");
  modal.style.zIndex = "-10";
  modal.style.visibility = "hidden";
}

function setLightSwitchesEventListeners() {
  let lightSwitches = Array.from(
    document.querySelectorAll(".toggle-thumb-switch")
  );
  let bgLightSwitches = Array.from(
    document.querySelectorAll(".toggle-thumb-switch-bg")
  );
  lightSwitches = [...lightSwitches, ...bgLightSwitches];

  for (let lightSwitch of lightSwitches) {
    lightSwitch.addEventListener("click", changeTheme);
  }
}

function changeTheme() {
  let lightSwitches = Array.from(
    document.querySelectorAll(".toggle-thumb-switch")
  );
  let lightSwitchesBg = Array.from(
    document.querySelectorAll(".toggle-thumb-switch-bg")
  );
  lightSwitches = [...lightSwitches, ...lightSwitchesBg];
  let theme = document.documentElement.getAttribute("data-theme");
  theme === "dark"
    ? document.documentElement.setAttribute("data-theme", "light")
    : document.documentElement.setAttribute("data-theme", "dark");
  let icons = document.getElementsByClassName("icon");
  for (let i = 0; i < icons.length; i++) {
    icons[i].style.filter = theme == "dark" ? "invert(1)" : "invert(0)";
  }
  if (theme === "dark") {
    document.getElementById(
      "waves"
    ).innerHTML = `<svg viewBox="0 0 1660 339" class="sc-4ba21b47-0 IIbzK slide-svg-light" width="100%" color="text" xmlns="http://www.w3.org/2000/svg"><path d="M804 167.023C520.5 167.023 267.5 290.522 0 304.5V339H1660V0.5C1358.83 0.5 1104 167.023 804 167.023Z" fill="url(#paint0_linear_light)"></path><defs><linearGradient id="paint0_linear_light" x1="830" y1="84" x2="830" y2="339" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.48"></stop><stop offset="0.566389" stop-color="white" stop-opacity="0.35"></stop><stop offset="1" stop-color="white"></stop></linearGradient></defs></svg>`;
    
    for (let i = 0; i < lightSwitches.length; i++) {
      lightSwitches[i].style = "transform: translateX(-24px);";
      lightSwitches[i].querySelector("img").src = "assets/icons/sun.svg";
    }
  } else {
    document.getElementById(
      "waves"
    ).innerHTML = `<svg viewBox="0 0 1660 339" class="sc-4ba21b47-0 IIbzK slide-svg-dark" width="100%" color="text" class="icon"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M804 166.523C520.5 166.523 267.5 290.022 0 304V338.5H1660V0C1358.83 0 1104 166.523 804 166.523Z" 
      fill="url(#paint0_linear_dark)"></path>
    <defs>
      <linearGradient id="paint0_linear_dark" x1="830" y1="83.5" x2="830" y2="338.5"
        gradientUnits="userSpaceOnUse">
        <stop stop-color="#08060B" stop-opacity="0.2"></stop>
        <stop offset="0.545554" stop-color="#08060B" stop-opacity="0.5"></stop>
        <stop offset="1" stop-color="#08060B"></stop>
      </linearGradient>
    </defs>
  </svg>`;
    for (let i = 0; i < lightSwitches.length; i++) {
      lightSwitches[i].style = "transform: translateX(0px);";
      lightSwitches[i].querySelector("img").src =
        "assets/icons/svgexport-40.svg";
    }
  }
}

function setNormalSwitchesEventListeners() {
  let normalSwitches = Array.from(
    document.querySelectorAll(".toggle-thumb-switch-green")
  );
  for (let normalSwitch of normalSwitches) {
    normalSwitch.addEventListener("click", toggleSwitch);
  }
}

function toggleSwitch(evt) {
  if (evt.target.classList.value.includes("active")) {
    evt.target.classList.remove("active");
    evt.target.style = "transform: translateX(-24px);";
    evt.target.parentNode.style = "background-color: var(--textDisabled)";
  } else {
    evt.target.classList.add("active");
    evt.target.style = "transform: translateX(0px);";
    evt.target.parentNode.style = "background-color: var(--success)";
  }
}

function setSmallSwitchesEventListeners() {
  let smallSwitches = Array.from(
    document.querySelectorAll(".toggle-thumb-switch-small-green")
  );
  for (let smallSwitch of smallSwitches) {
    smallSwitch.addEventListener("click", smallToggleSwitch);
  }
}
function smallToggleSwitch(evt) {
  if (evt.target.classList.value.includes("active")) {
    evt.target.classList.remove("active");
    evt.target.style = "transform: translateX(-14px);";
    evt.target.parentNode.style = "background-color: var(--textDisabled)";
  } else {
    evt.target.classList.add("active");
    evt.target.style = "transform: translateX(0px);";
    evt.target.parentNode.style = "background-color: var(--success)";
  }
}

let modalSwitcher = document.querySelectorAll(".modal-button");
for (let switcher of modalSwitcher) {
  console.log(switcher);
  switcher.addEventListener("click", switchIt);
}

function switchIt(evt) {
  for (let switcher of modalSwitcher) {
    switcher.classList.remove("active");
  }
  evt.target.classList.add("active");
  evt.target.parentNode.classList.add("active");
}

function setFilterByEventListeners() {
  const activeButton = document.querySelector(".filter-button-switched.active");
  const finishedButton = document.querySelector(
    ".filter-button-switched.terminato"
  );

  activeButton.addEventListener("click", function () {
    activeButton.classList.add("clicked");
    activeButton.classList.remove("active");
    finishedButton.classList.remove("clicked");
    finishedButton.classList.add("active");
  });

  finishedButton.addEventListener("click", function () {
    finishedButton.classList.add("clicked");
    finishedButton.classList.remove("active");
    activeButton.classList.remove("clicked");
    activeButton.classList.add("active");
  });
}
//filter-by-switch-button

function setBulletsEventListeners() {
  document
    .querySelector("#swiper-bullet-1")
    .addEventListener("click", function () {
      activateSwiper(1);
    });
  document
    .querySelector("#swiper-bullet-2")
    .addEventListener("click", function () {
      activateSwiper(2);
    });
  document
    .querySelector("#swiper-bullet-3")
    .addEventListener("click", function () {
      activateSwiper(3);
    });
}

function activateSwiper(n) {
  document
    .querySelector("#swiper-bullet-1")
    .classList.remove("swiper-bullet-active");
  document
    .querySelector("#swiper-bullet-2")
    .classList.remove("swiper-bullet-active");
  document
    .querySelector("#swiper-bullet-3")
    .classList.remove("swiper-bullet-active");
  document
    .querySelector("#swiper-item-1")
    .classList.remove("swiper-item-active");
  document
    .querySelector("#swiper-item-2")
    .classList.remove("swiper-item-active");
  document
    .querySelector("#swiper-item-3")
    .classList.remove("swiper-item-active");
  document
    .querySelector(`#swiper-bullet-${n}`)
    .classList.add("swiper-bullet-active");
  document
    .querySelector(`#swiper-item-${n}`)
    .classList.add("swiper-item-active");
}

function startSwiper() {
  setInterval(() => {
    if (activeSwiper === 1) {
      activeSwiper = 2;
      document.querySelector("#swiper-bullet-2").click();
    } else if (activeSwiper === 2) {
      activeSwiper = 3;
      document.querySelector("#swiper-bullet-3").click();
    } else if (activeSwiper === 3) {
      activeSwiper = 1;
      document.querySelector("#swiper-bullet-1").click();
    }
  }, 3000);
}

startSwiper();
setLightSwitchesEventListeners();
setDismissModalEventListeners();
setBulletsEventListeners();
//setFilterByEventListeners();
setSmallSwitchesEventListeners();
setNormalSwitchesEventListeners();

let lastScrollTop; // This Varibale will store the top position

let navbar = document.getElementById("navbar"); // Get The NavBar
let antiphishing = document.getElementById("antiphishing-banner");

window.addEventListener("scroll", function () {
  //on every scroll this funtion will be called

  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //This line will get the location on scroll

  if (scrollTop > lastScrollTop && scrollTop > "125") {
    //if it will be greater than the previous
    navbar.style.top = "-70px";
    antiphishing.style.top = "-70px";
    //set the value to the negetive of height of navbar
  } else {
    antiphishing.style.top = "0px";
    navbar.style.top = "70px";
  }
  lastScrollTop = scrollTop;
});
