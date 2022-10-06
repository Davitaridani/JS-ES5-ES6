const buah = ["Apel", "Pisang", "Nanas", "Jeruk", "Salak"];
const kota = ["Jember", "Lumajang", "Bandung", "Kediri", "Jakarta"];
const number = [1, 2, 3, 12, 4, 5, 7, 8, 9, -3, -2, 33, 4];

// Filter => Menyaring/menyeleksi
// => Mengembalikann Array baru

const hasil = buah.filter((item) => item.length === 5);
console.log(hasil);
// ================================
const hasil2 = number.filter((item) => item < 3);
console.log(hasil2);
console.log(number);
// ===========================
