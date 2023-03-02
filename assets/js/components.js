// copy color names on clipboard
async function copyTextContent(el) {
  let lowerCase = el.textContent.toLowerCase();
  try {
    await navigator.clipboard.writeText(lowerCase);
    document.getElementById("tooltip").style.visibility = "visible";
    setTimeout(() => {
      document.getElementById("tooltip").style.visibility = "hidden";
    }, 500);
  } catch (err) {
    alert("Failed to copy: ", err);
  }
}

const copyButtonLabel = "Copy Code";
// use a class selector if available
let blocks = document.querySelectorAll("pre");

blocks.forEach((block) => {
  // only add button if browser supports Clipboard API
  if (navigator.clipboard) {
    let button = document.createElement("button");

    button.innerText = copyButtonLabel;
    block.appendChild(button);

    button.addEventListener("click", async () => {
      await copyCode(block, button);
    });
  }
});

async function copyCode(block, button) {
  let code = block.querySelector("code");
  let text = code.innerText;

  await navigator.clipboard.writeText(text);

  // visual feedback that task is completed
  button.innerText = "Code Copied";

  setTimeout(() => {
    button.innerText = copyButtonLabel;
  }, 700);
}

// replace < and > with html entities
function replaceAllCode() {
  let codeBlocks = document.querySelectorAll("code");
  codeBlocks.forEach((codeBlock) => {
    codeBlock.innerHTML = replaceltgt(codeBlock.innerHTML);
  });
}

function replaceltgt(str) {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function copyHtml(el) {
  let html = el.outerHTML;
  console.log(el);
  try {
    await navigator.clipboard.writeText(html);
    document.getElementById("tooltip").style.visibility = "visible";
    setTimeout(() => {
      document.getElementById("tooltip").style.visibility = "hidden";
    }, 500);
  } catch (err) {
    alert("Failed to copy: ", err);
  }
}
replaceAllCode();

// document.getElementById("switch").addEventListener("click", () => {

//   let theme = document.documentElement.getAttribute("data-theme");
//   theme === "dark"
//     ? (document.documentElement.setAttribute("data-theme", "light"))
//     : (document.documentElement.setAttribute("data-theme","dark"));

//   theme === "dark"
//     ? (document.getElementById("switch").querySelector("p").textContent =
//         "Light Mode")
//     : (document.getElementById("switch").querySelector("p").textContent =
//         "Dark Mode");

//   let icons = document.getElementsByClassName("icon");
//   for (let i = 0; i < icons.length; i++) {
//     icons[i].style.filter = theme == "dark" ? "invert(1)" : "invert(0)";
//   }
// });

// Hide the antiphishing banner by clicking the x icon
// let icon = document.getElementById("icon")
// icon.addEventListener("click", function() {
//   let banner = document.getElementById("antiphishing-banner")
//   banner.style.display = "none";
// })
function standard(){
  console.log("I");
  Array.from(document.querySelectorAll('pre')).forEach(el => el.style.display = 'block');
}

function compact(){
  Array.from(document.querySelectorAll('pre')).forEach(el => el.style.display = 'none');
}

let previewTopB = false;

function previewTop(){
  document.querySelector('#previewTop p').textContent = previewTopB ? 'Preview base' : 'Preview top';
  previewTopB = !previewTopB;
  document.querySelector('.navbar').classList.toggle('navbar-fixed');
}