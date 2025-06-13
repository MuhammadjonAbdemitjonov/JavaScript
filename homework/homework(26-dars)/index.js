// // // let natija = [];
// // // (function (fc) {
// // //   for (let i = 0; i <= fc; i++) {
// // //     natija.push(i);
// // //   }
// // // })(5);
// // // console.log(natija);
// // //
// // //
// // //
// // //
// // let result = (function sumDigits(n) {
// //   if (n === 0) {
// //     return 0;
// //   } else {
// //     return (n % 10) + sumDigits(Math.floor(n / 10));
// //   }
// // })(1234);
// // console.log(result);
// //
// //
// //
// //
// let obj = {
//   id: 1,
//   name: "CEO",
//   salary: 5000,
//   subordinates: [
//     {
//       id: 2,
//       name: "CTO",
//       salary: 4000,
//       subordinates: [
//         { id: 4, name: "Dev1", salary: 2000, subordinates: [] },
//         { id: 5, name: "Dev2", salary: 2500, subordinates: [] },
//       ],
//     },
//     {
//       id: 3,
//       name: "CFO",
//       salary: 4500,
//       subordinates: [
//         { id: 6, name: "Accountant", salary: 1800, subordinates: [] },
//       ],
//     },
//   ],
// };

// let total = (function totalsalary(obj) {
//   let total = obj.salary;
//   for (let subordinate of obj.subordinates) {
//     total += totalsalary(subordinate);
//   }
//   return total;
// })(obj);

// console.log(total);
//
//
//
//
//
//
//
// setInterval(() => {
//   console.log("Bu xabar har 2 soniyada chiqadi.");
// }, 2000);
//
//
// setInterval(() => {
//   console.log("Hozirgi vaqt:", new Date().toLocaleTimeString());
// }, 1000);
//
//
// let i = 1;
// let intervalId = setInterval(() => {
//   console.log(i);
//   if (i === 10) clearInterval(intervalId);
//   i++;
// }, 500);
//
//
// setInterval(() => {
//   console.log("1 daqiqa o‘tdi. Ishlashni davom eting!");
// }, 60000);

//
//
// setInterval(() => {
//   console.log("Tasodifiy son:", Math.floor(Math.random() * 100));
// }, 1000);
//
//
//
//
//
// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(`Element ${i} ko‘rinmoqda`);
//   }, i * 1000);
// }
//
//
// setTimeout(() => {
//   alert("Eslatma: Suv ichishni unutmang!");
// }, 10000);
//
//
// setTimeout(() => {
//   console.log("Salom, 3 soniyadan keyin chiqdi!");
// }, 3000);
//
//
