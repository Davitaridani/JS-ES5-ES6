// Distructuring Variabel /Assignment


// =====Distructuring Pada Array ======

// const nomer = ['Satu', 'Dua', 'Tiga', 'Empat', 'Lima'];
// // const [a, b, c, d, e] = nomer; //MENAMPILKAN SEMUA ISI ARRAY
// const [a, b, , , e] = nomer; // TIDAK MENAMPILKAN ISI ITEM APADA ARRAY, DENGAN CATATAN KOMA (,) HARUS ADA

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);


// SWAP ITEMS 

// let a = 100;
// let b = 200;
// // sebelum di tuker
// console.log(a);
// console.log(b);

// console.log('==========');


// [a, b] = [b, a];
// // sesudah di tuker/swap
// console.log(a);
// console.log(b);


// RETURN VALUE PADA ARRAY

// function coba() {
//     return [1, 2, 3];
// }

// const [a, b, c] = coba();

// console.log(a)
// console.log(c)
// console.log(b)


// REST PARAMETER

// const [a, ...valuenya] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(a);
// console.log(valuenya);





// === BAGIAN OBJECT ====


// Cara Biasa
// const mhs = {
//     nama: 'Ahmat Davit Ari',
//     alamat: 'Balung',
//     status: 'Mahasiswa'
// };

// const { nama, alamat, status } = mhs;

// console.log(nama);
// console.log(alamat);
// console.log(status);



//Assigment Tanpa Deklarasi Object

// ({ nama, alamat, status } = {
//     nama: 'Ahmat Davit Ari',
//     alamat: 'Balung',
//     status: 'Mahasiswa'
// });

// console.log(nama);
// console.log(alamat);
// console.log(status);



// Assigment ke Variabel Baru

// const nama = {
//     nama: 'Ahmat Davit Ari',
//     alamat: 'Balung',
//     status: 'Mahasiswa'
// };


// const { nama: nm, alamat: al, status: st } = nama;

// console.log(nm);
// console.log(al);
// console.log(st);




// MEMBERIKAN DEFAULT VALUE
// const nama = {
//     nama: 'Ahmat Davit Ari',
//     alamat: 'Balung',
//     status: 'Mahasiswa',
//     umur: 22
// };


// const { nama: nm, alamat: al, status: st, umur: um = '100' } = nama;

// console.log(nm);
// console.log(al);
// console.log(st);
// console.log(um);


// DENGAN MENGUNAKAN REST PARAMETER (tapi Bentuknya Object)

// const mhs = {
//     nama: 'Ahmat Davit Ari',
//     alamat: 'Balung',
//     status: 'Mahasiswa',
//     umur: 22
// };


// const { nama, ...valuenya } = mhs;

// console.log(valuenya);



// MENGAMBIL FIELD PADA OBJECT, SETELAH DKIRIM SEBAGAI PARAMETER UNTUK FUNCTION

const mhs = {
    id: 12321,
    nama: 'Ahmat Davit Ari',
    alamat: 'Balung',
    status: 'Mahasiswa',
    umur: 22
};

function getIdMhs({ id }) {
    return id;
};



console.log(getIdMhs(mhs));