kankulyator

function Calculator() {
    this.read = function() {
        this.a = +prompt("Birinchi sonni kiriting:");
        this.amal =promt("amal kriting")
        this.b = +prompt("Ikkinchi sonni kiriting:");
    };

    if (calculator.amal == "+" ){
        this.sum = function() {
            return this.a + this.b;
        };
    }
    if (calculator.amal == "-" ){
        this.minus = function() {
            return this.a - this.b;
        };
    }
    if (calculator.amal == "*" ){
        this.minus = function() {
            return this.a * this.b;
        };
    }
    if (calculator.amal == ":" ){
        this.minus = function() {
            return this.a / this.b;
        };
    }


    this.bolish = function() {
        return this.a / this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert("Yig'indisi = " + calculator.sum());
alert("Ayirmasi = " + calculator.minus());
alert("Ko'paytmasi = " + calculator.mul());
alert("Bo'linmasi = " + calculator.bolish());



















// 1


// let obj = {
//     id: 1,
//     name: "WebBrain"
// };

// for(key in obj);{
// console.log(key);
// }








// 2


// let obj = {
//     id: 1,
//     name: "WebBrain"
// };

// for (let key in obj) {
//     if (typeof obj[key] === 'number')  console.log(key); 
    
// }












// 3



// let obj = {
//     id: 1,
//     name: "WebBrain",
//     offline: true,
//     online: true,
//     individual: false
// };

// let boln = {};

// for (let key in obj) {
//     if (typeof obj[key] === 'boolean') {
//         boln[key] = obj[key];
//     }
// }

// console.log(boln);












// 4

// let obj = {
//     id: 1,
//     name: "WebBrain",
//     offline: true,
//     online: true,
//     individual: false
// };

// function Search(obj, str) {
//     for (let key in obj) {
//         if (obj[key] === str) {
//             console.log({ [key]: obj[key] });
//         }
//     }
// }

// Search(obj, "WebBrain");


















// 6

// let person = {
//     id: 1,
//     name: 'Odil',
//     age: 78,
//     child: {
//         id: 1,
//         name: 'Ali',
//         age: 48,
//         child: {
//             id: 1,
//             name: 'Umar',
//             age: 20
//         }
//     }
// };

// function getAgeSum(obj) {
//     let sum = 0;
//     while (obj) {
//         sum += obj.age;
//         obj = obj.child;
//     }
//     return sum;
// }

// console.log(getAgeSum(person));



// 8

// let obj = {
//     id: 1,
//     name: 'Usmon',
//     age: 34,
//     year: 1990
// };
// let currentYear = 2025
// function checkAge(obj) {
//     if (currentYear - obj.year == obj.age) {
//         console.log('malumotlar togri');
//     } else {
//         console.log('xato malumot kiritdingiz');
//     }
// }

// checkAge(obj);











// 9


// let obj = {
//     id: 1,
//     title: 'the best',
//     address: { street: "Farobiy", number: '34' }
// };

// function Object(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'object' && obj[key] !== null) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(Object(obj));
