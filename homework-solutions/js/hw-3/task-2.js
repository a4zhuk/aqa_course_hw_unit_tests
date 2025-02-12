/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/
let integerNumber = 4;
let stringNumber = "" + integerNumber;
let result = integerNumber + +(stringNumber + stringNumber) + +(stringNumber + stringNumber + stringNumber);
console.log(result);
// another option
let result2 = integerNumber + +("" + integerNumber + integerNumber) + +("" + integerNumber + integerNumber + integerNumber);
console.log(result);