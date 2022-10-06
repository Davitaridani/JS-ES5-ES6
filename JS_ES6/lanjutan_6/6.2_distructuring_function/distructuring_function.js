//Distructuring Function


// Dalam Bentuk Array
// Kalau Arrray Mengarah pada urutan/posisi

// function kalkulasi(a, b) {
//     return [a + b, a / b, a * b, a - b];

// };

// const [jumlah, bagi, kali, kurang = 'Nilainya tidak ada'] = kalkulasi(100, 15);

// console.log(jumlah);
// console.log(bagi);
// console.log(kali);
// console.log(kurang);


// Dalam Bentuk Object
// kalau Object Mengarah Pada Nama Properti/key meskipun urutan kebalik gak masalah
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         bagi: a / b,
//         kali: a * b
//     }
// }

// const { tambah, kali, bagi, kurang } = kalkulasi(150, 25);

// console.log(kurang);
// console.log(bagi);
// console.log(kali);
// console.log(tambah);




// DESTRUCTURING FUNCTION ARGUMENTS

// Cara Tanpa DESTRUCTURING

// const mhs = {
//     nama: 'Ahmat Davit Ari Dani',
//     alamat: 'Balung',
//     umur: 22
// };

// function cetakNama(nama, alamat) {
//     return `Hallo, Saya ${nama}, dan saya tinggal di ${alamat}`;
// };

// console.log(cetakNama(mhs.nama, mhs.alamat));




// DENGAN MENGUANAkAN DESTRUCTURING

const mhs = {
    nama: 'Ahmat Davit Ari Dani',
    alamat: 'Balung',
    umur: 22,
    nilai: {
        harian: 90,
        tugas: 79,
        uts: 86,
        uas: 78
    }
};

function cetakNama({ nama, alamat, nilai: { harian, tugas, uts, uas } }) {
    return `Hallo, Saya ${nama}, dan saya tinggal di ${alamat}, dan nilai uas saya adalah ${uas}.   `;
};

console.log(cetakNama(mhs));