// KONSEP THIS PADA ARROW FUNCTION

// Constructor Function

// const Person = function () {
//   this.nama = "Ahmat Davit Ari Dani";
//   this.umur = 33;
//   this.hello = function () {
//     console.log(`nama saya ${this.nama}, umur saya ${this.umur}`);
//   };

//   console.log(this.hello());
// };

// const data = new Person();

// console.log("============================================================");

// ==============================================================

// Arrow Fucntion

// const Person1 = function () {
//   this.nama = "Ahmat Davit Ari Dani";
//   this.umur = 33;
//   this.hello = () => {
//     return `nama saya ${this.nama}, umur saya ${this.umur}`;
//   };
//   console.log(this.hello());
// };

// const data = new Person1();

// =======================================================

// Memngunakan Object Literal

// let Person2 = {
//   nama: "Ahmat Davit Ari",
//   umur: 33,
//   myFunction: () => {
//     return `nama saya ${nama} umur saya ${umur}`;
//   },
// };

// console.log(Person2.myFunction());

// =====================================================

// Studi Kasus

// const Person = function () {
//   this.nama = "Ahmat Davit Ari Dani";
//   this.umur = 33;
//   this.hello = function () {
//     console.log(`nama saya ${this.nama}, umur saya ${this.umur}`);
//   };

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 1000);
// };

// const data = new Person();

// STUDI KASUS 2

const itemBox = document.querySelector(".box");

itemBox.addEventListener("click", function () {
  // kaata kunci TOGGLE akan menambahkan class baru jika belum  ada atau sebaliknya
  this.classList.toggle("size");
  setTimeout(() => {
    this.classList.toggle("caption");
  }, 1000);
});
