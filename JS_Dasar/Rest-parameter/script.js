function sayHello(param1, ...lainnya) {
  return lainnya.map((lain) => param1 * lain);
}
const arr = sayHello(1, 20, 3, 5);

console.log(arr);
