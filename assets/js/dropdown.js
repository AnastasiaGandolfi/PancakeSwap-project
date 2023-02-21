// When the user clicks on the button, toggle between hiding and showing the dropdown content
function showDropdown(event) {
    document.querySelector(".dropdown-content-ul").classList.toggle("show");
    if (document.querySelector(".dropdown-content-ul").classList.contains("show")) {
        document.getElementById("dropdown-item-container").style["border-radius"] = "16px 16px 0px 0px"
    } else {
        document.getElementById("dropdown-item-container").style["border-radius"] = "16px"
    }
    if (event) {
        let lastText = document.getElementById("dropdown-title").textContent;
        let text = event?.target?.textContent;
        document.getElementById("dropdown-title").textContent = text;
        event.target.textContent = lastText;
        event.stopPropagation();
    }
}

let items = Array.from(document.querySelectorAll(".dropdown-li"))
items.forEach((item) => {
    item.addEventListener("click", showDropdown)
})

