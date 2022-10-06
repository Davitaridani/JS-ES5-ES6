//memanipulasi array

// 1. Menambah array

var nama = [];
nama[0] = "Davit";
nama[1] = "Dimas";
nama[2] = "Silfi";
nama[3] = "Sinta";
nama[4] = "Putra";
nama[5] = "Eko";

const mhs = ["Dani", "Dimas", "Royan", "Candra", "yoga"];

const kota = ["Jember", "Bali", "Bandung", "Jakarta", "Kediri", "Jombang"];

// ================ Cetak Array ====================
// console.log(mhs);
// console.log();
// ===============================

// 2. ========= Menghapus isi array ===========
// var nama = ["Dimas", "Eko", "Yanto", "Prasetyo"];
// ===============================

// nama[0] = undefined;
// console.log(nama);

// 3. menampilkan dan looping isi array
// for (let a = 0; a < mhs.length; a++) {
//   console.log("Mahasiswa Ke-" + (a + 1) + " : " + mhs[a]);
// }

//Method pada array

// 1. join
// fungsi join digunakan untuk megabungkan alemen pada array
// console.log(mhs.join(", "));
// =========================

// 2. Push
// funsgi push digunakan untuk menambhakan elemen pada array, yang di mulai dari yang terakhir dan menghasilkan array baru
// const pushArr = mhs.push("Zaenal", "Salsa");
// console.log(mhs);
// console.log(pushArr);
// =========================

// 3.POP
// fungsi pop di gunakan untuk menghilangkan elemen pada array yang di mulai dari belakang(elemen terakhir)
// const popArr = mhs.pop();
// console.log(popArr);
// console.log(mhs);
// =========================

// 4. unshift
// fungsi unshift di gunakan untuk menambahkan elemen pada array,  yang di mulai dari yang pertama

// nama.unshift("Dedi");
// console.log(nama.join(' '));

// 5. Shift
// digunakan untuk menghilangkan elemen pada array yang di mulai dari element pertama

// var nama = ["Davit", "Dani", "Sinta", "Reni"];

// nama.shift();
// console.log(nama.join(' '));

// 6. slice

// var nama = ["Davit", "Dani", "Sinta", "Reni", "Sindi", "Firman"];
// var nama2 = nama.slice(1, 6);
// console.log(nama2.join('  '));

// 7. Foreach

// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var nama = ["Davit", "Dani", "Sinta", "Reni", "Sindi", "Firman", "Dinda", "Bala"];
// for (var i = 0; i < nama.length; nama++) {
//     console.log(nama)

// }

// for bida di gantikan dengan foreeach

// nama.forEach(function(elemen) {
//     console.log(elemen)

// });

// 8. Map => Map Mengghasilkan array abru
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var angka2 = angka.map(function(elemen) {
//     return elemen * 2;
// })
// console.log(angka2.join(' '))

// 9. Sort
// digunkaan untuk mengurutkan
// var angka = [2, 1, 3, 4, 5, 7, 20, 30, 90, 8, 9, 6];
// console.log(angka.join(' ')) //sebelum menggunakan sort

// angka.sort();
// console.log(angka.join(' ')) //sesudah mengunakan sort, mengurutkan berdasarkan karakter

// angka.sort(function(a, b) {
//     return a - b;
// });
// console.log(angka.join(' ')) // tapi jika mengunakan function, akan mengurutkan sesuai nilai/jumlahnya

// 10. Filter
//digunakkan untuk mencari nilai, dan akan megembalikan pada array
// var angka = [2, 1, 3, 4, 5, 5, 7, 20, 30, 90, 8, 9, 6];

// var angka2 = angka.filter(function(elemen) {
//     return elemen < 7;
// })

// console.log(angka2.join(' '))
