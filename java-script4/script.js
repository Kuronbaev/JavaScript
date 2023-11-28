// function task(str) {
//     return str.
// }
// console.log("maksimal");
// function task(str) {
//   return str.slice(0, 12).toUpperCase();
// }

// console.log(task("maksimalyno"));
// let nam = "hello"
// console.log(nam.t);
// методы
// // 1.metod Charat
// let num = "hellllop"
// console.log(num.charAt(1));
// 2.metod substring
// 3.metod substr
// function task(str1, str2) {
//     return str1.concat(str2)
// let s = 4
// console.log(typeof(true));
// includes false true
// }
// console.log(str1("hahhah") str2("jwcjkbjhwbcw"));
// let str = "hudsjb"/
// console.log(str.substring(1, 2));
// 11. Вам дана переменная str = 'макСИМАЛЬНО ужаСНО'. Выведите в консоль первую букву
//  в верхний регистр.
// function task(str) {
//   return str.charAt(0).toUpperCase().concat(str.slice(1).toLowerCase());
// }
// console.log(task("макСИМАЛЬНО ужаСНО"));
// 12. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения
// буквы а.
// function task(str) {
//   return str.indexOf("к")
// }
// console.log(task("Максимально Ужасно"));
// 13. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего
// буквы о.
// function task(str) {
//   return str.lastIndexOf("о");
// }
// console.log(task("Максимально Ужасно"));
// 14. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами
// (через substr, substring, slice) и выведите в консоль.
// let str = "aaa bbb ccc";
// console.log(str.substr(4, 4));
// console.log(str.substring(4, 8));
// console.log(str.slice(4, 8));
// let str = "sdcsschs"
// console.log(str[2]);
// array - массив - []

// let array = [12,4 , 5, 6, "as", "as", true, false, null, undefined, {} , [12,123,1234] ]
// console.log(array.lastIndexOf[1]);
// metod - koshuu

// 1 - push() akyryna koshot
// 2 - pop() akyrkyny ochurot
// 3 - shift()  bashindagy elementty alyp salat
// 4 - unshift() bashina kosot
// 5 - splice() uch parametr kabyl alat 1 - kanchadan kyiyn num, 2 - kanchoonu udaltetet num: , 3 - orduna koiot string
// 6 - map() metod massiva 3 parametr 1 element 2 index 3 array
// 7 - split() massivke ailandyrat seperator degen parametrdi kabil alat === ""
// let str = "Motion web";
// console.log(str.split(" "));
// 8 - join() massivdi strokaga ailandyrat separator kabyl alat === ""
// let str = ["Motion web"]
// console.log(str.join(""));
// 9 - sort eki parametr a,b sortirovka
// let arr = [1,2,3,4,5,6,6,7,8,9,23,4,86,8]
// console.log(arr.sort((a, b) => a - b));

