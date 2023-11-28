// 11. Вам дан массив числами [10, 20, 30, 40, 135, 2000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 40, 135, 2000]
// console.log(arr.filter((el,index) => {
//   return String(el)
// }));

// let arr = [10, 20, 30, 40,59, 135, 2000];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] / 10 === 1 || arr[i] / 10 === 2 || arr[i] /  === 5) {
//     console.log(arr[i]);
//   } else if (arr[i] / 10 === 1) {
//     console.log(arr.);
//   }
// }
// 12. Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr.join('-'));
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = "-";
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i] + "-";
// }
// console.log(sum);
// 13. Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
// let n = 1000;
// let num = 0;

// for (; n >= 50; num++) {
//   n /= 2;
// }

// console.log(n);
// console.log(num);
// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
// let num = [1, 2, 3, 7, 6, 9];
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//   sum += num[i];
// }
// let aver = sum / num.length;
// console.log(aver);

// console.log();
// 15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла найдите сумму квадратов элементов этого массива.
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i] ** 2
// }
// console.log(sum);
// 16. Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
// let arr = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0 && arr[i] < 10) {
//         console.log(arr[i]);
//     }
// }

// 17. Создайте переменную с пустым массивом, заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr = i
//     arr.push(arr)
// }
// console.log(arr);
// let arr = []; // Создаем пустой массив

// for (let i = 0; i < 10; i++) {
//   let arrr = Math.floor(Math.random() * 10) + 1;
//   arr.push(arrr);
// }
// console.log(arr);

// 18. Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.
// let sum = 0;
// for (let i = 0; i < 20; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// 19. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].Создайте цикл, который выводит нечетные числа, которые больше 10.
// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 !== 0 && arr[i] >10) {
//         console.log(arr[i]);
//     }
// }

// let i = 0;
// do {
//     console.log(i);
//   i++;
// } while (i);

// let arr = [45, 55, 1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 99];
// let str = [0];
// for (let i = 0; i < arr.length; i++) {
//   if (str > arr[i]) {
//     console.log(str);
//   }else {
//     console.log(arr[i]);
//   }
// }

// let arr = [45, 55, 1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 99];
// let maxNum = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > maxNum) {
//     maxNum = arr[i];
//   }
// }
// console.log(maxNum);
// Taalaibek Ymankulov, [3/9/23 17:56]
// // 3. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму чисел, которые больше 10.
// let arr = [5, 15, 315, 2, 13, 20, 9];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     sum += arr[i];
//   }
// }
// console.log(sum);
// // 4. Вам дан массив с числами [3,13,54,15,335, 39]. Найдите разность чисел, которые больше 10.
// let arr = [3, 13, 54, 15, 335, 39];
// str = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     str -= arr[i];
//   }
// }
// console.log(str);

// let arr = [3, 13, 54, 15, 335, 39];
// str = 0;
// atr = 0;
// dtr = 1;
// ftr = 1;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     str += arr[i];
//     atr -= arr[i];
//     dtr *= arr[i];
//     ftr /= arr[i];
//   }
// }
// console.log(str, atr, dtr, ftr);

// // 5. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Сложите все строки и выведите длину результата.
// let arr = ["Аскар", "Баяман", "Калмамат"];
// let str = "";
// str = arr[0] + arr[1] + arr[2];
// console.log(str.length);
// Taalaibek Ymankulov, [3/9/23 17:57]
// Подсчет четных чисел:

// let numbers = [2, 7, 12, 5, 8, 10];
// // Output: 4

// let arr = [2, 7, 12, 5, 8, 10];
// str = 0;
// str = arr.join("");
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     str = arr[i];
//   }
// }
// console.log(arr[i]);

// let arr = [2, 7, 12, 5, 8, 10];
// let str = "";
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     str = arr[i];
//   }
// }
// console.log(str.length);

// let str = "";
// for (let i = 1; i <= 7; i++) {
//   str += "#";
//   console.log(str);
// }

// pervoe zadanie
// let arr = -12;
// if (arr < 0) {
//   console.log("jsbm");
// } else {
//   console.log("jdamdn");
// }
// vtoroe zadanie
// let str = "nsjfnsmjnfs,m";
// console.log(str.length);
// tretya zadanie
// let str = 'hello world'
// console.log(str.slice(-1));
// chetvertaya zadanie
// let num = 11;
// if (num % 2 === 0) {
//   console.log("chet");
// } else {
//   console.log("nechet");
// }
// 5 zadanie
// let str = "hello";
// let arr = "horld";
// if (str.slice(0, 1) === arr.slice(0, 1)) {
//   console.log("yeeeees");
// } else {
//   console.log("no");
// }

// 6 zadanie
// let str = "спать";
// if (str.slice(-1) === "ь") {
//   console.log(str.slice(-2, -1));
// } else {
//   console.log(str.slice(-1));
// }

// 7 zadanie
// let num = 18223231;
// let str = "";
// let btr = str + num;
// console.log(btr.slice(0, 1));

// 8 zadanie
// let num = 182232312;
// let str = "";
// let btr = str + num;
// console.log(btr.slice(-1));

// 9 zadanie
// let num = 182232312;
// let atr = 0;
// let str = "";
// let btr = str + num;
// str = btr.slice(0, 1);
// btr = Number(btr.slice(-1));
// console.log(btr + Number(str));

// 10 zadanie
// let num = 10831085;
// let str = String(num);
// console.log(str.length);

// 11 zadanie
// let str = 22;
// let num = 21;
// let arr = str + "";
// let sum = num + "";
// if (arr.slice(0, 1) === sum.slice(0, 1)) {
//   console.log("yeees");
// } else {
//   console.log("no");
// }
// let arr = ''
// console.log(typeof(arr));
// 12 zadanie
// let str = "#hello";
// if (str.includes("@") === true) {
//   console.log("@");
// } else if (str.includes("#") === true) {
//   console.log("#");
// }
// 13 zadanie
// let num = 120;
// let hom = 20;
// if (num % hom === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 13 zadanie
// for (let i = -100; i < 100; i++) {
//   if (i > 0) {
//     console.log(i);
//   }
// }
// 14 zadanie
// for (let i = 0; i < 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// 15 zadanie
// for (let i = 0; i < 100; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }
// 16 zadanie
// let sum = 0;
// for (let i = 1; i < 100; i++) {
//   sum += i;
// }
// console.log(sum);
// 17 zadanie
// let sum = 0;
// for (let i = 1; i < 100; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);
// 18 zadanie
// let sum = 0;
// for (let i = 1; i < 100; i++) {
//   if (i % 2 !== 0) {
//     sum += i;
//   }
// }
// console.log(sum);
// 19 zadanie
// let str = "hello";

// console.log(str.substring(-1 , ));
// 20 zadanie
// let arr = [12, 20, 21, 30, 40];
// console.log(arr.reduce((a, b) => a + b));

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(
//   arr.map((el, idx, arra) => {
//     return arra;
//   })
// );

// let arr = "hello ";
// let str = "world";
// console.log(arr.concat(str));
// hello my name is amir and you name a

// function checkPassword(parol) {
//   const correctPassword = "100"; // Замените это на ваш реальный пароль

//   if (parol === correctPassword) {
//     console.log("Пароль верный: " + parol);
//   } else {
//     console.log("Пароль неверный" + parol);
//   }
// }
// // Пример использования:
// let parol = "100";
// checkPassword(parol);

let num = 12341;
console.log(num.filter((el) => {
    
}));
