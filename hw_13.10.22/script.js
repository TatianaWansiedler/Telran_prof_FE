// 1.Напишите цикл for, который выводит числа в консоль от 0 до 10.
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// 2.Напишите цикл for, который выводит числа в консоль от 0 до 10 c шагом 2.
// for (let i = 0; i <= 10; i += 2) {
//     console.log(i);
// }

// 3.Напишите цикл for, который выводит числа в консоль от 5 до 10.
// for (let i = 5; i <= 10; i++) {
//     console.log(i);
// }

// 4.Напишите цикл for, который выводит числа в консоль от 10 до 0.
// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// 5.В программе заданы две переменные n и m с числовым значением каждая. 
// Напишите цикл, который выводит в консоль числа от большего числа до меньшего,
// let n=9;
// let m=0;
// for (let i = Math.max(n,m); i >= Math.min(n,m); i--) {
//     console.log(i);
// }

// 6.В программе заданы две переменные n и m с числовым значением каждая.Число n больше числа m. 
// Напишите цикл, который выводит в консоль все четные числа от m до n.
// let n;
// let m;
// for (let i = m; i <= n; i++) {
//     if (i % 2 == 0) console.log(i);
// }

// 7. В программе заданы две переменные n и m с числовым значением каждая.Напишите цикл,
//     который считает сумму четных чисел и нечетных чисел от n до m.Суммы выведите в консоль
//         (в начале сумму четных чисел, а затем сумму нечетных).
// let n = 0;
// let m = 5;
// let sumOdd = 0;
// let sumEven = 0;
// for (let i = Math.min(n,m); i <= Math.max(n,m); i++) {
//     i % 2 == 0 ? sumEven += i : sumOdd += i;
// }
// console.log(sumEven);
// console.log(sumOdd);

// 8.В программе задана переменная n. 
// Напишите программу, которая с помощью цикла считает сумму чисел от 1 до n и выводит в консоль.
// let n = 5;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += i;
// }
// console.log(sum);

// 9. Напишите функцию power, которая в качестве аргумента n принимает число и возвращает квадрат этого числа.
// const power = (n) => n * n; 
// function power(n) {
//     return n * n;
// }
// console.log(power(9));

// 10. Напишите функцию, power, которая принимает два аргумента(основание стемени и саму степень) 
// и возвращает число в указанной степени.Значение степени должно быть указано по умолчанию 2.
// function power(num, degree = 2) {
//     let res = 1;
//     for (let i = 0; i < degree; i++) {
//         res *= num;
//     }
//     return res;
// };
// console.log(power(6,)); // 36 
// console.log(power(6, 3)); // 216

//11. Напишите функцию, max_number, которая принимает два аргумента с числовым значением и возвращает большее значение.
// function max_number(num1, num2) {
//     return num1 > num2 ? num1 : num2;
// }
// console.log(max_number(234, 678)); //678
// console.log(max_number(1234, 678)); //1234

//12. Напишите функцию, range, которая принимает два аргумента (n и m) 
//с числовым значением и возвращает массив с числами от n до m -1.

// function range(n, m) {
//     let array = [];
//     if (n < m) {
//         for (let i = n; i < m; i++) {
//             array.push(i);
//         }
//     } else {
//         for (let i = n; i >= m-1; i--) {
//             array.push(i);
//         }
//     }
//     return array;
// }
// function range(n, m) {
//     let array = [];
//         for (let i = Math.min(n,m); i < Math.max(n,m); i++) {
//             array.push(i);
//         }
//     return array;
// }
// console.log(range(8, 15));
// console.log(range(10, -2));

//13.Напишите функцию, num_count, которая в качестве 
//аргумента принимает целое число и возвращает количество цифр в этом числе.
// function num_count (number) {
//     const numberStr = String(number);
//     const counter = numberStr.length;
//     return counter;
// }
// console.log(num_count(345609)); //6

//14.Напишите функцию, get_hypotenuse, которая в качестве аргумента 
//принимает два числа (длины катетов) и возвращает гипотенузу.

// function get_hypotenuse(a, b) {
//     let c = Math.sqrt(a * a + b * b);
//     return c;
// }
// console.log(get_hypotenuse(4, 7)); //8.06225774829855
