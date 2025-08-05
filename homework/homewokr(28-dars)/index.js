// call
// function tanishtir() {
//   console.log("Men " + this.ism);
// }
// let odam = { ism: "Ali" };
// tanishtir.call(odam);

// function yigindi(a, b) {
//   console.log(this.name + " uchun natija:", a + b);
// }
// let foydalanuvchi = { name: "Sardor" };
// yigindi.call(foydalanuvchi, 5, 7);

// let car = {
//   model: "BMW",
//   start: function () {
//     console.log(this.model + " yurmoqda");
//   },
// };
// let bike = { model: "Yamaha" };
// car.start.call(bike);

// function salom(ism, yosh) {
//   console.log(`Salom, ${ism}, yosh: ${yosh}`);
// }
// salom.call(null, "Ali", 17);

// function info(joy, yil) {
//   console.log(`${this.ism} ${joy} da ${yil}-yilda tug‘ilgan`);
// }
// const inson = { ism: "Umid" };
// info.call(inson, "Toshkent", 2007);

// ------------------------------------------

// apply

// function tanishtir() {
//   console.log("Men " + this.ism);
// }
// let odam = { ism: "Ali" };
// tanishtir.apply(odam);

// function yigindi(a, b) {
//   console.log(this.name + " uchun natija:", a + b);
// }
// let foydalanuvchi = { name: "Sardor" };
// yigindi.apply(foydalanuvchi, [5, 7]);

// let car = {
//   model: "BMW",
//   start: function () {
//     console.log(this.model + " yurmoqda");
//   },
// };
// let bike = { model: "Yamaha" };
// car.start.apply(bike);

// function salom(ism, yosh) {
//   console.log(`Salom, ${ism}, yosh: ${yosh}`);
// }
// salom.apply(null, ["Ali", 17]);

// function info(joy, yil) {
//   console.log(`${this.ism} ${joy} da ${yil}-yilda tug‘ilgan`);
// }
// const inson = { ism: "Umid" };
// info.apply(inson, ["Toshkent", 2007]);

// ----------------------------

// bind

// function tanishtir() {
//   console.log("Men " + this.ism);
// }
// let odam = { ism: "Ali" };
// tanishtir.bind(odam)();

// function yigindi(a, b) {
//   console.log(this.name + " uchun natija:", a + b);
// }
// let foydalanuvchi = { name: "Sardor" };
// yigindi.bind(foydalanuvchi, 5, 7)();

// let car = {
//   model: "BMW",
//   start: function () {
//     console.log(this.model + " yurmoqda");
//   },
// };
// let bike = { model: "Yamaha" };
// car.start.bind(bike)();

// function salom(ism, yosh) {
//   console.log(`Salom, ${ism}, yosh: ${yosh}`);
// }
// salom.bind(null, "Ali", 17)();

// function info(joy, yil) {
//   console.log(`${this.ism} ${joy} da ${yil}-yilda tug‘ilgan`);
// }
// const inson = { ism: "Umid" };
// info.bind(inson, "Toshkent", 2007)();
