/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  numbers.sort((a, b) => a - b);
  let missingNumber
  for (let i = 0; i <= numbers.length; i++){
    if (i + 1 != numbers[i]){
      missingNumber = i + 1;
      break
    }
  }
  return missingNumber
}
export { findMissingNumber };
