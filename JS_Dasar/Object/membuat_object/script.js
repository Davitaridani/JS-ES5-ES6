// 1. Object literal

// var mhs1 = {
//   nama: "Ahmat Davit Ari",
//   nim: "E31191309",
//   jurusan: "Teknologi Informasi",
//   umur: 20,
//   alamat: "Balung",
// };

// var mhs2 = {
//   nama: "Sinta Pratiwi",
//   nim: "E31154539",
//   jurusan: "Teknik Mesin",
//   umur: 22,
//   alamat: "Jember",
// };

// console.log(mhs2);
// console.log(`nama saya ${mhs1.nama}, alamat saya ${mhs2.alamat}`);
// =================================================================

// 2. Membuat object dengan function declaration
// function ObjMhs(nama, nim, jurusan, umur, alamat) {
//   let mhs = {};
//   mhs.nama = nama;
//   mhs.nim = nim;
//   mhs.jurusan = jurusan;
//   mhs.umur = umur;
//   mhs.alamat = alamat;
//   return mhs;
// }
// let mhs2 = ObjMhs(
//   "Ahmat Davit ",
//   "E31191309",
//   "Teknologi Informasi",
//   20,
//   "Balung"
// );
// console.log(mhs2);
// console.log(
//   `Nama Saya ${mhs2.nama}, alamat ${mhs2.alamat}, Umur  ${mhs2.umur}`
// );

// let mhs3 = ObjMhs("Sintia Bella", "E37384797", "PPertanian", 22, "Panti");
// console.log(mhs3);
// =================================================================

// =========== 3. Function Cunstructor ============
// function Mahasiswa(nama, nim, jurusan, umur, alamat) {
//   this.nama = nama;
//   this.nim = nim;
//   this.jurusan = jurusan;
//   this.umur = umur;
//   this.alamat = alamat;
// }
// var mhs4 = new Mahasiswa(
//   "Dani Saputra",
//   "E3099283",
//   "Kesehatan",
//   21,
//   "Lumajang"
// );

// console.log(mhs4);
// console.log(`Nama ${mhs4.nama} Alamat ${mhs4.alamat}, Umur ${mhs4.umur}`);
