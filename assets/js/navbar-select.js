// When the user mouse over the button, toggle between hiding and showing the dropdown content
function showNavbarDropdown(event) {
    event.stopPropagation();
    event.preventDefault();


    if (event) {
        let text = event?.target?.textContent;
        document.getElementById("main-item").textContent = text;
        let newImg = event.target.querySelector("img") ?
            event.target.querySelector("img").src : event.target.parentElement.querySelector("img").src
        document.getElementById("main-img").src = newImg;
        let texts = Array.from(document.querySelectorAll(".item-js div"))
        texts.forEach((text) => {
            text.style.color = "var(--text)"
        })
        if (event.target.querySelector("div")) {
            event.target.querySelector("div").style.color = "var(--secondary)";
        } else {
            event.target.parentElement.querySelector("div").style.color = "var(--secondary)";
        }
        document.querySelector(".navbar-dropdown-container").classList.remove("show");
    }
}

let itemsNavbar = Array.from(document.querySelectorAll(".item-js"))
itemsNavbar.forEach((item) => {
    item.addEventListener("mouseup", showNavbarDropdown)
})

let main = document.getElementById("main-item-img");
main.addEventListener("mouseenter", () => document.querySelector(".navbar-dropdown-container").classList.add("show"))
main.addEventListener("mouseleave", () => document.querySelector(".navbar-dropdown-container").classList.remove("show"))