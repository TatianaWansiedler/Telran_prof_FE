// 1)
//         Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//     То есть дефисы удаляются, а все слова после них получают заглавную букву.
//     Примеры:
//     camelize("background-color") == 'backgroundColor';
//     camelize("list-style-image") == 'listStyleImage';
//     camelize("-webkit-transition") == 'WebkitTransition';

const camelize = (str) => {
    let arr = str.split('-');
    let newArr = [];
    newArr[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const arrElem = arr[i];
        newArr.push(arrElem[0].toUpperCase().concat(arrElem.slice(1)));
    }
    return newArr.join('');
};
console.log(camelize('my-short-string'));
console.log(camelize('background-color'));
console.log(camelize('list-style-image'));
console.log(camelize('-webkit-transition'));


// 2)
//     Задача: написать функцию, принимающую массив чисел
//     и возвращающую сумму всех его положительных элементов и отрицательных 
//     чисел отдельно в виде нового массива
//     например функция принимает как аргумент следующий массив
//     arr = [1, -2, 3, 4, -9, 6]
//     и должна вернуть [14, -11]

let array = [1, -2, 3, 4, -9, 6];

const getNewArr = (array) => {
    let positivSum = 0;
    let negativSam = 0;
    let newArr = [];
    for (const element of array) {
        element < 0 ? negativSam += element : positivSum += element;
    }
    newArr.push(positivSum, negativSam);
    return newArr;
};
console.log(getNewArr(array));