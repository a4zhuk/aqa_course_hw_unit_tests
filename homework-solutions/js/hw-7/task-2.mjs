/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  let reversedWord
  return typeof word === 'string' ? word.toLowerCase() === word.toLowerCase().split('').reverse().join('') : false;
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  const result =[]
  if (typeof sentence !== 'string' || !sentence.trim().length){
  } else {
    let sentenceArray = sentence.split(" ")
    let sentenceLength = sentenceArray.map(number => number.length)
    let longestWord = Math.max(...sentenceLength)
  
    for(let word of sentenceArray){
      if (word.length === longestWord){
      result.push(word)
      }
    }
  }
  return result
}
console.log(findLongestWords(""))
export { isPalindrom, findLongestWords };
