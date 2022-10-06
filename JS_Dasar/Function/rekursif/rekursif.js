function tampilangka(a) {
  if (a === 3) {
    return;
  }

  console.log(a);
  return tampilangka(a - 1);
}

tampilangka(20);
