// 1. Фильтрация по диапазону
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
// ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.
// Например:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log( filtered ); // 3,1 (совпадающие значения)
// console.log( arr ); // 5,3,8,1 (без изменений)

let array = [5, 3, 8, 1];

const filterRange = (array, a, b) => {
    return array.filter(item => item >= a && item <= b);
};

let filtered = filterRange(array, 1, 4);

console.log(filtered); // [ 3, 1 ]
console.log(array); //[ 5, 3, 8, 1 ]



console.log('-----------Task2.1---------');

// Напишите функцию filterRangeInPlace(arr, a, b), 
// которая принимает массив arr и удаляет из него все значения кроме тех, 
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
// Например:
// let arr1 = [5, 3, 8, 1, 10, 2, 4, 9];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// console.log( arr ); // [3, 1]

// способ 1 - метод forEach 

let arr = [5, 3, 8, 1, 10, 2, 4, 7, 1, 9];

const filterRangeInPlace = function (arr, a, b) {
    arr.forEach(
        (item, i) => {
            if (item < a || item > b) {
                arr.splice(i, 1);
                i -= 1;
            }
        }
    );

};

console.log(`исходный массив [${arr}]`);   //исходный массив [5,3,8,1,10,2,4,7,1,9]
filterRangeInPlace(arr, 1, 4);
console.log(`измененный массив [${arr}]`); //измененный массив [3,1,2,4,1]


// способ 2 - с помощью обычного цикла

console.log('-----------Task2.2---------');

let arr1 = [5, 3, 8, 1, 10, 2, 4, 7, 1, 9];

const filterRangeInPlace1 = function (arr, a, b) {
    for (let i = arr.length - 1; i >= 0; i -= 1) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        }
    }
};

console.log(`исходный массив [${arr1}]`);  //исходный массив [5,3,8,1,10,2,4,7,1,9]
filterRangeInPlace1(arr1, 1, 4);
console.log(`измененный массив [${arr1}]`);   //измененный массив [3,1,2,4,1]


// способ 3 - с помощью вспомогательных функций и методов (возможно это лишнее, но решила оставить)

console.log('-----------Task2.3---------');

let arr2 = [5, 3, 8, 1, 10, 2, 4, 7, 1, 9];

const filterRangeInPlace2 = function (arr, a, b) {

    let deletedItem = createArrDeletedItems(arr, a, b); // с помощью вспомогательной функции создали массив элементов не входящих в диапазон

    arr.forEach((item, i) => {
        if (deletedItem.includes(item)) arr.splice(i, 1);
    }
    );
};

function createArrDeletedItems(array, a, b) {
    let newArr = array.filter(
        item => item < a || item > b
    );
    return newArr;
}

console.log(`исходный массив [${arr2}]`);   //исходный массив [5,3,8,1,10,2,4,7,1,9]
filterRangeInPlace2(arr2, 1, 4);
console.log(`измененный массив [${arr2}]`); //измененный массив [3,1,2,4,1]