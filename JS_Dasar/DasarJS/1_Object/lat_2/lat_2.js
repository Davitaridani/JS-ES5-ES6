// Membuat Object

// Object Literal
let mhs1 = {
  nama: "Ahmat Davit ",
  umur: 23,
  alamat: "Jember",
};

let mhs2 = {
  nama: "Dimas Ainur",
  umur: 30,
  alamat: "Lumajang",
};
console.log("==== Menggunakan Object Literal ===");
console.log(`nama saya ${mhs1.nama}  umur ${mhs1.umur} Alamat ${mhs1.alamat}`);
console.log(`nama saya ${mhs2.nama}  umur ${mhs2.umur} Alamat ${mhs2.alamat}`);

// Function Declaration
function sayHello(nama, umur, alamat) {
  let hello = {};
  hello.nama = nama;
  hello.umur = umur;
  hello.alamat = alamat;
  return sayHello();
}
console.log("======== Menggunakan Object function declaration =======");
console.log(`nama Saya ${"Ari"} umur ${29} Alamat ${"Jombang"}`);

// Object Constructor function
function SayHello(milik, merk, thn) {
  this.pemilik = milik;
  this.merek = merk;
  this.tahun = thn;
}
console.log("======== Menggunakan Object Constructor Function =======");
let milik_1 = new SayHello("Ahmat Davit Ari Dani", "Avanza", 2019);
let milik_2 = new SayHello("Supriadi", "Xenia", 2022);
let milik_3 = new SayHello("Dimas Ainur Fanani", "Avanza", 2019);

console.log(`Nama Mobil ${milik_1.merek}`);
console.log(milik_2); // Ini Akan Mengembalikan Onbject nya
console.log(
  `Nama pemilik ${milik_3.pemilik}, Merek Mobil ${milik_3.merek}, Tahun Mobil ${milik_3.tahun}`
); // Akan Mengembalikan properti  daro object nya

// MENGUNAKAN PROTOTYPE
let dataDiri = {
  nama: "Ahmat Davit Ari",
  umur: 22,
  alamat: "Jember",
  data: function () {
    const nama = "Dimas";
    return `Nama Saya ${this.nama}, Saya Umur ${this.umur} Beralamat ${this.alamat} `;
  },
};

console.log(dataDiri.data());
("use strict");
function myFunction() {
  return this;
}

console.log(myFunction());
// ===================
console.log(dataDiri.data());
