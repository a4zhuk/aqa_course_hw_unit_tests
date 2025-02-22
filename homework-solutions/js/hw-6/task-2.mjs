/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
let resultUnique =[];
let resultNull;

for(let myPizzas of myPizzasT1){
  if (!(competitorPizzas.includes(myPizzas[0].toLocaleLowerCase() + myPizzas.slice(1)) || competitorPizzas.includes(myPizzas[0].toUpperCase() + myPizzas.slice(1)))){
    resultUnique.push(myPizzas);
  } else resultNull = null;
};
export { resultNull, resultUnique };

//предполложу, что можно использваоть такой вариант если null нам надо сетать, только в тех случаях когда у нас вообще нет уникальных пицц
const competitorPizzas1 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT3 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT4 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
let resultUnique1 =[];
let resultNull1;

for(let myPizzas of myPizzasT3){
  if (!(competitorPizzas1.includes(myPizzas[0].toLocaleLowerCase() + myPizzas.slice(1)) || competitorPizzas1.includes(myPizzas[0].toUpperCase() + myPizzas.slice(1)))){
    resultUnique1.push(myPizzas);
  }
};
if (!resultUnique1.length){
  resultNull1 = null;
}
console.log(resultUnique1,resultNull1)