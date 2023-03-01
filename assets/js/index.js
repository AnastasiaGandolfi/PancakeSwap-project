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
}

function closeModal() {
  let modalBackground = document.getElementById("modal-background");
  modalBackground.style.opacity = 0;
  let modal = document.querySelector(".modal-settings");
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
    for (let i = 0; i < lightSwitches.length; i++) {
      lightSwitches[i].style = "transform: translateX(-24px);";
      lightSwitches[i].querySelector("img").src = "assets/icons/sun.svg";
    }
  } else {
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
setBulletsEventListeners();
setFilterByEventListeners();
setSmallSwitchesEventListeners();
setDismissModalEventListeners();
setNormalSwitchesEventListeners();

let lastScrollTop; // This Varibale will store the top position

let navbar = document.getElementById('navbar'); // Get The NavBar

window.addEventListener('scroll',function(){
 //on every scroll this funtion will be called
  
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //This line will get the location on scroll
  
  if(scrollTop > lastScrollTop){ //if it will be greater than the previous
    navbar.style.top='-55px';
    //set the value to the negetive of height of navbar 
  }
  
  else{
    navbar.style.top='0';
  }
  lastScrollTop = scrollTop;
})