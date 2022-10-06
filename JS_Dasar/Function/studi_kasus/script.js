var penumpang = ["Davit", undefined, "Ari", "Dani"];

var TambahPenumpang = function (namaPenumpang, penumpang) {
  //jika angkot kosong
  if (penumpang == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    //kembalikan isi array dan keluar dari function
    return penumpang;
  } else {
    //telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      //jik ada kursi kosong
      if (penumpang[i] == undefined) {
        //tambah penumpang daari kursi tersebut
        penumpang[i] = namaPenumpang;
        // kembaluukan isi array dan kelura dari function
        return penumpang;
      }
      //jika ada nam yang sama
      //tampilknna pesan kesalahannya
      // kembalikan isi arry dan kelura dari function
      // jika seluruh kursi terisi
      else {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikan isi array dan keluar dari function
        return penumpang;
      }
    }
  }
};
