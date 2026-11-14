const copiedDiv = document.getElementById("copiedDiv");
const copiedTxt = document.getElementById("copiedTxt");
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

document.getElementById('slackCopy').addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText('U0BF2GBHQ3G');
        copiedDiv.classList.remove("closing");
        copiedDiv.classList.add("open");
        copiedDiv.style.display = "flex";
        copiedTxt.textContent = "Slack member ID copied to clipboard!";

        if(copiedDiv.style.display != "none") {
            await wait(2000);
            copiedDiv.classList.remove("open");
            copiedDiv.classList.add("closing");
            await wait(300);
            copiedDiv.style.display = "none";
        }
    } catch (err) {
        console.error('Failed to copy:', err);
    }
});

document.getElementById('discordCopy').addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText('1046328430414794803');
        copiedDiv.classList.remove("closing");
        copiedDiv.classList.add("open");
        copiedDiv.style.display = "flex";
        copiedTxt.textContent = "Discord user ID copied to clipboard!";

        if(copiedDiv.style.display != "none") {
            await wait(2000);
            copiedDiv.classList.remove("open");
            copiedDiv.classList.add("closing");
            await wait(300);
            copiedDiv.style.display = "none";
        }
    } catch (err) {
        console.error('Failed to copy:', err);
    }
});

document.getElementById('githubCopy').addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText('@suklaasukkulayt');
        copiedDiv.classList.remove("closing");
        copiedDiv.classList.add("open");
        copiedDiv.style.display = "flex";
        copiedTxt.textContent = "GitHub username copied to clipboard!";

        if(copiedDiv.style.display != "none") {
            await wait(2000);
            copiedDiv.classList.remove("open");
            copiedDiv.classList.add("closing");
            await wait(300);
            copiedDiv.style.display = "none";
        }
    } catch (err) {
        console.error('Failed to copy:', err);
    }
});

document.getElementById("closeBtn").addEventListener('click', () => {
    copiedDiv.classList.remove("open");
    copiedDiv.classList.add("closing");
    setTimeout(() => {
        copiedDiv.style.display = "none";
    }, 500);
})