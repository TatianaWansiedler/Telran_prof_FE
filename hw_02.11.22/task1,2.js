// 1)
// Напишите функцию, которая поверхностно сравнивает два объекта.
// Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
// 1 способ - если массивы одинаковые и отсортированы одинаково как в примере

// Решение

const isEqual1 = (object1, object2) => {

    let arrObj1 = Object.entries(object1);
    let arrObj2 = Object.entries(object2);

    if (arrObj1.length !== arrObj2.length) return false;

    for (let i = 0; i < arrObj1.length; i++) {
        if (arrObj1[i][0] !== arrObj2[i][0] || arrObj1[i][1] !== arrObj2[i][1]) {
            return false;
        }
    }
    return true;
};

//Проверка

const data = { a: 1, b: 1 };
const data1 = { a: 1, b: 1 };
const data2 = { b: 1, a: 1 };
const data3 = { a: 1, b: 2 };

console.log(isEqual1(data, data1));     // true -  ({ a: 1, b: 1 },{ a: 1, b: 1 })
console.log(isEqual1(data, data2));     // false - ({ a: 1, b: 1 },{ b: 1, a: 1 })
console.log(isEqual1(data, data3));     // false - ({ a: 1, b: 1 },{ a: 1, b: 2 })
console.log(isEqual1(data, {}));        // false - ({ a: 1, b: 1 },{})
console.log(isEqual1({}, {}));          // true -  ({}, {})



console.log('--------Способ 2----------');
// 2 способ - если массивы с одинаковыми свойствами, но не отсортированные

// Решение

const isEqual = (object1, object2) => {
    if (isNotEqualLength(object1, object2)) return false;

    const cloneObj1 = { ...object1 };                    // сделала клон объекта 1 что бы не мутировать его

    for (const key in cloneObj1) {
        if (key in object2 && cloneObj1[key] === object2[key]) delete cloneObj1[key];
    }

    return isEmpty(cloneObj1) ? true : false;

};

// доп функция, проверяет пустой ли объект
function isEmpty(object) {
    for (const key in object) {
        return false;
    }
    return true;
}

// доп функция, сравнивает длины массивов
function isNotEqualLength(obj1, obj2) {
    return Object.keys(obj1).length !== Object.keys(obj2).length ? true : false;
}

//Проверка

console.log('1: ' + isEqual({ a: 1, b: 1 }, { a: 1, b: 1 }));               // true - одинаковые
console.log('2: ' + isEqual({ a: 1, b: 1, c: 1 }, { b: 1, c: 1, a: 1 }));   // true - одинаковые но не отсортированы
console.log('3: ' + isEqual({ a: 1, b: 1 }, { a: 1, b: 2 }));               // false - разные
console.log('4: ' + isEqual({}, { a: 1, b: 2 }));                           // false 
console.log('5: ' + isEqual({ a: 1, b: 2 }, {}));                           // false
console.log('6: ' + isEqual({}, {}));                                       // true





console.log('-------Задача 2---------');

// 2) Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.

// Решение

const intersection = (object1, object2) => {

    let newObj = {};

    for (const key in object1) {
        if (key in object2 && object1[key] === object2[key]) newObj[key] = object1[key];
    }
    return newObj;
};

//Проверка

const obj1 = { a: 1, b: 2, c: 3, d: 4 };
const obj2 = { d: 4, c: 1, b: 2 };
console.log(intersection(obj1, obj2));  // { b: 2, d: 4 }