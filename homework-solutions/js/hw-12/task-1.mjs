/*
1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
  его резолва в консоль
3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
  Обработайте промис методом .catch и выведите результат его реджекта в консоль
4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль результаты работы каждого промиса через .then
6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль статус и результат каждого промиса через .then
7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch 
*/
function sayHello(){
  setTimeout(() => console.log('Hello'), 2000);
}
function delayTwoSeconds (callback){
  callback
};
delayTwoSeconds(sayHello());
const newPromise = new Promise((resolve , reject) => {
  resolve(1);
});
newPromise.then((resolve) => console.log(resolve));
const newPromise2 = new Promise((resolve, reject) => {
  reject("Promise faile");
});
newPromise2.catch(reject => console.log(reject));

function promiseNumber(num) {
  return new Promise((resolve, reject) => {
    if (typeof num === 'number'){
      resolve(num);
    }
    reject('Inalid input');
  });
};
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then(([first, second, third]) => {
  console.log(first), console.log(second), console.log(third);
})
.catch((error) => {
  console.log(error);
});

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((result) => {
  result.forEach((el) => {
    if (el.status === 'fulfilled'){
      console.log(el.value);
    } else throw new Error ("Error");
  })
})
.catch((error) => console.log(error));

async function promiseALl() {
  try{
    await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    .then(([first, second, third]) => {
      console.log(first), console.log(second), console.log(third);
    })
  } catch(error){
      console.log(error);
    };
}
async function promiseAllSettled(){
  try{
    const result = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
    result.forEach((el) => {
      if (el.status === 'fulfilled'){
        console.log(el.value);
      } else throw new Error ("Error")
    })
  } catch(error){
    console.log(error);
}};
