// REST PAREMETER

// function myFunc(a, b, ...argum) {
//     //  return `nilai a ${a}, Nilai b ${b}, dan Nilai Selnutnya ${argum}`;
// };

// console.log(myFunc(1, 2, 3, 4, 5, 6, 7));


// JUGA BISA DENGAN SEPERTI DI BAHWAH INI, dan berbrntuk array:

// function myFunc(...argum) {
//     return `Nilainya adalah ${argum}`;
// };

// console.log(myFunc(1, 2, 3, 4, 5, 6, 7));


// mengubah ke array dengan keyword(kata kunci) from


// function myFunc() {
//     return Array.from(arguments);
// };

// console.log(myFunc(1, 2, 3, 4, 5, 6, 7));





// COBA SEDNIRI


// Penjumlahan dengan for 
// function penjumlahan(...angka) {
//     let total = 0;
//     for (const ank of angka) {
//         total += ank;
//     }
//     return total;
// };

// console.log(penjumlahan(10, 5, 90, 80, 20));



// Penjumlahan Dengan reduce
// ppenulisan syctact lebbih simpel/pendek

// function penjumlahan(...angka) {
//     return angka.reduce((a, b) => a + b);
// };

// console.log(penjumlahan(10, 5, 90, 80, 20));



// ARRAY Detructuring

// const kelompok1 = ['Davit', 'Ari', 'Feby', 'Riski', 'Dina'];
// const [ketua, wakil, ...anggota] = kelompok1;

// console.log(`Ketua dari kelompok1 adalah ${ketua} dan wakilnya adalah ${wakil}`);
// console.log(`Dang lainnya ${anggota.join(' ')} anggota.`);



// Detructuring Object

const team = {
    manajer: 'Davit',
    project_manajer: 'Ari',
    front_end1: 'Nando',
    front_end2: 'Sinta',
    ui: 'Riski',
    devOps: 'Dimas',
};

const { manajer, ...myteam } = team;
console.log(manajer);
console.log(myteam);