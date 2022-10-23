// 1. Напишите следующую функцию, которая принимает некий массив данных. 

// если в массиве только строковый тип данных, то функция должна находить 
//самую длинную строку и возвращать массив из двух элементов - эту строку и её индекс исходном массиве 

// если в массиве только цифры, то функция должна находить самую большую цифру и возвращать 
//массив из двух элементов - из этой цифры и её индекса в исходном массиве

// во всех остальных случаях (если там другие типы данных или же они смешаны), 
// то функция должна возвращать массив из двух элементов - первый это строка 'неверный тип данных в массиве',
// а второй элемент это общая длина массива.


//сделала 2 варианта решения. Оба работают одинаково. Не смогла решить какой более правильный
// 1-й вариант решения
const getMaxElemData = (array) => {
    let max = array[0];
    let index = 0;

    for (let i = 0; i < array.length; i++) {
        if ((typeof array[i] !== 'string' && typeof array[i] !== 'number') ||
            (typeof max !== typeof array[i])) {
            return ['неверный тип данных в массиве', array.length];
        }
        if (max.length < array[i].length || max < array[i]) {
            max = array[i];
            index = i;
        }
    }
    return [max, index];
};
console.log(getMaxElemData(['этот', 'массив', 'имеет', 'только', 'строковые', 'значения']));
console.log(getMaxElemData([123, 3456, 756, 987456, 234]));
console.log(getMaxElemData(['hello', 'world', 756, 987456, 234]));
console.log(getMaxElemData(['hello', 'world', 654, 'hi', false, [0, 1]]));
console.log(getMaxElemData([true, false, false]));

//2-й вариант решения
const getData = (array) => {
    let max = array[0];
    let index = 0;

    for (let i = 1; i < array.length; i++) {
        if ((typeof array[i] !== 'string' && typeof array[i] !== 'number') ||
            (typeof max !== typeof array[i])) {
            return ['неверный тип данных в массиве', array.length];
        }
        if (typeof array[i] == "number") {
            [max, index] = array[i] > max ? [array[i], i] : [max, index];
        }
        if (typeof array[i] == "string") {
            [max, index] = array[i].length > max.length ? [array[i], i] : [max, index];
        }
    }
    return [max, index];
};

console.log(getData(['этот', 'массив', 'имеет', 'только', 'строковые', 'значения']));
console.log(getData([123, 3456, 756, 987456, 234]));
console.log(getData(['hello', 'world', 756, 987456, 234]));
console.log(getData(['hello', 'world', 654, 'hi', false, [0, 1]]));
console.log(getData([true, false, false]));