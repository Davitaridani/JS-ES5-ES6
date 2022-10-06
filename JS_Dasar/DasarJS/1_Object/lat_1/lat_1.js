// Mmebuat object dengan Object literal
// ==== Contoh 1 ======
let mhs = {
  nama: "Ahmat Davit Ari Dani",
  umur: 22,
  alamat: {
    desa: "balung Kulon",
    kec: "Balung",
    kab: "Jember",
  },
};

// ==== Mengunakan Template Literal ======
// console.log(
//   `Nama Saya ${mhs.nama} umur ${mhs.umur} yang Beralamat di Desa ${mhs.alamat.desa} Kecamatan ${mhs.alamat.kec} Kabupaten ${mhs.alamat.kab} `
// );

// ==== Contoh 2 ======

const mobil = {
  nama: "Avanza",
  merek: "Veloz",
  warna: "Meraj",
  pemilik: {
    nama: "Paijo",
    alamat: "Jember",
  },
};

console.log(
  "Nama Mobil " +
    mobil.nama +
    " Merek Mobil " +
    mobil.merek +
    "nama Pemilik " +
    mobil.pemilik.nama +
    " Alamat " +
    mobil.pemilik.alamat +
    ""
);
