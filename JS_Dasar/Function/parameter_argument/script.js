// function tambah(a, b) {

//     return a + b;
// }

// function perkalian(c, d) {
//     return c * d;

// }

// var hasil = perkalian(tambah(5, 10), tambah(40, 20));

// alert(hasil);

// arguments
// argumen beda denngan arguments
function tambah() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}
var coba = tambah(10, 9, 1, 30);
console.log(coba);
