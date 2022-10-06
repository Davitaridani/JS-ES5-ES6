// Callback
// Syncronous Callbcak

// function sayHello(nama) {
//   alert(`hallo nama saya ${nama}`);
// }

// function myFunct(contohCallback) {
//   const inputNama = prompt("Masukan Nama Anda :");
//   contohCallback(inputNama);
// }

// myFunct(sayHello);

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
//   {
//     nama: "Deni",
//     alamat: "Jember",
//     jurusan: "MIF",
//     umur: 24,
//     idDOsenWali: 1,
//   },
// ];

// console.log("Mulai");
// mhs.forEach((m) => {
//   console.log(m.nama);
// });
// console.log("Selesai");

// =================== Asynchronous Callbcak ============================
//  Memngunakan VANILA JS

function ambilDataMhs(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.responseText);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };
  xhr.open("get", url);
  xhr.send();
}
console.log("Mulai");

ambilDataMhs(
  "data/mahasiswa.json",
  (results) => {
    const mhs = JSON.parse(results);
    mhs.forEach((m) => console.log(m.nama));
  },
  () => {}
);

console.log("Selesai");

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
//   data.open("GET", "data/mahasiswa.json", false);
//   data.send();
// }
