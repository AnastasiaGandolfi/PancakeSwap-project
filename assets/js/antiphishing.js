// Hide the antiphishing banner by clicking the x icon
let icon = document.getElementById("x-icon")
icon.addEventListener("click", function () {
  let banner = document.getElementById("antiphishing-banner")
  if (banner) { banner.style.display = "none"; }
})