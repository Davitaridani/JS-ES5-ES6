// CALLBACK

//Synchrounous Callback

// function hallo(nama) {
//     alert(`Hallo, Nama Saya ${nama}`)
// }

// function tampilPesan(callback) {
//     const nama = prompt('Masukan Nama : ');
//     callback(nama);
// }

// tampilPesan(hallo);




// Synchrounous Callback

// const mahasiswa = [{
//     "nama": "Ahmat Davit Ari Deni",
//     "NIM": "E331191309",
//     "alamat": "Balung",
//     "jurusan": "Manajemen Informatika",
//     "idDosenWali": 1

// }, {
//     "nama": "Dimas Saputra",
//     "NIM": "E331999",
//     "alamat": "Panti",
//     "jurusan": "Agirbisni",
//     "idDosenWali": 2

// }, {
//     "nama": "Sinta Permatasi",
//     "NIM": "E33422282",
//     "alamat": "Malang",
//     "jurusan": "Sistem Informasi",
//     "idDosenWali": 3

// }, {
//     "nama": "Dinta Azani",
//     "NIM": "E33134242",
//     "alamat": "Lumajang",
//     "jurusan": "Manajemen",
//     "idDosenWali": 4

// }];

// console.log('=== Mulai ===');
// mahasiswa.forEach(mhs => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(mhs.nama)
// });
// console.log('=== Selesai ===');






// Asynchrounous Callback

// HARUS DI JALAN KAN DI SERVER ATAU BISA DI (LIVE SERVER) PADA FILE HTML
// Ini Mengunakan vanila JS/ JS murni 

// function getDataMahasiswa(url, success, error) {

//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('=== Mulai ===');
// getDataMahasiswa('data/mahasiswa.json', hasil => {
//     const mhs = JSON.parse(hasil);
//     mhs.forEach(mhsw => console.log(mhsw.nama));
// }, () => {});

// console.log('=== Selesai ===');





// Dengan JQuery

console.log('=== Mulai ===');

$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (eror) => {
        console.log(eror.response.Text);
    }
});


console.log('=== Selesai ===');