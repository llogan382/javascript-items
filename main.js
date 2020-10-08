let title = document.querySelector('h2');

const dropLetters = async () => {
    for (var letter of title.textContent) {
        await sleep(300);
        title.innerHTML += `
        <div class="centered">${letter}</div>
        `
    }
}
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}


dropLetters();






