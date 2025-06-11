// let a = [1, 2, 3, 4, 5];
// let b = a.filter((val) => val % 2);
// console.log(b);
// -----------------------------------------------
// let arr = [5, 8, 6, 3, 4];
// let juft = [];
// let toq = [];
// let count = 0;
// let count2 = 0;

// let newArr = [];

// arr.forEach((value) => {
//   value % 2 ? toq.push(value) : juft.push(value);
// });

// toq = toq.sort((a, b) => a - b);

// arr.forEach((value, index) => {
//   if (value % 2) {
//     newArr.push(toq[count]);
//     count++;
//   } else {
//     newArr.push(juft[count2]);
//     count2++;
//   }
// });

// console.log(newArr);
// -----------------------------------------------
// function Pangram(sentence) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   const normalized = sentence.toLowerCase().replace(/[^a-z]/g, "");
//   const uniqueLetters = new Set(normalized);

//   return alphabet.split("").every((letter) => uniqueLetters.has(letter));
// }
// console.log(Pangram("Tez jigarrang tulki dangasa it ustidan sakrab o'tadi"));
// console.log(Pangram("Salom dunyo"));
// -----------------------------------------------
// let arr = [1, 1, 2, 3, 4, 4, 5, 6, 6];
// let n = [];
// let natija = arr.filter((val, i, array) => {
//   return array.indexOf(val) === array.lastIndexOf(val);
// });
// console.log(natija);
// -----------------------------------------------
// let a = ["a", "b", "d", "e", "f", "j", "h", "l"];
// let b = ["a", "b", "c", "d", "e", "f"];

// let arr = [];

// if (a.length < b.length) {
//   for (let value of b) {
//     if (!a.includes(value)) arr.push(value);
//   }
// } else {
//   for (let value of a) {
//     if (!b.includes(value)) arr.push(value);
//   }
// }

// console.log(arr);
