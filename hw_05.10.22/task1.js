// 1)	Сравнить две константы двумя разныеми способами:
// - Создать две константы, присвоив одной значение строкового типа, а второй числового
// - Сравнить эти констатны и вывести в консоль результат типа boolean так, чтобы
// в одном случае ( == ) он был true, а в другом ( === ) false

const typeSting = '123.4';
const typeNumber = 123.4;
console.log(typeSting == typeNumber); //true
console.log(typeSting === typeNumber); //false

