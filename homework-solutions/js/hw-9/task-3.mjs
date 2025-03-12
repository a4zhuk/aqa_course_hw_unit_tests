1
/*
 Objective:
 Write a function that extracts specific properties from an object
 and returns a new object containing only those properties with their corresponding values.
*/
const user = {
  name: 'a',
  age: 2,
  channel: 'new',
};
function getProperties(obj = {}, properties = []) {
  const newObj ={}
  for (let value of properties){
    for (let key in obj){
      if (key === value){
        newObj[key] = obj[key]
      }
    }
    }
    return newObj
}

console.log(getProperties(user, ['name', 'age'])); // { name: 'a', age: 2 }

2
/**
 * Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:
 */
function strCount(obj ={}){
  let counter = 0;
  for (let key in obj){
    if (typeof obj[key] === 'string'){
      counter +=1
    } else if (typeof obj[key] === 'object'){
      console.log(1)
      if (Array.isArray(obj[key])){
        for (let value of obj[key]) {
         typeof value === "string" ? counter += 1 : value
        }
      } else {for (let key1 in obj[key]){
        typeof obj[key][key1] === "string"
        counter +=1
      }
      }
    }
  }
  return counter
}
  console.log(
    strCount({
      first: '1',
      second: '2',
      third: false,
      fourth: ['anytime', 2, '3', 4],
      fifth: 'null',
      tr: {
        dream: '32',
      },
    }),
  );          

   //returns 6

3
/*
 * The function giveMeFive accepts 1 parameter, obj, which is an object.
 * Create an array (which you will eventually return).
 * Then, traverse obj, checking each key and value.
 * If the length of the key is equal to 5, then push the key to your array.
 * Separately, if the length of the value is equal to 5, then push the value to your array.
 * At the end, return your array.
 */
function giveMeFive(obj = {}){
  const arr = [];
  for (let key in obj){
    if (key.length === 5){
      arr.push(key)
    }
    if (obj[key].length=== 5){
      arr.push(obj[key])
    }
  }
  return arr
}
  console.log(giveMeFive({ Our: 'earth', is: 'a', beautyful: 'world' }));    // ["earth","world"]
  console.log(
    giveMeFive({ Ihave: 'enough', money: 'to', buy: 'a', car: 'model' }),
  );    // ["Ihave","money","model"]
  console.log(giveMeFive({ Pears: 'than', apple: 'sweet' }));    //["Pears","apple","sweet"])
