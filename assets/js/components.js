// copy color names on clipboard
async function copyTextContent(el) {
    let lowerCase = el.textContent.toLowerCase();
    try {
        await navigator.clipboard.writeText(lowerCase);
        alert('Content copied to clipboard');
    } catch (err) {
        alert('Failed to copy: ', err);
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

replaceAllCode();
