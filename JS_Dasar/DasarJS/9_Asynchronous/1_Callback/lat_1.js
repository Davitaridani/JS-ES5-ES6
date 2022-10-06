// Callback

// Syncrounus
// function sayhello(namaAnda) {
//   alert(`Halllo Nama Saya ${namaAnda}`);
// }

// function tampilPesan(pangil) {
//   const namaAnda = prompt("Masukan Nama Anda :");
//   pangil(namaAnda);
// }

// tampilPesan(sayhello);

// ==========================================
// Asyncrounous
// Inti dari Asyncrounous Bloking yaitu kode akan dijalanakan secara berurutan

// const mhs = [
//   {
//     nama: "Ahmat Davit Ari Dani",
//     nim: "E311819389",
//     Jurusan: "MIF",
//     alamat: "Jember",
//     umur: 22,
//   },
//   {
//     nama: "Dimas Ainur",
//     nim: "E334493482",
//     Jurusan: "TIF",
//     alamat: "Lumajang",
//     umur: 21,
//   },
//   {
//     nama: "Royyan Vananai",
//     nim: "E31181y646",
//     Jurusan: "TKK",
//     alamat: "Jakarta",
//     umur: 22,
//   },
//   {
//     nama: "Gilang Pmabudi",
//     nim: "E313742834",
//     Jurusan: " TKK",
//     alamat: "Jombang",
//     umur: 25,
//   },
//   {
//     nama: "Dana Saputra",
//     nim: "E3133425",
//     Jurusan: "MIF",
//     alamat: "Jember",
//     umur: 22,
//   },
// ];

// console.log("===== Mulai ====");
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log("===== Selesai ====");

// ===================================================
// Asyncrounous Callback
// GUNANAYA DATA YANG AKAN DI TAMMPIKAN, DATA YANG TERCEPAT

// Ini Menguankan Vanila JS

// function getDataMhs(url, sukses, error) {
//   let data = new XMLHttpRequest();
//   data.onreadystatechange = function () {
//     if (data.readyState === 4) {
//       if (data.status === 200) {
//         sukses(data.response);
//       } else if (data.status === 404) {
//         error();
//       }
//     }
//   };
//   data.open("get", url);
//   data.send();
// }

// console.log("=============== Mulai ===============");

// getDataMhs(
//   "data/mhs.json",
//   (results) => {
//     const parsingData = JSON.parse(results);
//     parsingData.forEach((parsing) => console.log(parsing.alamat));
//   },
//   () => {}
// );

// console.log("=============== Selesai ===============");

// ==========================
// Mengunakan JQUERY

console.log("=============== Mulai ===============");
$.ajax({
  url: "data/mhs.json",
  success: (hasil) => {
    hasil.forEach((h) => console.log(h.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("=============== Selesai ===============");
