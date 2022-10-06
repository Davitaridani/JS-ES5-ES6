//mengunakan cara biasa
// var a = 8;
// var b = 3;
// var volume_A;
// var volume_B;
// var total;

// volume_A = a * a * a;
// volume_B = b * b * b;
// total = volume_A + volume_B;

// console.log(total);

// ===============================================
// melakukan penjumlahan dengan mengnunakan kubus
// function jumlahVolumeDuaKubus(a, b) {
//   volume_A = a * a * a;
//   volume_B = b * b * b;
//   total = volume_A + volume_B;
//   return total;
// }

// console.log(jumlahVolumeDuaKubus(8, 3));
// console.log(jumlahVolumeDuaKubus(10, 3));
// console.log(jumlahVolumeDuaKubus(1, 2));
// ===============================================

// // ==================== Cakupan/GLOBAL =============
// const num1 = 20;
// const num2 = 3;
// const nama = "Davit";

// This function is defined in the global scope
// function kalikan() {
// return num1 * num2;
// }
// console.log(kalikan());
// ===============================================

// // A nested function example
// function getScore() {
//   const num1 = 2;
//   const num2 = 3;
//   const nama = "Ari Dani";
//   function add() {
//     return `${nama} Nilai ${num1 + num2}`;
//   }
//   return add();
// }
// console.log(getScore());
// ===============================================

// ===================== ARGUMENTS OBJECT =====================
// function sayHello(param) {
//   let hasil = "";

//   for (let i = 0; i < arguments.length; i++) {
//     hasil += arguments[i] + param;
//   }
//   return hasil;
// }

// console.log(sayHello("Ahmat ", "Davit", "Ari"));
// =============================

// =============================
// function multiply(a, b) {
//   b = typeof b !== "undefined" ? b : 1;
//   return a * b;
// }

// console.log(multiply(5)); // 5
