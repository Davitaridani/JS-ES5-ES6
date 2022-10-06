var jml_Mobil = 10;
var mbl_Beroperasi = 6;



for (var no_Mobil = 1; no_Mobil <= jml_Mobil; no_Mobil++) {

    if (no_Mobil <= mbl_Beroperasi && no_Mobil !== 5) {
        console.log('Mobil No. ' + no_Mobil + ' Beroperasi Dengan Baik');

    } else if (no_Mobil === 8 || no_Mobil === 10 || no_Mobil === 5) {
        console.log('Mobil No. ' + no_Mobil + ' Sedang Lembur')
    } else {
        console.log('Mobil No. ' + no_Mobil + ' Sedang Tidak Beroperasi')
    }

}