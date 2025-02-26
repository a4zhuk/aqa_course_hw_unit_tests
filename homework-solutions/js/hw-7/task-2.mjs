/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  let reversedWord
  if (typeof word === "string"){
    let wordArr = word.split("").reverse()
    reversedWord = wordArr.join('').toLowerCase()
    if(word.toLowerCase() === reversedWord){
      return true
    } else {return false}
  } else {return false}
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  let result =[]
  if (typeof sentence !== 'string' || sentence.length === 0){
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
