// mengkap playernya

var tanya = true;
while (tanya) {


    var a = prompt('Pilih : Gajah, Semut, orang ');

    // pilihan komputer
    // membangkitkan bilangan random
    var comp = Math.random();
    // menentukan rules nya
    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }


    var hasil = '';
    if (a == comp) {
        hasil = 'SERI';
    } else if (a == 'gajah') {


        // syntac ini sama dengan kodingan yang di bawahnya
        //     hasil = 'SERI';

        //     if (comp == 'orang') {
        //         hasil = 'MENANG';
        //     } else {
        //         hasil = 'MENANG';
        //     }

        hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';

    } else if (a == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';
    } else if (a == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
    } else {
        hasil = ' Anda Memasukan Pilihan Yang Tidak Sesuai';
    }
    //hasilnya

    alert('Kamu Memilih : ' + a + ' dan Komputer Memilih : ' + comp + '\nMaka Hasilnya Kamu : ' + hasil);

    tanya = confirm('lagi?')
}

alert('Terima Kasih Anda Sudah Bermain');