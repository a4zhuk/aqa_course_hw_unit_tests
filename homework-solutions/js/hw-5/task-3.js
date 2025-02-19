/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
let vovelsList ="aeiouy"
let vowelsCount = 0;
let consonantsCount = 0;
for (let i = 0; i < word.length; i++){
  if (vovelsList.includes(word[i])){
    vowelsCount +=1;
  } else if (word[i] ==" "){
  } else consonantsCount += 1;
}
let vowelsAndConsonantsResult = `${word} contains ${vowelsCount} vowels and ${consonantsCount} consonants`;
console.log(vowelsAndConsonantsResult)
// другой вариант
let word1 = "hello";
let vowelsArr = ['a', 'e','i', 'o', 'u', 'y']
let counter1 = 0;
let counter2 = 0;
for (let i = 0; i < word1.length; i++){
  if (vowelsArr.includes(word1[i])){
    counter1 +=1;
  } else if (word1[i] ==" "){
  } else counter2 += 1
}
let result = (`${word1} contains ${counter1} vowels and ${counter2} consonants`)
console.log(result)
export { vowelsAndConsonantsResult };
