<<<<<<< HEAD

// let user = {
//     id: 1,
//     firstName: "Eshmat",
//     surName: "Toshmatov",
//     age: 30,
//     getFullName: () => {
//       return `${this.firstName} ${this.surName}`;
//     },
//   };
  
//   console.log(user.getFullName());
// //   natija : undefined,  undefined , sababbi shundaki bu yerda this userga emas globalga qarayapti yani this.firstName da userdagi firstname dan emas globaldan qidiryapti chunki  arraw function this ni oziga boglamaydi








let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      console.log(this.step);
      return this;
    },
  };
  
  ladder.up().up().down().showStep().down().showStep();

  
=======

// let user = {
//     id: 1,
//     firstName: "Eshmat",
//     surName: "Toshmatov",
//     age: 30,
//     getFullName: () => {
//       return `${this.firstName} ${this.surName}`;
//     },
//   };
  
//   console.log(user.getFullName());
// //   natija : undefined,  undefined , sababbi shundaki bu yerda this userga emas globalga qarayapti yani this.firstName da userdagi firstname dan emas globaldan qidiryapti chunki  arraw function this ni oziga boglamaydi








let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      console.log(this.step);
      return this;
    },
  };
  
  ladder.up().up().down().showStep().down().showStep();

  
>>>>>>> c2b9e5ab3d2f0fe6cdbdd60686b3481d46dcc129
//   natija : 1, 0 ,     chunki birinchi qadamda yani up da step 1 ga teng boladi  keyin 1 yana oshadi va 2 boladi keyin down -1 qiladi va step qiymati 1 boladi keyin showstep kelib console.log qiladi va consolga  1 chiqadi undan song down yana stepni 1 qiymatidan -1 qiladi va step qiymati 0 boladi yana showstep keladi consol.log qiladi  va consolga 0 chiqadi