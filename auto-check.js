/* Завдання 1 автоперевірка
 */
// РАННЄ ПОВЕРНЕННЯ
// Запиши умову в інструкції if таким чином, щоб функція працювала правильно.
// function checkAge(age) {
//     if (age >= 18) { // Change this line
//       return "You are an adult";
//     }
//     return "You are a minor";
//   }




/* Завдання 2 автоперевірка
 */
// ЗАДАЧА: ПЕРЕВІРКА ПАРОЛЯ (РАННЄ ПОВЕРНЕННЯ)
// Функція checkPassword отримує пароль користувача у параметр password, 
// перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.
// Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:
// видали змінну message
// видали else
// код повинен працювати так само, як і до оптимізації
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     if (password === ADMIN_PASSWORD) {
//     return  "Welcome!";
//     }
//     return "Access denied, wrong password!";
//   }




/* Завдання 3 автоперевірка
 */
// ЗАДАЧА: СКЛАД ТОВАРІВ 3.0
// Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат. 
// Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».
// function checkStorage(available, ordered) {
//     if (ordered === 0) {
//       return "Your order is empty!";
//     } 
//     if (ordered > available) {
//       return "Your order is too large, not enough goods in stock!";
//     }
//       return"The order is accepted, our manager will contact you";
//   }




/* Завдання 4 автоперевірка
 */
// СТВОРЕННЯ МАСИВУ
// Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".
// const fruits = ["apple", "plum", "pear", "orange"];




/* Завдання 5 автоперевірка
 */
// ДОСТУП ДО ЕЛЕМЕНТІВ ЗА ІНДЕКСОМ
// Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.
// Ім'я змінної	Значення змінної
// firstElement	перший елемент масиву
// secondElement	другий елемент масиву
// lastElement	    останній елемент масиву
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = "apple";
// const secondElement = "plum";
// const therdElement = "pear";
// const lastElement = "orange";
// fruits[firstElement];
// fruits[secondElement];
// fruits[therdElement];
// fruits[lastElement];




/* Завдання 6 автоперевірка
 */
// ПЕРЕВИЗНАЧЕННЯ ЗНАЧЕННЯ ЕЛЕМЕНТА
// Виконай перевизначення значення елементів з індексами 1 і 3. 
// Заміни "plum" на "peach", а "orange" на "banana".
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits); 




/* Завдання 7 автоперевірка
 */
// ДОВЖИНА МАСИВУ
// Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, 
// використовуючи властивість length.
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// console.log(fruits);




/* Завдання 8 автоперевірка
 */
// ІНДЕКС ОСТАННЬОГО ЕЛЕМЕНТА
// Оголоси дві зміні:
// Ім'я змінної	Очікуване значення
// lastElementIndex	Індекс останнього елемента масиву fruits через довжина_масиву - 1
// lastElement	Значення останнього елемента масиву
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length -1;
// const lastElement = fruits[lastElementIndex];
// console.log(fruits);




/* Завдання 9 автоперевірка
 */
// ЗАДАЧА: КРАЙНІ ЕЛЕМЕНТИ МАСИВУ
// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. 
// Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.
// function getExtremeElements(array) {
//   let elements;
//   elements = [array[0], array[array.length - 1]];
//   return elements;
//   }
  



/* Завдання 10 автоперевірка
 */
// МЕТОД РЯДКІВ SPLIT()
// Доповни код функції splitMessage(message, delimeter) таким чином, 
// щоб вона повертала у змінній words результат поділу рядка message за роздільником delimeter - масив рядків.
// function splitMessage(message, delimeter) {
//     let words;
//   words = message.split(delimeter);
//     return words;
//   }




/* Завдання 11 автоперевірка
 */
// ЗАДАЧА: ГРАВІРУВАННЯ ПРИКРАС
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, 
// залежно від кількості слів і ціни за слово.
// Оголошена функція calculateEngravingPrice(message, pricePerWord). 
// Ця функція приймає рядок, що складається зі слів, 
// розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).
// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.





/* Завдання 12 автоперевірка
 */



/* Завдання 13 автоперевірка
 */



/* Завдання 14 автоперевірка
 */



/* Завдання 15 автоперевірка
 */



/* Завдання 16 автоперевірка
 */