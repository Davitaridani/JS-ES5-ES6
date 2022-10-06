// Promise
// => Object yang merepresentasikan keberhasilan atau kegagalan sebuah event yg asynchronous yang terjadi di masa yang akan datang / yg akan terjadi

// State  (Pending => keadaan awal, tidak terpenuhi atau di tolak  / Fullfield => artinya operasi telah selesai dengan sukses. / Rejected => artinya operasi gagal.)

// Callback( Resolve(Terpenuhi) / Reject(Tidak terpenuhi) / Finally(Seleasi))

// Aksi (Terpenuhi==>Then(sukses), Tidak Terpenuhi==>Catch(error) , Finally==> Jika False atau True, maka method Finally akan selalu di jalankan pertama kali)

// ========================= Contoh 1 ==========================

// let diTepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (diTepati) {
//     resolve("Di Tepati");
//   } else {
//     reject("Ingkar Janji");
//   }
// });

// janji1
//   .then((response) => console.log("OK," + response))
//   .catch((response) => console.log("Tidak OK" + response));

// ========================= Contoh 2 ==========================

// let ditepati = true;
// const myPromise = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Tunggu Dulu Beberapa Waktu");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Tunggu Dulu Beberapa Waktu");
//     }, 2000);
//   }
// });

// console.log("================ Mulai ================");
// myPromise
//   .then((response) => console.log("OK," + response))
//   .catch((response) => console.log("Tidak OK, " + response));
// console.log("================ Selesai ================");

// ===================================================
// ===================================================
// ===================================================

// ============ PROMISE ALL ============================
// Promise All => ketika mempuyai banyak promise dan mau menjalankan semua nya

const mhs = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        nama: "Ahmat Davit ",
        nim: "E311910390",
        jurusan: "Teknologi Informasi",
        alamat: "jember",
      },
      {
        nama: "Ari Dani",
        nim: "E311910390",
        jurusan: "Teknologi Informasi",
        alamat: "jember",
      },
    ]);
  }, 3000);
});

const dosen = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        nama: "Supriadi",
        nip: 4527423849,
        alamat: "Surabaya",
      },
    ]);
  }, 1000);
});

Promise.all([mhs, dosen]).then((response) => {
  const [mhs, dosen] = response; // Spread Opetor => Memecah array dan di simpan ke dalam variabel
  mhs.forEach((m) => {
    console.log(m.nama);
  });
  console.log(response);
});
