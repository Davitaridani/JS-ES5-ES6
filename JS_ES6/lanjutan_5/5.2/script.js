// 1. HTML Fragment

// const mhs = {
//     nama: 'Ahmat Davit Ari Dani',
//     nim: 'E31191309',
//     umur: 22,
//     alamat: 'Balung',
// };

// const el = `<div class="mhs">
//     <h3>${mhs.nama}</h3>
//     <span class="nim">${mhs.nim}</span>
// </div>`;

// document.body.innerHTML = el;





// 2. Looping

// const mhs = [{
//         nama: 'Ahmat Davit Ari Dani',
//         nim: 'E31191309',
//         alamat: 'Balung'
//     }, {
//         nama: 'Dodi Dermawan',
//         nim: 'E31194505',
//         alamat: 'Mangli'
//     }, {
//         nama: 'Putri Permatasari',
//         nim: 'E31191345',
//         alamat: 'Panti'
//     },
//     {
//         nama: 'Intan Sari',
//         nim: 'E31191343',
//         alamat: 'Sumberbaru'
//     },
// ];

// const el = `<div class="mhs">
//     <h2>Daftar mahasiswa</h2>
//     ${mhs.map(m =>`<ul>

//         <li>${m.nama}</li>
//         <li>${m.nim}</li>
//         <li>${m.alamat}</li>

//     </ul>`).join(' ')}

// </div>`

// document.body.innerHTML = el;


// 3. Pengkondisian

// const lagu = {
//     judul: 'Cobalah Mengerti',
//     penyani: 'Noah',
//     featuring: 'lukman'
// };


// const elemen = `<div class="lagu">
// <h3>Lagu Lagu Indonesai</h3>
//     <ul>
//         <li>${lagu.judul}${lagu.featuring ? ` (featuring.${lagu.featuring})`: ''}</li>
//         <li>${lagu.penyani}</li>
//     </ul>
// </div>`;

// document.body.innerHTML = elemen;


// 4. Nested (HTML Fragments Bersarang)

const siswa = {
    nama: 'Ahmat  Davit Ari Dani',
    semester: 2,
    alamat: 'Balung Kulon',
    mapel: [
        'Bahasa Indonesia',
        'Matematika',
        'Bahasa Jawa',
        'Sejarah Indonesia',
        'Bahasa Inggris',
        'Fisika',
        'Kimia'
    ]
};


function cetakMataPelajaran(mapel) {
    return `
    <ol>


    ${mapel.map(mp => `<li>${mp}</li>`).join('')}


    </ol>
    `;
}


const elemen = `<div class="siswa">

    <h2>${siswa.nama}</h2>
    <p class="semester">Semester : ${siswa.semester}</p>
    <p class="alamat">Alamat : ${siswa.alamat}</p>
    <h5>Mata Pelajaran</h5>
    ${cetakMataPelajaran(siswa.mapel)}

</div>`;


document.body.innerHTML = elemen;