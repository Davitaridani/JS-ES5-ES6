// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = 10;

// creation pharse pada global context
// nama let = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// var nama = "Davit";
// var umur = 22;

// function sayHello() {
//   return `Nama Saya ${nama}, Saya Umur ${umur}`;
// }

// console.log(sayHello());

// var nama = "Ahmat Davit Ari Dani";
// var email = "davitaridani@gmail.com";

// function cetakURL(email) {
//   console.log(arguments);
//   var igURL = "http://instagram.com/";
//   return igURL + email;
// }

// console.log(cetakURL("edi@gmail.com"));

// function a() {
//   console.log("ini function A");

//   function b() {
//     console.log("ini function B");

//     function c() {
//       console.log("ini function C");
//     }
//     c();
//   }
//   b();
// }
// a();

// function satu() {
//   var nama = "isi function satu";
//   console.log(nama);
// }

// function dua() {
//   console.log(nama);
// }

// console.log(nama);
// var nama = "Ahmat Davit Ari Dani";
// satu();
// dua("menerima prameter");
// console.log(nama);

// OUT PUT
//
// 1. satu(); => isi function satu
// 2. dua(); => isi function dua
// 3. Ahmat Davit Ari dani

// SayHello();

// function SayHello() {
//   nama = "Ahmat Davit";
// }

var nama = "Davit";
var umur = 33;

function Hello() {
  return `nama Saya ${nama}, umur ${umur}`;
}

console.log(Hello());
