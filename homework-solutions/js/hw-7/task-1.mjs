/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arr) {
  let merged = [];
  merged = merged.concat(...arr)
  return  merged
}

// Вот еще замудренное решение, но вроде работает)
function mergeArrays1(...arr) {
  const arrays = []
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
      arrays.push(arr[i][j])
    }
  }
return arrays
}
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
    function devideBy(sentence) {
      const arrs =sentence.split(" ")
      const newArr =[]
      for (let arr of arrs){
        if (arrs.indexOf(arr) === 0){
          newArr.push(arr.toLowerCase())
        } else if (arr === " " || arr ===""){
          continue
        } else {
          newArr.push(arr[0].toUpperCase() + arr.slice(1).toLowerCase())
        }
      }
      let result = newArr.join("_")
      return result
      }
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
      let firstNumber = 0;
      let secondNumber = 1;
      let tempNumber = 1;
      for (let i = 0; i < n; i++){
        tempNumber = firstNumber + secondNumber
        firstNumber = secondNumber
        secondNumber = tempNumber
      }
      return firstNumber
    }
    console.log(fibonacci(0))

export { mergeArrays, fibonacci, devideBy };
