// TEMPLATE LITERALS / TEMPLATE STRING

// const nama = 'Ahmat Davit Ari Dani';
// const umur = 34;

// console.log(`Hallo, nama saya ${nama}, saya umur ${umur}`);




//HTML Fargments
const mhs = {
    nama: 'Ahmat Davit Ari Dani',
    nim: 'E31191309',
    alamat: 'Balung',
    umur: 33,
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nim">${mhs.nim}</span>
    <p>${mhs.alamat}</p>
    <p>${mhs.umur}</p>
</div>`;


console.log(el);