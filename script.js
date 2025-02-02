const messages = [
    "Are you sure?",
    "Really sure??",
    "Weh????",
    "Di ngaaa???",
    "BERNNNN ANO BAAAA HUHU",
    "DI NO NA Q LAB???",
    "BB!!!!!",
    ">:'[[[[[[",
    "ok sige, if that's what u want",
    "JJK LANG BILI NA WUV UUUU :((( ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}