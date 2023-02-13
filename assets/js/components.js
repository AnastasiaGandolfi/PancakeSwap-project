async function copyTextContent(el) {
    let lowerCase = el.textContent.toLowerCase();
    try {
        await navigator.clipboard.writeText(lowerCase);
        alert('Content copied to clipboard');
    } catch (err) {
        alert('Failed to copy: ', err);
    }
    
}
