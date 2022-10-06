// HIGHER OERDER FUNCTION

const dataAngka = [-2, 4, -4, 5, 8, 9, 10, 3, -3, 5, 7, -9];

// MENGUNAKAN FOR
const newAngka = [];
for (let i = 0; i < dataAngka.length; i++) {
  if (dataAngka[i] >= 3) {
    newAngka.push(dataAngka[i]);
  }
}

console.log(newAngka);

console.log("==========================================");

// DENGEN MENGUNAKAN FILTER

const angka_1 = dataAngka.filter(function (a) {
  return a >= 3;
});

console.log(angka_1);
// ======================================================
console.log("==========================================");

// MAP
// kalikan semua data array diiatas dengan kali 2
// DENGAN  MENGUNNAKAN ARROW FUNCTION
// funcsi map menghasilkan array baru

const angka_2 = dataAngka.map((a) => a * 2);

console.log(angka_2);

// ======================================================
console.log("==========================================");

// REDUCE
// julahkan seluruh data aaray diatas

const angka_3 = dataAngka.reduce((a, b) => a + b);

console.log(angka_3);

// ======================================================
console.log("==========================================");

// METHOD CHAINING

// mencari angka > 5
// dan * 3
// jumlahkan

const hasil = dataAngka
  .filter((a) => a > 5)
  .map((a) => a * 3)
  .reduce((x, y) => x + y);

console.log(hasil);
