// mencariangka >= 3

// DENGAN MENGUNAKAN FOR

// const angka = [2, 3, 6, 7, -3, -4, 9, -9, 8, -1];

// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);


//DENGAN MENGUNKAN FILTER 
//(dan kode nya menuslikan dengan arrow funcion untuk mempersingkat kode )

// const angka = [2, 3, 6, 7, -3, -4, 9, -9, 8, -1];
// const angka1 = angka.filter(a => a >= 3);
// console.log(angka1);


// DENGAN MENGUNAKAN MAP
// dengan mengalikan setiap angka yaitu 2


// const angka = [2, 3, 6, 7, -3, -4, 9, -9, 8, -1];
// const angka1 = angka.map(a => a * 2);

// console.log(angka1);


// DENGAN MENGUNAKAN REDUCE
// juamlahkan selururh elemen pada array(angka)
// ANGKA 5 MAKSUDNYA DI TAMBBAH 5
// 2 + 3 + 6 + 7 + -3 + -4 + 9 + -9 + 8 + -1

// const angka = [2, 3, 6, 7, -3, -4, 9, -9, 8, -1];
// const angka1 = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);

// console.log(angka1);



// METHOD CHAINING
// mencari angka yang > 5, kemudian hasilnya di kalikan 3, kemuidan jumlahkan


const angka = [2, 3, 6, 7, -3, -4, 9, -9, 8, -1];
const hasil = angka.filter(a => a > 5) //6,7,9,8
    .map(a => a * 2) //12, 14, 18, 16
    .map(a => a - 10) //2, 4, 8, 6
    .reduce((accumulator, currentValue) => accumulator + currentValue, 5); //25

console.log(hasil);