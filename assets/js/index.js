function openModalSettings() {
  let modalBackground = document.getElementById("modal-background");
  modalBackground.style.opacity = 0.3;
  let modal = document.querySelector(".modal-settings");
  modal.style.visibility = "visible";
}

const dismissModal = Array.from(document.querySelectorAll(".dismiss-modal"));
for (let dismiss of dismissModal) {
  console.log(dismissModal);
  dismiss.addEventListener("click", closeModal);
}

function closeModal() {
  let modalBackground = document.getElementById("modal-background");
  modalBackground.style.opacity = 0;
  let modal = document.querySelector(".modal-settings");
  modal.style.visibility = "hidden";
}

const settings = document.getElementById("settings");
settings.addEventListener("click", openModalSettings);
console.log(settings);

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

let normalSwitches = Array.from(
  document.querySelectorAll(".toggle-thumb-switch-green")
);
for (let normalSwitch of normalSwitches) {
  normalSwitch.addEventListener("click", toggleSwitch);
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

let smallSwitches = Array.from(
  document.querySelectorAll(".toggle-thumb-switch-small-green")
);
for (let smallSwitch of smallSwitches) {
  smallSwitch.addEventListener("click", smallToggleSwitch);
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
