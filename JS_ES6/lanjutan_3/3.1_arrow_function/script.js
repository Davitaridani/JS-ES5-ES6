//FUNCTION EXPRESSION
// const tampilNama = function(nama) {
//     return 'Hallo, ${nama}';
// }
// console.log(tampilNama('Davit'));



//{INTINYA ARROW FUNCTION DI GUNAKAN UNTUK MEMPERSINGKAN PENULISAN KODE/SYNTACT }


//MENGUNAKAN ARROW FUNCTION (satu parametter, dan)

// const tampilNama = (nama) => { return 'Hallo, Selamat Siang ${nama}'; }

// console.log(tampilNama('Ahmat Davit Ari Dani'));

//IMPLISIT RETURN
// DAN JIKA PARAMTERNYA SATU BISA TANPA MENGUNAKAN KURUNG PADA PARAMETERNYA
// KALAU 2 PARAMTER, HARUS  MENGUNAKAN KURUNG
// BAHKAN BISA TANPA MENULISKAN KEYWORD RETURN DAN TIDAK PERLU  MENGUNAKAN KURUNG KURAWAL
// const tampilNama = (nama) => 'Hallo, Selamat Siang ${nama}';

// console.log(tampilNama('Ahmat Davit Ari Dani'));


// JIKA TANPA PARAMTER WAJIB MENGUNAKAN KURUNG
// const tampilNama = () => 'hello world'
// console.log(tampilNama());


// JIKA MENGUNKAN 2 PARAMETER(nama, waktu)
// const tampilNama = (nama, waktu) => {
//     return 'Selamat ${waktu}, ${nama}';
// }

// console.log(tampilNama('Davit', 'Siang'));






//FUNCTION MAP
// let mhs = ['Ahmat Davit Ari Dani', 'Putri Permatasari', 'Dinda Azani'];

// let jumlahHuruf = mhs.map(function(nama) {
//     return nama.length;
// })

// console.log(jumlahHuruf);



//DENGAN MENGUNAKAN ARROW FUNCTION

// let mhs = ['Ahmat Davit Ari Dani', 'Putri Permatasari', 'Sinta'];

// let jumlahHuruf = mhs.map(nama => nama.length);

// console.log(jumlahHuruf)



//DENGAN MENGEMBALIKAN DALAM BENTUK OBJECT

// let mhs = ['Ahmat Davit Ari Dani', 'Putri Permatasari', 'Dinda Azani Putri'];
// let jumlahHuruf = mhs.map(nama => ({ nama: nama, jumlahHuruf: nama.length }));

// console.table(jumlahHuruf);