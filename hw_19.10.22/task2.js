// (Необязательная задача) Напишите функцию которая будет принимать три массива с любыми
// данными и объединять их в один, новый массив и возвращать его. В зависимости от типа 
//  данных вы должны упорядочить данные. Сначала добавляйте только строки, затем цифры, затем 
//  булевы значения, все остальные значения могут быть в произвольном порядке добавлены далее.

// Пример как должна работать функция.
// let result toHardThreeOrder(['привет', true, 65],[3, [], false], ['js', 'java', 'script', 'redButton'])
// console.log(result)// ['привет', js', 'java', 'script', 'redButton', 3, 65, true, false, []]

let toHardThreeOrder = (arr1, arr2, arr3) => {
    const total = arr1.concat(arr2, arr3);
    const strings = [];
    const numbers = [];
    const booleans = [];
    const rest = [];

    for (let i = 0; i < total.length; i++) {
        if (typeof total[i] === 'string') {
            strings.push(total[i]);
        }
        else if (typeof total[i] === 'number') {
            numbers.push(total[i]);
        }
        else if (typeof total[i] === 'boolean') {
            booleans.push(total[i]);
        } else {
            rest.push(total[i]);
        }
    }
    return strings.concat(numbers, booleans, rest);
};
console.log(toHardThreeOrder(['привет', true, 65], [3, [], false], ['js', 'java', 'script', 'redButton']));