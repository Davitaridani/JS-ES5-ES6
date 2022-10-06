// For Of

// Lopping data Array
const mhs = ["davit", "ari", "dani"];

// Cara mengunakan for
console.log("=============== For ================ ");
for (let i = 0; i < mhs.length; i++) {
  console.log(mhs[i]);
}

console.log("=============== For OF ======================");

// Mengunakan For OF
for (const m of mhs) {
  console.log(m);
}

console.log("=============== Node List ======================");
// Mode List
const listnama = document.querySelectorAll(".nama");

listnama.forEach((n) => console.log(n.innerHTML));

// FOR IN
console.log("=====================================");

const person = {
  nama: "Davit",
  alamat: "Balung Kulon",
  umur: 22,
};

for (p in person) {
  console.log(person[p]);
}
