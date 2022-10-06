// Async Await
// const data = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Selesai");
//   }, 2000);
// });

// data.then(() => {
//   console.log(data);
// });

function myFunct() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Selesai");
    }, 2000);
  });
}

function cobaAsync() {
  const data = myFunct();
}
