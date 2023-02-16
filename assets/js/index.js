function openModalSettings() {
  let modalBackground = document.getElementById("modal-background");
  modalBackground.style.opacity = 1;
}

const settings = document.getElementById("settings");
settings.addEventListener("click", openModalSettings);
console.log(settings);

let lightSwitches = Array.from(document.querySelectorAll(".toggle-thumb-switch"));
let bgLightSwitches = Array.from(document.querySelectorAll(".toggle-thumb-switch-bg"))
lightSwitches = [...lightSwitches, ...bgLightSwitches];
for(let lightSwitch of lightSwitches) {
  lightSwitch.addEventListener("click", changeTheme);
}

function changeTheme() {
  let lightSwitches = Array.from(document.querySelectorAll(".toggle-thumb-switch"));
  let lightSwitchesBg = Array.from(document.querySelectorAll(".toggle-thumb-switch-bg"));
  lightSwitches = [...lightSwitches, ...lightSwitchesBg]
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

