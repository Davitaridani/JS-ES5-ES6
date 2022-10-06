// Async Await

// const data = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Selesai");
//   }, 2000);
// });

// data.then(() => {
//   console.log(data);
// });

function myPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 9000;
    if (waktu < 3000) {
      setTimeout(() => {
        resolve("Selesai");
      }, waktu);
    } else {
      reject("Kelamaan");
    }
  });
}

// =======================
// // Cara Biasa
// const coba = myPromise();
// coba.then((coba) => console.log(coba)).catch((coba) => console.log(coba));
// =======================

async function asyncFunct() {
  try {
    const coba = await myPromise();
    console.log(coba);
  } catch (err) {
    console.error(err);
  }
}

asyncFunct();
