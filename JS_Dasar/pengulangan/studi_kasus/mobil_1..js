var jml_Mobil = 10;
var mbl_Beroperasi = 5;
var no_Mobil = 1;


while (no_Mobil <= mbl_Beroperasi) {
    console.log('Mobil No. ' + no_Mobil + ' beroperasi dengan baik');
    no_Mobil++;
}

for (no_Mobil = mbl_Beroperasi + 1; no_Mobil <= jml_Mobil; no_Mobil++) {
    console.log('Mobil No. ' + no_Mobil + ' sedang tidak beroperasi');
}