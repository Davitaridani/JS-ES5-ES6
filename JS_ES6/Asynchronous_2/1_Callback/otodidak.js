// // Callback Otodiak
// // Synchronous Callback
// function sayHello(nama) {
//   alert(`Hallo ${nama}`);
// }

// function inputNama(callback) {
//   const namaAnda = prompt("Masukan Nama Anda :");
//   callback(namaAnda);
// }

// inputNama(sayHello);

// ============================ Contoh 2 =============================

// function doStep1(init, callback) {
//   const result = init + 1;
//   callback(result);
// }

// function doStep2(init, callback) {
//   const result = init + 2;
//   callback(result);
// }

// function doStep3(init, callback) {
//   const result = init + 3;
//   callback(result);
// }

// function doOperation() {
//   doStep1(0, (result1) => {
//     doStep2(result1, (result2) => {
//       doStep3(result2, (result3) => {
//         console.log(`result: ${result3}`);
//       });
//     });
//   });
// }

// doOperation();

// ================= Contoh 3 AJAX ==================
// Sacara Asynchronous

// console.log("Mulai");
// function cetak() {
//   console.log(this.responseText);
// }

// console.log("Selesai");

// const dataAjax = new XMLHttpRequest();

// dataAjax.addEventListener("load", cetak);
// dataAjax.open("GET", "data/mahasiswa.json", false);
// dataAjax.send();
