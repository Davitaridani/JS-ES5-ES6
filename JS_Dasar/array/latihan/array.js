const nama = ["Aldino", "Davit", "Ari", 2, [1, 2, 3]];

const buah = ["Apel", "Pisang", "Nanas", "Jeruk", "Salak"];

const kota = ["Jember", "Lumajang", "Bandung", "Kediri", "Jakarta", "Bali"];

const mhs = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(nama); // => tampilkan isi array
// console.log(nama[4]); // => tampilkan isi array index ke 4
// console.log(nama.length); // => untuk mengecek berapa panjang iisi array
// console.log(nama[1]); // => cetak isi array yang mempuyai index ke 1, arrray di mulai dari 0

// ==========================
// nama.forEach((n) => {
//   console.log(n);
// }); // unutk menampilakn dan melopigg isi array

// kota.forEach((element) => console.log(element));
// ==========================

// ===== indexOf => method  untuk mengetahui posisi index dari array tersebut
// console.log(nama.indexOf("Ari"));
// =======================================

// // ==== Method PUSH => unutk menambahkan ke isi aray
// console.log(buah); // Sebelum  Menambahkan isi array
// var addIsiArray = buah.push("Mangis");
// console.log(buah); // Settlah  isi array di tambahkan dan posisi inndex berada di paling akhir
// console.log(addIsiArray);
// =======================================

// ===== Method POP => unutk menghapus isi array yang terakhir
// let hapusArr = kota.pop();
// console.log(kota);
// console.log(hapusArr); // unutk menemukan array yang di hapus
// =======================================

// // // ===== Method shift() => unutk menghapus isi array pertama
// let hapusArr = buah.shift();
// console.log(buah);
// console.log(hapusArr); // untuk menemukan array yang sudah di hapus
// =======================================

// ===== Method Unshift() => unutk menambahkan array baru dari index ke 0 (Pertama isi array)
// let addUnshift = kota.unshift("Kediri");
// console.log(kota);
// console.log(addUnshift);
// =======================================

// ======= Looping array dengan For Of
// for (const item of buah) {
//   console.log(item);
// }

// for (const element of kota) {
//   console.log(element);
// }
// =======================================

// ======= Looping array dengan For Each hampir sama dengan for of, fore each bisa tampil dengan index arraynya
// kota.forEach((item, index) => {
//   console.log(item, "Index Ke : " + index);
// });

// ==== Methode Concat =>  Untuk mengabungkan array, dan akan mengahasilkan array baru
// const concatArr = buah.concat(mhs);
// console.log(concatArr);

// ===== Spread Opertaor/Spread Syntax => untuk menyalin array, dan mengahasilkan array baru
const copyArr = [...buah];

console.log(copyArr);
