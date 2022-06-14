const btn = document.querySelector('.btn');
const txt = document.querySelector('.txt');

btn.addEventListener('click', () => {
    txt.classList.toggle('showTxt');
})