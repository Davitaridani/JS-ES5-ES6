// Spread Operator => Memecah iterebles menjadi single elemen


// Mengabungkan Array
// const mhs = ['Davit', 'Dina', 'Sinta', 'Ari'];
// const guru = ['Intan', 'Jamari', 'Anis', 'Suyono'];
// const gabungkan = [...mhs, ...guru];

// console.log(gabungkan);



const liMhs = document.querySelectorAll('li');
const mhs = [...liMhs].map(m => m.textContent);

console.log(mhs);