// let arr = ["34", "22", "1", "2", "4", "12", "3", "9", "10", "99"];
// console.log(arr.sort(a, b) => localStorage(b));
/* 10 - \n переносит в другую строку пример

let str = "hello nana" + "\n" + "mama";
console.log(str);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr = arr.map((element)=> {
    return element % 20
})
console.log(newArr);

let arr = [];
arr[0] = "motion";
console.log(arr);

let arr = [1,2,3,4,5,6,7,8,9,]
console.log(arr);

filter() element index array
console.log(arr.filter(el, idx, arr)=> {
    return el.length > 5
});
Taalaibek Ymankulov, [24/8/23 17:27]
Во всех задачах используйте только методы map, filter.

1. Вам дан массив: [315, 64, 75, 43, 65, 63].Найдите сумму каждого числа.
let arr = [315, 64, 75, 43, 65, 63];
console.log(
  arr.map((el) => {
    return el + el;
  })
);
2. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, изменяющую букву а в каждом имени на я и выведите в консоль.
let arr = ['Аскар', 'Баяман', 'Калмамат']
console.log();
3. Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию, которая выводит только те имена, где есть буква к и выведите в консоль.
let arr = ["Аскар", "Баяман", "Калмамат"];
console.log(
  arr.filter((el) => {
    return el.toLocaleLowerCase().includes("к");
  })
);
4. Вам дан массив: [4, 54, 49]. Сделайте из него массив, состоящий из квадратов этих чисел.
let arr = [4, 54, 49];
console.log(
  arr.map((el) => {
    return el ** 2;
  })
);
5. Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.
let arr = [3134, 4, -143, -245, -214];
console.log(
  arr.filter((el) => {
    return el < 0;
  })
);
6. Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа.
let arr = [3, 51, 30, 54, 60]
console.log(arr.filter((el) ));
7. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Оставьте в нем только те строки, длина которых больше 5-ти символов.
8. Вам дан массив [-13, 96, -41, -28, 40]. Посчитайте количество отрицательных чисел в этом массиве.
let arr = [-13, 96, -41, -28, 40];
console.log(
  arr.filter((el) => {
    return el < 0;
  }).length
);
9. Вам дан массив [3, 51, -30, -54, 60]. Оставьте в нем только положительные числа. Затем извлеките квадратный корень из этих чисел, если эти числа больше 30.
let arr = [3, 51, -30, -54, 60];
console.log(
  arr.filter((el) => {
    return el > 30;
  })
);
11. Вам дан массив [NaN, 0, 77, false, -17, '',undefined, 99, null]. Создайте функцию, которая очищает массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустая строка).
12. Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки.
let arr = ["Бегимай", "Баяман", "Калмамат"];
console.log(
  arr.filter((el) => {
    return el.length;
  })
);

Taalaibek Ymankulov, [24/8/23 17:27]
// 9. Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат']. Используйте заглавные буквы в каждом массиве имен.
//     Пример: (["john", "JACOB", "jinGleHeimer", "schmidt"])), => ["John", "Jacob", "Jingleheimer", "Schmidt"]
let arr = ["асКар", "бЯяман", "калМмамат"];
console.log(
  arr.map((el) => {
    return el;
  })
);

let atr = "havhjac"
console.log(atr.());

1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
let arr = ['a', 'b', 'c']
arr.push(1, 2, 3)
console.log(arr);
2 Даны два массива: [1, 2, 3] и [1, 2, 3]. Объедините их вместе.
let arr = [1, 2, 3]
let str = [1, 2, 3]
console.log(arr.concat(str));
3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в
новый элементы [1, 2, 3].
8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый
элементы [4, 5].
9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте
массив в [1, 4, 5].
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr);
10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в
новый массив элементы [2, 3, 4].
let arr = [1, 2, 3, 4, 5];
console.log(arr.splice(1, 3));
11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него
массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, "a", "b", "c");
console.log(arr);
12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice
сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, "a", "b");
arr.splice(6, 0, "c");
arr.splice(8, 0, "e");
console.log(arr);

let arr = new Array(5)
console.log(arr.fill("x"));

Задание № 11
Напишите функцию, которая принимает массив с числами и выводит количество отрицательных чисел в этом массиве
Пример: [7, -5, -29, 0, 62, 4, 5, -6, -27]
Вывод: //4
let arr = [7, -5, -29, 0, 62, 4, 5, -6, -27];
console.log(
  arr.filter((el) => {
    return el < 0;
  }).length
);

Задание № 12
Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю.
function rgb(str, str1, str2) {}
console.log(rgb(23, 100, 134));

Задание № 13
Напишите функцию, которая принимает два аргумента и возвращает все числа, которые делятся на данный делитель. Первый аргумент - это массив чисел, а второй - делитель.
Пример: divisible([1, 2, 3, 4, 5, 6], c)
Вывод: [2, 4, 6]
let arr = [1, 2, 3, 4, 5, 6];
let str = 3;
function task(arr, srt) {
  return arr.filter(number => number % str === 0);
}
const output = task(arr, str);
console.log(output);

let arr = ["apple","banana","phone","motion"]

let arr = ["apple", "banana", "phone", "motion"];
console.log(arr[0]);

let arr = ["apple", "banana", "phone", "motion"];
arr[2] = "haha"
console.log(arr);

let arr = ["Apple", "Orange", "Plum"];
то же самое, что и fruits[fruits.length-1]
console.log(arr.at(-2));

let arr = ["Apple", "Orange", "Plum"];
console.log(arr.at(i));

let stylez = ["Джаз", " Блюз"];
stylez.push("Рок-н-ролл");
stylez.splice(1, 1, "Классика");
stylez.shift();
stylez.unshift("Рэп", "Регги");
console.log(stylez);

function divisible(numbers, divisor) {
return numbers.filter(number => number % divisor === 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const divisor = 2;
const output = divisible(numbers, divisor);
console.log(output);  // Вывод: [2, 4, 6]

switch (key) {
    case value:

        break;

    default:
        break;
}

let arr = ["34", "22", "1", "2", "4", "12", "3", "9", "10", "99"];

console.log(
  arr
    .filter((el) => {
      return el % 2 === 0;
    })
    .sort((a, b) => a - b)
    .map((el) => +el)
);

reduce()
let arr = ["Kanykei", "Amir", "Aziret", "Muzar", "Sherzat", "Meerim", "Islam"];
console.log(
  arr.filter((el) => {
    return el.replace("i", "e");
  })
);

Дана функция checkTask(arr) которая принимает массив c числами. При помощи метода reduce необходимо вернуть новый массив без дубликатов.

Пример: Дан массив: [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10]. Результат: [18, 21, 1, 51, 5, 7, 10]
function task(arr) {
  return arr.reduce((acc, el) => {
    return acc !== el;
  });
}
console.log(task([18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10].));
function checkTask(arr) {
  return arr.filter((num, index) => arr.indexOf(num) === index);
}
console.log(checkTask([18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10]));

function task(arr) {
    return arr.reduce((acc, el) => {
        if (acc / el !== 1){
            return arr
        }
    })
}
console.log(task([18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10]));

function task(arr) {
  return arr.reduce((acc, el) => {
    if (!acc.includes(el)) {
      acc.push(el);
    }
    return acc;
    re;
  }, []);
}
console.log(task([18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10]));

Найдите самое длинное слово в строке
// const str = "I am a Megalodon, oceans feeling like a pond"
const str = "I am a Megalodon, oceans feeling like a pond";
console.log(str.split(" ").filter((el) => {
    return el.length()
}));

const str = "I am a Megalodon, oceans feeling like a pond";

console.log(
  str.split(" ").reduce((acc, el) => {
    // return acc.length > el.length ? acc : el;
    if (acc.length > el.length) {
      return el;
    } else {
      return acc;
    }
  })
);*/
// let obj = {
//   id: 92094,
// };
// console.log(ob);

