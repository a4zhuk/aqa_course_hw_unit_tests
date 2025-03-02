/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
  const numberToStirng = String(number);
  const numberArray = numberToStirng.split("")
  let result = 0
  for (let num of numberArray){
    result+= +num
  }
  return result <= 9 ? result : digitalRoot(result)
}
export { digitalRoot };