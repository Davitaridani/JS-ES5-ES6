// //  =========== Object.assign() ===========
// // => Menyalin/mengabungkan semua properti pda object, akan mengembalikanobject target yang sudah di modifikasi

// // Properti enumerable adalah properti yang dapat dimasukkan dan dikunjungi selama for..in loop (atau iterasi properti yang serupa, seperti Object.keys()).

// const dataMhs = {
//   nama: "Ahmat Davit Ari Dani",
//   umur: 22,
//   alamat: "Jember",
// };

// const jurusan = {
//   progamStudi: "MIF",
//   nim: "E31191309",
//   angkatan: 2019,
// };
// const resultObj = Object.assign(dataMhs, jurusan);

// console.log(resultObj);

// // Loop Object mengunakan For In
// for (const properti in resultObj) {
//   console.log(`${properti} : ${resultObj[properti]}`);
// }
// console.log("=================================");

// // Loop Object mengunakan For Of
// Object.entries(resultObj).forEach(([key, value]) =>
//   console.log(`${key} : ${value}`)
// );
