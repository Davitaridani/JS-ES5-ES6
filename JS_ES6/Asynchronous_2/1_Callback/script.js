// Callback
// ============================================================
// code Berjalan secara Syncrounus

// const mhs = [
//   {
//     nama: "Ahmat Davit Ari Dani",
//     alamat: "Jember",
//     jurusan: "MIF",
//     umur: 22,
//     idDOsenWali: 1,
//   },
//   {
//     nama: "Fitri",
//     alamat: "Lumajang",
//     jurusan: "TIF",
//     umur: 23,
//     idDOsenWali: 2,
//   },
//   {
//     nama: "Dimas",
//     alamat: "Jember",
//     jurusan: "TKK",
//     umur: 32,
//     idDOsenWali: 3,
//   },
// ];

// Berjalan Dengan Syncrhonous
// console.log("Mulai");
// // mhs.forEach((m) => console.log(m)); // Akan Melopping Object nya
// mhs.forEach((m) => console.log(m.nama)); // Akan Melopping isi Obbject nya => nama
// console.log("Selesai");

// =================== Asynchronous Callbcak ============================
//  Memngunakan VANILA JS

function getDataMhs(url, success, error) {
  let myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = function () {
    if (myRequest.readyState === 4) {
      if (myRequest.status === 200) {
        success(myRequest.response);
      } else if (myRequest.status == 404) {
        error(myRequest.responseText);
      }
    }
  };
  myRequest.open("GET", url);
  myRequest.send();
}

console.log("===== Mulai ======");
getDataMhs(
  "data/mahasiswa.json",
  (hasil) => {
    const dataMhs = JSON.parse(hasil);
    dataMhs.forEach((m) => console.log(m.nama));
    // console.log(dataMhs);/
  },
  (error) => console.log(error)
);
console.log("===== Selesai ======");

// // ========================== Mengunakan JQuery ======================

// console.log("Mulai");

// $.ajax({
//   url: "data/mahasiswa.json",
//   success: (mhs) => {
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   error: (err) => {
//     console.log(err.responseText);
//   },
// });

// console.log("Selesai");

// =================== Asynchronous Callbcak ============================
//  Memngunakan VANILA JS Coba Lagi yang ke 2

// function ambilDataMsh(url, success, error) {
//   let data = new XMLHttpRequest();

//   data.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status === 200) {
//       success(this.response);
//     } else if (this.status === 404) {
//       error();
//     }
//   };
//   data.open("GET", "data/mahasiswa.json");
//   data.send();
// }

// console.log("===== Mulai =====");

// ambilDataMsh(
//   "data/mahasiswa.json",
//   (results) => {
//     const resultMhs = JSON.parse(results);
//     resultMhs.forEach((mhs) => console.log(mhs.nama));
//   },
//   (err) => {
//     console.log(err.response);
//   }
// );

// console.log("===== Selesai =====");
