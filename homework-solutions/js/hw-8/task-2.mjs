/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {  
  let result = [...wordsArr]
  result.sort((a,b) => countVowels(a) - countVowels(b));
  return result;
}
function countVowels (word) {
  const vowelsList = ['a', 'e', 'i', 'o', 'u', 'y'];
  let numberOfVowels = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowelsList.includes(word[i].toLowerCase())) {
      numberOfVowels += 1;
    }
  }
  return numberOfVowels;
}
console.log(sortedByVowels(words));
export { sortedByVowels };
