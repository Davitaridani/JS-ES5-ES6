// membuat object
// 1. Object Literal
var mhs1 = {
  nama: "Ahmat Davit Ari Dani",
  nim: "E32193034",
  jurusan: "Teknologi Informasi",
  alamat: "Jember",
};

var mhs2 = {
  nama: "Bella safitri",
  nim: "A37384922",
  jurusan: "Teknik Industri",
  alamat: "Lumajang",
};

console.log(mhs1);
console.log(mhs1.nama);
// Looping Object
for (const properti in mhs2) {
  console.log(`${properti} : ${mhs2[properti]}`);
}
// ====================================

// 2. Function Deklaration
// function ObjectMahasiswa(nama, nim, jurusan, alamat) {
//     var mahasiswa = {};
// }
