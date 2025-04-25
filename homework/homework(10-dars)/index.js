// // let user = {
// //     id: 1,
// //     name: "Eshmat",
// //     age: 65,
// //     status: "Nafaqa oluvchi",
// //     child: {
// //       id: 2,
// //       name: "Toshmat",
// //       age: 30,
// //       status: "Talaba",
// //     },
// //   };

// //   let cloneUser = structuredClone(user);

// //   cloneUser.child.age = 45;

// //   console.log(user.child.age);
// //   console.log(cloneUser.child.age);





















// let user = {
//   id: 1,
//   name: "Eshmat",
//   age: 65,
//   status: "Nafaqa oluvchi",
//   child: {
//     id: 2,
//     name: "Toshmat",
//     age: 30,
//     status: "Talaba",
//     func() {
//       return this.age;
//     },
//   },
// };

// let cloneUser = {};

// for (key in user) {
//   if (typeof user[key] === "object") {
//     cloneUser[key] = {};
//     for (childKey in user[key]) {
//       cloneUser[key][childKey] = user[key][childKey];
//     }
//   } else {
//     cloneUser[key] = user[key];
//   }
// }

// cloneUser.child.age = 45;

// console.log(user);
// console.log(cloneUser);

