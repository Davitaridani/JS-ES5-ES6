// Cara Membuat Object pada Javascript

// 1. Object Literal

// let mhs = {
//   nama: "Ahmat Davit Ari Dani",
//   energi: 20,
//   makan: function (porsi) {
//     this.hasil = this.energi + porsi;
//     return `hallo ${mhs.nama} Energi Anda ${this.hasil}%, Selamat Makan `;
//   },
// };
// console.log(mhs.makan(13));

// 2. Function Declartion

function Mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  mahasiswa.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Hallo ${this.nama}, Selemat Makan`);
  };
  mahasiswa.main = function (jam) {
    this.energi -= jam;
    console.log(`Hallo ${this.nama}, Selamat Main`);
  };
  return mahasiswa;
}

let davit = Mahasiswa("Ahmat Davit", 30);
let dani = Mahasiswa("Davit", 60);

console.log(davit);

// 3. Constructor Function

// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama}, Selemat Makan`);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Hallo ${this.nama}, Selamat Main`);
//   };
// }

// let davit = new Mahasiswa("Ahmat Davit", 30);
// let dani = new Mahasiswa("Ahmat Dani", 100);

// 4. Object Create

// PROTOTYPE

// function Person(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Person.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Hallo ${this.nama}, Selamat Makan`;
// };

// Person.prototype.main = function (waktu) {
//   this.energi -= waktu;
//   return `Hallo ${this.nama} Selamat Main`;
// };

// Person.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Hallo ${this.nama}, Selamat Tidur`;
// };

// let dataPerson = new Person("Davit", 100);
// let dataPerson_2 = new Person("Dani Saputra", 400);

// console.log(dataPerson);
// console.log(dataPerson_2);

// MEMBUAT VERSI CLASS

// class Person {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }

//   makan(porsi) {
//     this.energi += porsi;
//     return `Hallo ${this.nama}, Selamat Makan`;
//   }

//   main(waktu) {
//     this.energi -= waktu;
//     return `Hallo ${this.nama} Selamat Main`;
//   }

//   tidur(jam) {
//     this.energi += jam * 2;
//     return `Hallo ${this.nama}, Selamat Tidur`;
//   }
// }

// let dataPersonClass = new Person("Ahmat Davit Ari Dani", 500);
// let dataPersonClass_2 = new Person("Edi Budiman", 300);
