// class Getdata {
//   name = "eshmat";
//   getD() {
//     let data = new Date();

//     console.log(
//       data.getHours(),
//       ":",
//       data.getMinutes(),
//       ":",
//       data.getSeconds()
//     );
//   }
// }
// setInterval(() => {
//   new Getdata().getD();
// }, 1000);
// class Nexia {
//   static tezlik = 0;
// //   gazbos() {
// //     console.log((Nexia.tezlik += 10));
// //   }
// //   holat() {
// //     console.log(`Nexia hozir ${Nexia.tezlik} da harakatlanmoqda`);
// //   }
// // }
// class Malubi {
//   static tezlik = 0;
//   gazbos() {
//     Malubi.tezlik += 10;
//   }
//   holat() {
//     console.log(`Malubi hozir ${Malubi.tezlik} da harakatlanmoqda`);
//   }
// }
// // new Malubi().gazbos();
// // new Malubi().gazbos();
// // new Malubi().gazbos();
// // new Malubi().gazbos();
// // new Malubi().gazbos();
// // new Malubi().gazbos();
// // new Malubi().holat();

// class Tesla extends Malubi {
//   static quvvat = 100;
//   quvvatla() {
//     Tesla.quvvat = 100;
//   }
//   gazbos() {
//     Tesla.quvvat -= 5;

//     Tesla.tezlik += 10;
//   }
//   holat() {
//     console.log(
//       `tesla hozir ${Tesla.tezlik} km/s da qavvati esa ${Tesla.quvvat}% qoldi`
//     );
//   }
// }
// new Tesla().gazbos();
// new Tesla().gazbos();
// new Tesla().gazbos();
// new Tesla().gazbos();
// new Tesla().quvvatla();
// new Tesla().gazbos();
// new Tesla().gazbos();
// new Tesla().holat();

// class SpeedControlMixin {
//   static tezlik = 0;
//   accelerate() {
//     SpeedControlMixin.tezlik += 10;
//   }
//   brake() {
//     SpeedControlMixin.tezlik -= 10;
//   }
//   Speedholat() {
//     console.log(
//       `siz hozir ${SpeedControlMixin.tezlik}km/s da harakat qilyapsiz`
//     );
//   }
// }

// class AudioSystemMixin {
//   static audio = "";
//   nmadur = "aaaaa";
//   playAudio() {
//     AudioSystemMixin.audio = "ishlamoqda";
//   }
//   stopAudio() {
//     AudioSystemMixin.audio = "Ishllamayapti";
//   }
//   holat() {
//     console.log(`audio hozir ${audio}`);
//   }
// }

// class car {
//   constructor(car, speed) {
//     this.name = car;
//     this.speed = speed;
//   }
//   status() {
//     console.log(`${this.name} hozir ${this.speed}km/s da harakatlanmoqda`);
//   }
// }

// class Sportcar extends car {}
// Object.assign(
//   Sportcar.prototype,
//   new SpeedControlMixin(),
//   new AudioSystemMixin()
// );
// new Sportcar().nmadur;
