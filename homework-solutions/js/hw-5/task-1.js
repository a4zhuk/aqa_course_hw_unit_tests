/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

let evenNumbersResult = '';
for (i= 10; i >= 0; i--){
  if (i % 2 == 0){
    evenNumbersResult += i;
  } else evenNumbersResult += "-";
}
console.log(evenNumbersResult)
/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

let smile = ':)';
let counter = 5;
let i = 1;
let smilePatternResult = '';
while (i <= counter){
  if (i < counter){
  smilePatternResult += smile.repeat(i)+"\n";
  } else smilePatternResult += smile.repeat(i);
  i++;
};
console.log(smilePatternResult)

/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */
const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = text.replaceAll(" ", 1);
console.log(replaceSpacesWithOneResult)
/* 
более замудренное решение:
const text = 'Hello! I am a JS student!';
let lengthText = text.length
for (let i = 0; i < lengthText; i++) {
  if  (text[i] != " "){
    replaceSpacesWithOneResult += text[i];
  } else replaceSpacesWithOneResult += 1;
}
*/
export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
