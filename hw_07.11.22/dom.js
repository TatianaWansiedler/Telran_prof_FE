// 1)Создайте кнопку в html при нажатию на которую в консоль выводится "привет".
let button = document.querySelector('.button');

button.addEventListener('click', showHelloFn);

function showHelloFn(event) {
    console.log('Hello');
}

// 2)Создайте блок в html c картинкой и кнопку. При нажатии на кнопку блок с картинкой 
// должен получать border - radius 50px и overflow hidden. При нажатии второй раз на кнопку
// стили должны убираться и возвращаться к исходным. Реализуйте через classList.toggle()

let picture = document.querySelector('.picture__item');
let actionButton = document.querySelector('.button-action');

actionButton.addEventListener('click', getSomeStyle);


function getSomeStyle(event) {
    picture.classList.toggle('get-style');
}




