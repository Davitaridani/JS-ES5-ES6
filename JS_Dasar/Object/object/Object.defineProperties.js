// Object.defineProperties
// ==> mendefinisikan  baru atau memodifikasi properti yang ada secara langsung pada objek, mengembalikan objek.

const obj1 = {};

Object.defineProperties(obj1, {
  property1: {
    value: "Ahmat Davit Ari Dani",
    value: "Jember",
    value: 22,
  },
  property2: {},
});

console.log(obj1);