// metod 1

// 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.
// let arr = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// console.log(Object.keys(arr).length);
// 2. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта.
// let arr = {a: 1, b: 2, c: 3}
// console.log(arr["c"]);
// 3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.
// let arr = {Ширин: '1000', Айжан:'500', Атай: '200'}
// delete arr.Айжан
// console.log(arr);
// // 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Измените зарплату Атая на 500.
// let arr = {Ширин: '1000', Айжан:'500', Атай: '200'}
// arr.Атай = "500"
// console.log(arr);
// 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}. Добавьте к объекту ключ Медет со значением 1500.
// let arr = { Ширин: "1000", Айжан: "500", Атай: "200" };
// arr['Medet'] = '1500'
// console.log(arr);
// 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите значение ключа salary в консоль.
// let arr = { Ширин: "1000", Айжан: "500", Атай: { salary: "500" } };
// console.log(arr.Атай);
// 7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.
// let arr = {
//   pon: 1,
//   vtornik: 2,
//   sreda: 3,
//   chetverk: 4,
//   piat: 5,
//   sub: 6,
//   vos: 7,
// };
// console.log(arr.vtornik);
// 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.
// let day = {
//     pon: 1,
//     vtornik: 2,
//     sreda: 3,
//     chetverk: 4,
//     piat: 5,
//     sub: 6,
//     vos: 7,
//   };
//   console.log(Object.keys(day.pon));
// 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все ключи объекта.

//     10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все значения объекта.

//         11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Выведите все entries объекта.
// let arr = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// console.log(Object.entries(arr));
//             12. Создайте функцию, передайте в нее объект {name: 'Igor'}. Выведите 1, если длина ключа name нечетная, 0 если четная.

// function task(obj) {
//   if (obj.name.length % 2 === 0) {
//     return 0;
//   } else {
//     return 1;
//   }
// }
// console.log(task({ name: "Igorr" }));

// 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] . Выведите все id в консоль через map.
// let arr = [{ id: 3 }, { id: 5 }, { id: 6 }, { id: 7 }];
// console.log(
//   arr.map((el) => {
//     return el;
//   })
// );

// 14. Создайте функцию, передайте в нее объект {name: 'Igor'}. Добавьте новый ключ age со значением 25. Поменяйте значение name на Azat.
// let arr = {name: 'Igor'}
// arr[""]
// console.log(arr);

