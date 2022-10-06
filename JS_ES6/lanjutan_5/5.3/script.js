// Tagged Templade
const nama = 'Ahmat Davit Ari Dani';
const umur = 22;
const alamat = 'Balung';


function coba(test, ...valuenya) {
    // let hasil = '';
    // test.forEach((str, i) => {
    //     hasil += `${str}${valuenya[i] || ''}`;
    // });
    // return hasil;



    //DENGAN CARA REDUCE
    return test.reduce((hasil, str, i) => `${hasil}${str}${valuenya[i] || ''}`, '');
}

const str = coba `hallo nama saya ${nama}, saya tingal di ${alamat}, dan saya umur ${umur}.`;

console.log(str);