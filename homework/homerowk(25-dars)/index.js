// let natija = [];
// function Fibonacci(fc) {
//   for (let i = 0; i <= fc; i++) {
//     natija.push(i);
//   }
// }
// Fibonacci(5);
// console.log(natija);
// 2.........................
// function sumDigits(n) {
//   if (n === 0) {
//     return 0;
//   } else {
//     return (n % 10) + sumDigits(Math.floor(n / 10));
//   }
// }
// console.log(sumDigits(1234));
// 5...........................
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
// let total = 0;
// function totalsalary(obj) {
//   total = obj.salary;
//   for (let subordinate of obj.subordinates) {
//     total += totalsalary(subordinate);
//   }
//   return total;
// }
// console.log(totalsalary(obj));
