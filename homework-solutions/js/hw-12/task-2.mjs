/*
Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
   Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
   После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
   Преобразуйте респонс из JSON в объект
   Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
   Функция должна возвращать полученный объект из респонса
   Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена
*/

async function createTodo(data){
try {
   const response = await (fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST", 
      headers:{
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
   }))
   if(!response.status === 201) throw new Error ('Error is not 201');
   const responseData = await response.json();
   for (const value in data){
      if (responseData[value] !== data[value]){
         throw new Error(`The following value - ${value} is incorrect`);
      }
   }
   return responseData;
} catch(error){
   console.log(error);
} finally{
   console.log('Работа функции завершена');
};
};

