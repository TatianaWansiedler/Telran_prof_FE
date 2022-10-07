// 2) Реализовать решение задачи в JS: 
// - У нас есть 100 (создать константу)
// - Цена помидоров на рынке - 10 (создать константу)
// - Цена огурцов на рынке - 5 (создать константу)
// - Цена яблок на рынке - 15 (создать константу)
// - Оставшиеся деньги потратим на орехи (создать переменную)

// - Мы купили на рынке по два килограмма огурцов, помидоров и яблок (создать переменную)
// - оставшиеся деньги потратили на орехи (присвоить значение переменной)

// - сколько денег мы потратили на орехи? (вывести переменную в консоль)
// - на что мы потратили больше денег на орехи или остальное? (вывести boolean значение в консоль)

// - в зависимости от того потратили ли мы на орехи больше денег чем на всё остальное
// выводите в консоль сообщение об этом 'Больше потратили на орехи' или 'Больше потратили на фрукты и овощи'

const deposit = 100;
const priceTomatoes = 10;
const priceCucumbers = 5;
const priseApples = 15;
let monyForNuts;

let monyForVegetablesAndFruits;
monyForVegetablesAndFruits = 2 * (priceTomatoes + priceCucumbers + priseApples);
monyForNuts = deposit - monyForVegetablesAndFruits;

console.log(monyForNuts);
console.log(monyForVegetablesAndFruits > monyForNuts); // если > true, если <= false

if (monyForVegetablesAndFruits > monyForNuts) {
    console.log('Больше потратили на фрукты и овощи');
} else if (monyForVegetablesAndFruits < monyForNuts) {
    console.log('Больше потратили на орехи');
} else {
    console.log('Потратили одинаковое количество денег');
};
