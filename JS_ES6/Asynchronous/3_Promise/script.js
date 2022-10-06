// Promise
// => Object yng merepresentasikan keberhasilan atau kegagalan sebuah event ynag asynchronous yang terjadi di masa yang akan datang / Ynag  akan terjadi

// State  (Fullfield / Rejected / Pending)

// Callback( Resolve(Terpenuhi) / Reject(Tidak terpenuhi) / Finally(Seleasi))
// Aksi (Terpenuhi==>Then, Tidak Terpenuhi==>Catch , Finally==> Jika False atau True, maka method Finally akan selalu di jalankan pertama kali)

// ========================= Contoh 1 ==========================

// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji Telah Di Tepati");
//   } else {
//     reject("Janji Tidak Di tepati");
//   }
// });

// janji1
//   .then((response) => console.log("OK : " + response))
//   .catch((response) => console.log("Tidak OK : " + response));

// ========================= Contoh 2 ==========================

let ditepati = true;

const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("Telah Di Tepati Tunggu Beberapa Waktu");
    }, 4000);
  } else {
    setTimeout(() => {
      reject("Tidak Di Tepati");
    }, 4000);
  }
});

console.log("Mulai");

janji2
  .finally(() => console.log("Finallay Selesai"))
  .then((response) => console.log("OK : " + response))
  .catch((response) => console.log("Tidak OK : " + response));

console.log("Selesai");

// ===================================================
// ===================================================
// ===================================================

// ============ PROMISE ALL ============================
// Promise All => ketika mempuyai banyak promise dan mau menjalankan semua nya

// const mhs = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve([
//       {
//         nama: "Ahmat Davit Ari Dai",
//         nim: "E311910390",
//         jurusan: "Teknologi Informasi",
//         alamat: "jember",
//       },
//     ]);
//   }, 5000);
// });

// const dosen = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve([
//       {
//         nama: "Supriadi",
//         nip: 4527423849,
//         alamat: "Surabaya",
//       },
//     ]);
//   }, 3000);
// });

// Promise.all([mhs, dosen])
//   // .then((response) => console.log(response)); // hasilkan akan di gabungkan
//   .then((response) => {
//     const [mhs, dosen] = response; // Spread Opetor => Memecah array dan di simpan ke dalam variabel\
//     console.log(mhs);
//     console.log(dosen);
//   });
