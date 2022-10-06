// FOR OF LEBIH TEPATNYA DIGUNAKAN UNTUK ARRAY
// FOR IN DIGUNAKAN UNTUK OBJECT





// For OF

// Mengunakan For Biasa
// const mobil = ['Avanza', 'Xenia', 'Civix', 'Jazz'];

// for (let i = 0; i < mobil.length; i++) {
//     console.log(mobil[i])

// };

// Menggunakan FOREACH Syntac Lebih Pendek
// const mobil = ['Avanza', 'Xenia', 'Civix', 'Jazz'];
// mobil.forEach(mbl => console.log(mbl));


// Mengunakan FOR OF

// const mobil = ['Avanza', 'Xenia', 'Civix', 'Jazz', 'Pajero'];
// for (const mbl of mobil) {
//     console.log(mbl)
// };




// DENGAN MENGUNAKAN STRING
// Meluping Panjang Karakter/(String)

// const nama = 'Ahmat Davit';

// for (const nm of nama) {
//     console.log(nm)
// };




// const mobil = ['Avanza', 'Xenia', 'Civix', 'Jazz', 'Pajero'];
// mobil.forEach((mbl, index) => {
//     console.log((`${mbl} adalah no urutan ke ${index+1}`));
// });



// DENGAN MENGUNNAKAN FOR OF

// const mobil = ['Avanza', 'Xenia', 'Civix', 'Jazz', 'Pajero'];

// for (const [index, mbl] of mobil.entries()) {
//     console.log((`${mbl} adalah no urutan ke ${index+1}`));
// }






// NODELIST

// const liNama = document.querySelectorAll('.nama_mbl');
// MENGUNAKAKN FOREACH
// liNama.forEach(nm => console.log(nm.innerHTML));



// MENGUNAKAN FOR OF
// const liNama = document.querySelectorAll('.nama_mbl');
// for (nm of liNama) {
//     console.log(nm.innerHTML)
// };






// FOR IN

const mahasiswa = {
    nama: 'Ahamt Davit Ari',
    alamat: 'Balung',
    umur: 22
};

for (mhs in mahasiswa) {
    console.log(mahasiswa[mhs]);
}