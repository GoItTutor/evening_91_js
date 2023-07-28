/*
  1. Приклади з областями видимості
*/

// -------------------------------//
// let a = 10;

// if (true) {
//   // const a = 5;

//   console.log(a);
// }

// ------------------------------//
// const b = 10;

// if (true) {
//   let b = 5;
//   b = 15;
//   console.log(b);
// }

// console.log(b);

// ------------------------------//
// let c = 10;

// if (true) {
//   // let c = 100;
//   c = 1;
//   if (true) {
//     let c = 25;
//     c = 15;
//   }
// }

// console.log(c);

/*
  2. Створення та види функцій

  - Призначення
  - Cигнатура функції (синтаксис)
  - Що таке параметр, а що таке аргумент?
  - Параметри по замовчуванню
  - Дериктива return
  - Всплиття function declaration
*/

// function sayHi(name = "Anonymous", age = 35) {
//   console.log(`Hi, ${name}! Your age is ${age}`);
// }

// sayHi("Mariia", 25);
// sayHi("Andrii");
// sayHi("Olena");
// sayHi("Vika", 40);

// function getSum(firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// }

// function declaretion

// function expression
// викликається тільки після оголошення

// const getSum = function (firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// };

// console.log(getSum(50, 50));

/*
  3. Псевдомасив arguments

  Написати функцію getSum, яка повертає суму переданих у неї
  аргументів

  Використати цикл for для вирішення задачі
*/

// function getSum() {
//   let sum = null;

//   console.log(arguments);

//   for (const value of arguments) {
//     sum += value;
//   }

//   return sum;
// }

// console.log(getSum(1, 2, 20, 40, 3, 4, 5));

// console.log(getSum(10, 10, 10));

// console.log(getSum());

/*
  4. Стек викликів

  Розібрати роботу стеку викликів на прикладі функцій:
*/

// function foo() {
//   console.log("start foo");
//   console.log("end foo");
// }

// function boo() {
//   debugger;

//   console.log("start boo");
//   foo();
//   console.log("end boo");
// }

// boo();

/*
  5. Практичне завдання

  Напишіть функції для роботи з колекцією навчальних курсів courses:
  
  addCourse(name) - додає курс в кінець колекції, якщо раніше він не 
  був доданий

  removeCourse(name) - видаляє курс з колекції

  updateCourse(oldName, newName) - замінює назву курсу на нову
*/

// const courses = ["HTML5", "CSS", "JavaScript", "React", "PostgreSQL"];

// function addCourse(name) {
//   if (courses.includes(name)) {
//     return;
//   }

//   courses.push(name);
// }

// function removeCourse(name) {
//   const courseIndex = courses.indexOf(name);

//   if (courseIndex === -1) {
//     return;
//   }

//   courses.splice(courseIndex, 1);
// }

// function updateCourse(oldName, newName) {
//   const oldCourseIndex = courses.indexOf(oldName);

//   const newCourseIndex = courses.indexOf(newName);

//   if (oldCourseIndex === -1 || newCourseIndex !== -1) {
//     return;
//   }

//   courses.splice(oldCourseIndex, 1, newName);
// }

// updateCourse("HTML", "HTML5");

// console.log(courses);

// const firstArray = [1, 2, 3, 4, 5, 10, 7];

// const secondArray = [7, 3, 5];

// function getSimilarNumbers(firstArray, secondArray) {
//   let similarNumbers = [];

//   for (let value of firstArray.length < secondArray.length
//     ? firstArray
//     : secondArray) {
//     if (
//       !similarNumbers.includes(value) &&
//       firstArray.includes(value) &&
//       secondArray.includes(value)
//     ) {
//       similarNumbers.push(value);
//     }
//   }
//   return similarNumbers;
// }

// console.log(getSimilarNumbers(firstArray, secondArray));

function log1() {
  console.log("1");
  console.log("2");
  console.log("3");
}

function log2() {
  log1();
  console.log("4");
}

log2();
