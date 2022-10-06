//CARA MEMBUAT oBJECT
//1.Object Literal
// PROBLEM ===> TIDAK EFEKTIF, KARENA JIKA TERDAPAT OBJECK BANYAK 

// let Mahasiswa = {
//     nama: 'Ahmat Davit',
//     energi: 22,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log('Selamat Makan ${this.nama}, Selamat Makan');
//     }
// }



//2,function decalration

// const methodMahasiswa = {
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log('Hallo ${this.nama}, Selamat Makan');
//     },
//     main: function(jam) {
//         this.energi -= jam;
//         console.log('Hallo ${this.nama}, Selamat Bermain');
//     },
//     tidur: function(jam) {
//         this.energi += jam * 2;
//         console.log('Hallo ${this.nama}, Selamat Tidur');
//     }

// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let Davit = Mahasiswa('Davit', 10);
// let Dani = Mahasiswa('Dani', 33);



// MENGUNAKAN METODE PROROTYPE PADA JS
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return 'Halo ${this.nama}, Selamat Makan';
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return 'Halo ${this.nama}, selamt bermain';
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam * 2;
//     return 'halo ${this.nama}, Selamat Tidur';

// }

// let Davit = new Mahasiswa('Davit', 900);



// DENGAN MEMNGGUNAKAN VERSI CLASS

class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return 'Halo ${this.nama}, Selamat Makan';
    }

    main(jam) {
        this.energi -= jam;
        return 'Halo ${this.nama}, selamt bermain';
    }

    tidur(jam) {
        this.energi += jam * 2;
        return 'halo ${this.nama}, Selamat Tidur';
    }
}


let Davit = new Mahasiswa('Davit', 800);
let Dani = new Mahasiswa('Dani', 1000);






//3.Constructor Function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log('Hallo ${this.nama}, Selamat Makan');
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log('Hallo ${this.nama}, Selamat Bermain');
//     }
// }

// let Ahmat = new Mahasiswa('Ahmat', 900);
// let Ari = new Mahasiswa('Ari', 800);







//4.Oject Creat