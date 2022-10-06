// function hello() {
//   let nama = "Davit";
//   return function (nama) {
//     console.log(nama);
//   };
// }

// let pangilNama = hello();

// pangilNama("Davit");
// pangilNama("INDO");

// ======================================

// UNTUK  MEMBUAT FUNCTION FAKTORIES

function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Hallo, Nama Saya ${nama}, Selamat ${waktu}`);
  };
}

let selamatPagi = ucapkanSalam("Pagi");
let selamatSiang = ucapkanSalam("Siang");
let selamatMalam = ucapkanSalam("Malam");

// selamatPagi("Davit");
// selamatSiang("Ari");
// selamatMalam("Dani");

// ======================================

// CARA 1
// let add = function () {
//   let hitung = 0;
//   return function () {
//     return ++hitung;
//   };
// };

// let x = add();

// console.log(x());
// console.log(x());
// console.log(x());

// ===========================================

// CARA 2

// let hitung = 20;

// let add = (function () {
//   let hitung = 0;
//   return function () {
//     return ++hitung;
//   };
// })();

// console.log(add());
// console.log(add());
// console.log(add());
