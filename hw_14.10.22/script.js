
//Сделайте функцию getDigitsSum (digit - это цифра), которая параметром 
//принимает целое число(например 5025) и возвращает сумму его цифр 
//(в данном примере возвращаемое из функции значение будет 12).

const getDigitsSum = (number) => {
    let numberStr = String(number);
    let sum = 0;
    for (let i = 0; i < numberStr.length; i++) {
        const element = Number(numberStr[i]);
        sum += element;
    }
    return sum;
};
console.log(getDigitsSum(5052)); // 12
console.log(getDigitsSum('5052')); // 12

