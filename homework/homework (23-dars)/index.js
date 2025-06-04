// let a = [1, 2, 3, 4, 5];
// let b = a.filter((val) => val % 2);
// console.log(b);
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
