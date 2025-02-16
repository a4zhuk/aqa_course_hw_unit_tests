/*

 - Создайте переменную salary со значением 1000
  - Создайте переменную grade, которая должна получить значение "middle" если salary больше или равна 1000, и значение "junior" - если меньше
  */
  let salary = 1001;
  let grade;
  if (salary >= 1000){
    grade = "middle";
  } else grade = 'junior';
  console.log(grade);
  // using ?
  let salary2 = 1;
  let grade2 = salary2 >= 1000 ? "Middle" : "Junior";
  console.log(grade2);