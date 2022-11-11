// 1)
// Создать две кнопки - одна из них блокирует input с помощью атрибута disabled, а другая разблокирует.
// // Заблокировать Разблокировать - 
// // Какой-то текст! - input 

let unlockBt = document.querySelector('.button-unlock');
let blockBt = document.querySelector('.button-block');
let input = document.querySelector('#input');

unlockBt.addEventListener('click', unlockInput);
blockBt.addEventListener('click', blockInput);


function blockInput(event) {
    input.setAttribute('disabled', true);
}

function unlockInput(event) {
    if (input.hasAttribute('disabled')) {
        input.removeAttribute('disabled');
    }
}

// 2)
// Задача querySelectorAll
// Поменяйте содержимое абзацев на их порядковый номер в коде.
// Используйте перебор, индексы и textContent

//Заголовок, не поменяется.
//Абзац, поменяется.
// Абзац, поменяется.
// Абзац, поменяется.

let paragraphs = document.querySelectorAll('.text');

paragraphs.forEach((paragr, index) => paragraphs[index].textContent = `${index + 1}`);


//можно сделать смену текста по кнопке 

// let changeBt = document.querySelector('.change-text');

// changeBt.addEventListener('click', changeText);

// function changeText(event) {
//     paragraphs.forEach((paragr, index) => paragraphs[index].textContent = `${index + 1}`);
// }
