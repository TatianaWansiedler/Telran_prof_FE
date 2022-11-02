// 1)
// Подсчёт количества свойств объекта
// Напишите функцию count(obj), которая возвращает количество свойств объекта:


let user = {
    name: 'John',
    age: 30
};
// console.log( count(user) ); // 2

const counterOfPropertys = object => {
    let couter = 0;
    for (const key in object) {
        couter++;
    }
    return couter;
};
console.log(counterOfPropertys(user));



// 2)
// Максимальная зарплата
// У нас есть объект salaries с зарплатами:

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.


// 1 способ - с помощью циклов и доп функций 

const topSalary = object => {
    let max = 0;
    let findedName;

    if (isEmpty(object)) return null;

    for (let key in object) {
        if (max < object[key]) {
            max = object[key];
            findedName = key;
        }
    }
    return findedName;
};

const isEmpty = object => {   // доп функция
    for (const key in object) {
        return false;
    }
    return true;
};

console.log(topSalary(salaries)); //Pete
console.log(topSalary({})); //null

// 2 способ - с помощью методов и доп функций

const topSalary1 = object => {

    if (Object.keys(object).length === 0) return null;

    return getKey(object);
};


const getKey = obj => Object.keys(obj).reduce((key1, key2) => obj[key1] > obj[key2] ? key1 : key2);


console.log(topSalary1(salaries)); //Pete
console.log(topSalary1({}));   //null