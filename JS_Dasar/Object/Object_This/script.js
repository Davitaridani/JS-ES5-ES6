// THIS

// Mmebuat Object

//  Cara 1.menggunakan function declaration
// function hallo() {
//   console.log(this);
//   console.log("hallo, Selamat Siang");
// }
// hallo(); // This mengembailkan object global
// console.log(this == window);
// ==========================================

// 2.Object literal
var object = {
  nama: "Ahmat Davit Ari",
  umur: 20,
};
object.hallo = function () {
  console.log(this);
  console.log("hallo, Selamat Malam");
};
object.hallo(); // mengembalikan object yang bersangkutan/isi object
// ==========================================

// 3.cara mengunakan constructor
// function Nama_saya() {
//     console.log('Halo Davit');
// }
// new Nama_saya();

// mengembalikan object yang baru dii buat