// for (
//   let i = [
//     {
//       id: 1,
//       name: "alima",
//       age: 21,
//       job: "develop",
//     },
//     {
//       id: 2,
//       name: "amir",
//       age: 16,
//       job: "develop",
//     },
//     {
//       id: 3,
//       name: "muzar",
//       age: 17,
//       job: "develop",
//     },
//     {
//       id: 4,
//       name: "sherzat",
//       age: 18,
//       job: "develop",
//     },
//     {
//       id: 5,
//       name: "baku",
//       age: 20,
//       job: "develop",
//     },
//     {
//       id: 6,
//       name: "kanikey",
//       age: 19,
//       job: "develop",
//     },
//     {
//       id: 7,
//       name: "islam",
//       age: 16,
//       job: "develop",
//     },
//     {
//       id: 8,
//       name: "meerim",
//       age: 18,
//       job: "develop",
//     },
//   ];
//   i.name === "sherzat";

// ) {
//   i.name = "mabmhbs";
//   console.log(i.name);
// }

//   task.map((el) => {
//     return el.name;
//   })
// );
// console.log(
//   task.filter((el) => {
//     return el.age > 17;
//   })
// );

// console.log(
//   task.filter((el) => {
//     el.hobby = "el";
//     return el;
//   })
// );

// console.log(
//   task.filter((el, index) => {
//     if (index % 2 !== 0) {
//       el.hobby = "sport";
//     }
//     return el;
//   })
// );

// console.log(
//   task.filter((el, index) => {
//     if (index % 2 !== 0) {
//       el.hobby = "sport";
//     }
//     return el;
//   })
// );

// console.log(
//   task.map((el) => {
//     if (el.name === 'sherzat') {
//       return { ...el, name: " Azamat" };
//     }
//     return el
//   })
// );

// let i = 12;
// do {
//   console.log(i);
//   i++;
// } while (i < 21);

///*
// let arr = ['gdss','dfdsgsd']
// console.log(arr.reduce(function ()));

// let str = '1'
// console.log(str * 2);

// let arr
// console.lo
/*
//  cicle
// increment a++ + 1
//  dcrement a-- -1
*/
// let a = 0;
// console.log(a++);

// 1. Выведите столбец чисел от 1 до 50.
// for (let i = 1; i < 50 ; i++) {
//   console.log(i);
// }
// 2. Создайте переменную с пустым массивом, заполните массив 10-ю элементами X с помощью цикла.
// let arr = [];
// for (let i = 0; i < 10; i++) {
//   console.log(arr.push('x'));
// }
// console.log(arr);
// 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла for выведите все эти элементы в консоль.
// let arr = [5, 3, 1, 2, 7];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// 4. Вам дан массив с элементами [5, 2, 1, 2]. С помощью цикла for найдите произведение элементов этого массива.
// let arr = [5, 2, 1, 2];
// let sum = 1;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum * arr[i];
// }
// console.log(sum);

// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.
// for (let i = 0; i < 100; i++) {
//   if (i % 2 === 0) {
// console.log(i);

//   }
// }
// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.
// let sum = 0;
// for (let i = 0; i < 100; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
// let arr = [2, 4, 5, 6, 8]
// let result = 0
// for (let i = 0 ; i < arr.length ; i++) {
//   result += arr[i]
// }
// console.log(result);
// 8. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
// let arr = [3, 4, 6, 12, 3, 5];
// for (let i = 0; i< arr.length; i++) {
//   if (arr[i] > 3) {
//     console.log(arr[i]);
//   }
// }
// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
// let arr = [12, -23, 23, -32, -213, 343];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     sum += arr[i];
//   }
// }
// console.log(sum);

// let str = [12, 23, 343];
// let summ = 0;
// for (let i = 0; i < str.length; i++) {
//   summ += str[i];
// }
// console.log(summ);

// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
// let arr = [5, 1, 3, 7, 6, 15, 3, 20];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 4) {
//     console.log('yesr');
//   }
// }

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
//   n = n / 2;
// }

// console.log("Итоговое число: " + n);
// console.log("Количество итераций: " + num);
// 14. Вам дан массив с числами [1, 2, 3, 7, 6, 9]. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
// 15. Вам дан массив с числами [1, 2, 3, 4, 5]. С помощью цикла найдите сумму квадратов элементов этого массива.
// 16. Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
// 17. Создайте переменную с пустым массивом, заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
// 18. Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.
// 19. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].Создайте цикл, который выводит нечетные числа, которые больше 10.
