// Spreat Operator
// Memcah Itrables menjadi single elemen

// Guananya untuk mengabuungkan array
const mhs = ["davit", "ari", "dani"];
const dosen = ["p.dimas", "p.aji", "p.sandi"];
const data = [...mhs, ...dosen];

console.log(data);

console.log("==================================");
// bisa juga meng COPY Array
const mobil = ["avanza", "mobilio", "jazz"];
const mobil_2 = [...mobil];
mobil_2[0] = "Pajero";
console.log(mobil_2);
