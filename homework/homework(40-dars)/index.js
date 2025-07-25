// // // let getval = (a) => {
// // //   return (b) => {
// // //     if (b) {
// // //       return getval(a + b);
// // //     }
// // //     return a;
// // //   };
// // // };
// // // console.log(getval(1)(2)(3)(-4)());

// let webbrain = {
//   frontend: [
//     { course: "react", price: 120 },
//     { course: "vue", price: 110 },
//     { course: "angular", price: 100 },
//   ],
//   backend: [
//     { course: "java", price: 120 },
//     { course: "php", price: 110 },
//     { course: "nodejs", price: 100 },
//   ],
//   mobile: {
//     android: [
//       { course: "android", price: 120 },
//       { course: "flutter", price: 160 },
//     ],
//     ios: [
//       { course: "ios", price: 120 },
//       { course: "flutter", price: 110 },
//     ],
//   },
// };
// function getprice(data) {
//   let sum = 0;
//   if (Array.isArray(data)) {
//     for (let item of data) {
//       if (item.price) {
//         sum += item.price;
//       }
//     }
//   } else {
//     for (let key in data) {
//       sum += getprice(data[key]);
//     }
//   }
//   return sum;
// }
// console.log(getprice(webbrain));

let obj = {
  name: "eshmat",
  age: 45,
  _pass1: 777,
  chidl: {
    name: "toshmat",
    age: 20,
    _pass2: 111,
  },
};
function getKey(prop) {
  for (let key in prop) {
    if (typeof prop[key] === "object") {
      return getKey(prop[key]);
    } else {
      console.log(key);
    }
  }
}
getKey(obj);

let a = {
  get(target, prop) {
    if (prop.startsWith("_")) {
    } else {
      return target[prop];
    }
  },
};
let pr = new Proxy(obj, a);
console.log(Object.keys(pr));
