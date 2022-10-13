// First level: Напишите функцию, которая будет проверять тип данных (typeof someValue) и если
// это будет строка, то проверять сколько в ней символов, возвращать (return) результат (количество символов в строке - число).
// если это значение присланное в функцию будет число, то его нужно переводить в строку (String(someValue)) и возвращать из функции количество символов в этой преобразованной из числа строке.
// если это значение присланное в функцию будет boolean - true или false, то его нужно переводить в строку (String(someValue)) и возвращать из функции количество символов в этой преобразованном из boolean значения строке.
// если тип данных не строка и не число и не boolean, то функция должена вернуть строку  'неверный тип данных'

const getStrLength = (someValue) =>
    typeof someValue == 'string' ? someValue.length
        : typeof someValue == 'number' || typeof someValue == 'boolean' ? String(someValue).length
            : 'неверный тип данных';

console.log(getStrLength(234)); // return => 3
console.log(getStrLength('hello')); // return => 5
console.log(getStrLength(1 !== 10)); // return => 4 
console.log(getStrLength(null)); // return => 'неверный тип данных'

// Second level: Реализуйте функцию из первой задачи во всех трех синтаксисах функций - декларативно, как выражение и как стрелочную функцию.
// Прокомментируйте аргументированно почему на Ваш взгляд один из способов описания функции предпочтительнее.

//1. Function Declaration

function getStrLength1(someValue) {
    if (typeof someValue == 'string') return someValue.length;
    if (typeof someValue == 'number' || typeof someValue == 'boolean') return String(someValue).length;
    return 'неверный тип данных';
}
console.log(getStrLength1(234)); // return => 3
console.log(getStrLength1('hello')); // return => 5
console.log(getStrLength1(1 !== 10)); // return => 4 
console.log(getStrLength1(null)); // return => 'неверный тип данных'

//2. Function Expression 

const getStrLength2 = function (someValue) {
    if (typeof someValue == 'string') return someValue.length;
    if (typeof someValue == 'number' || typeof someValue == 'boolean') return String(someValue).length;
    return 'неверный тип данных';
};

// 3. Arrows Function - реализована в первой задаче.
//  На мой взгляд является наиболее предпочтительным способом описания функции.
//  Основным преимуществом стрелочных функций является удобный и компактный синтаксис, а так же при описании
//  стрелочных функций присваивать имя не нужно, поэтому стрелочные функции анонимны, если их ни к чему не присвоить. 
//  Стрелочные функции обязательно что-то возвращают,при этом писать фунцию можно с одной инструкией в одну 
//  строчку не используя оператор return.