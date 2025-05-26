let people = [
  {
    id: 1,
    firstName: "Eshmat",
    lastName: "Toshmatov",
    age: 20,
    status: "Talaba",
  },
  {
    id: 2,
    firstName: "Gulmat",
    lastName: "Surmatov",
    age: 17,
    status: "O'quvchi",
  },
  {
    id: 3,
    firstName: "Dilshod",
    lastName: "Karimov",
    age: 25,
    status: "Ishchi",
  },
  {
    id: 4,
    firstName: "Malika",
    lastName: "Xoliqova",
    age: 30,
    status: "Uqituvchi",
  },
  { id: 5, firstName: "Zafar", lastName: "Bozorov", age: 19, status: "Talaba" },
  {
    id: 6,
    firstName: "Umida",
    lastName: "Raxmatova",
    age: 22,
    status: "Tadbirkor",
  },
  {
    id: 7,
    firstName: "Rustam",
    lastName: "Ziyodov",
    age: 35,
    status: "Dasturchi",
  },
  {
    id: 8,
    firstName: "Nodira",
    lastName: "Saidova",
    age: 28,
    status: "Muhandis",
  },
  {
    id: 9,
    firstName: "Javlon",
    lastName: "Qurbonov",
    age: 24,
    status: "Frilanser",
  },
  {
    id: 10,
    firstName: "Shahnoza",
    lastName: "Ergasheva",
    age: 18,
    status: "O'quvchi",
  },
];
// 1.............................................
// let i = 0;
// let getId = (num) => {
//   for (val of people) {
//     i = people.indexOf(val);
//     if (val.id === num) {
//       people.splice(i, 1, {
//         id: 5,
//         firstName: "Ali",
//         lastName: "Valiyev",
//         age: 25,
//         status: "Dasturchi",
//       });
//     }
//   }
// };
// getId(5);
// console.log(people);
// 2..........................................
// let qizlar = people.filter((people) => people.lastName.slice(-2) === "va");
// console.log(qizlar);
// 3..........................................................
// let delid = (num1, num2) => {
//   people = people.filter((obj) => obj?.id !== num1 && obj.id !== num2);
// };
// delid(4, 9);
// console.log(people);
// 4.................................................................
// let getId = (num) => {
//   for (val of people) {
//     i = people.indexOf(val);
//     if (val.id === num) {
//       val.firstName = "Gulbashakar";
//     }
//   }
// };
// getId(7);
// console.log(people);
// 5..................................
// people.sort((a, b) => a.lastName.localeCompare(b.lastName));
// console.log(people);
