const copiedDiv = document.getElementById("copiedDiv");
const copiedTxt = document.getElementById("copiedTxt");

document.getElementById('slackCopy').addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText('U0BF2GBHQ3G');
        copiedDiv.classList.add("open");
        copiedDiv.style.display = "flex";
        copiedTxt.textContent = "Slack member ID copied to clipboard!";
    } catch (err) {
        console.error('Failed to copy:', err);
    }
});

document.getElementById("closeBtn").addEventListener('click', () => {
    copiedDiv.style.display = "none";
})