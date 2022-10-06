// ================= Contoh 1 AJAX ==================
// erjalan Sacara Asynchronous
// Mengambil data object dari data json

// console.log("Mulai");
// function cetak() {
//   console.log(this.responseText);
// }

// console.log("Selesai");

// const data = new XMLHttpRequest();

// data.addEventListener("load", cetak);
// data.open("GET", "data/mahasiswa.json", false);
// data.send();

// = ====================== Contoh 2 =====================
// XMLHttpRequest.readyState

// const xhr = new XMLHttpRequest();
// console.log("UNSENT", xhr.readyState); // readyState  0

// xhr.open("GET", "data/mahasiswa.json", true);
// console.log("OPENED", xhr.readyState); // readyState  1

// xhr.onprogress = () => {
//   console.log("LOADING", xhr.readyState); // readyState  3
// };

// xhr.onload = () => {
//   console.log("DONE", xhr.readyState); // readyState  4
// };

// xhr.send(null);

// ======================= Contoh 3 =====================
// responseText

// const data3 = new XMLHttpRequest();

// data3.open("GET", "data/mahasiswa.json", true);

// data3.onload = () => {
//   if (data3.readyState === data3.DONE) {
//     if (data3.status === 200) {
//       console.log(data3.response);
//       console.log(data3.responseText);
//     }
//   }
// };

// data3.send();
