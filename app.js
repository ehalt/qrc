
const qrContainer = document.getElementById('qr-container');
const generateBtn = document.getElementById('generate');
const input = document.getElementById('txtinput');
const qrImg = document.getElementById('qrimg');

generateBtn.addEventListener('click', () => {
    let getVal = input.value;
    // console.log(getVal);
    if(!getVal) return;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${getVal}`
    qrImg.addEventListener('load', () => {
        qrContainer.classList.remove('hidden');
    })
});