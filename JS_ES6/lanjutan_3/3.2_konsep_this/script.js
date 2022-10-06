//KONSEP THIS PADA ARROE FUNCTION


//Constructor function
// const Mahasiswa = function() {
//     this.nama = 'Ahmat Davit',
//         this.umur = 22,
//         this.alamat = 'Balung'
//     this.hello = function() {
//         console.log('Hallo, nama saya ${nama}, dan saya umur ${umur}, dan saya tingal di ${alamat}');

//     }
// }

// const mhs = new Mahasiswa();



// Arrow Function
// const Mahasiswa = function() {
//     this.nama = 'Ahmat Davit',
//         this.umur = 22,
//         this.alamat = 'Balung'
//     this.hello = () => {
//         console.log('Hallo, nama saya ${nama}, dan saya umur ${umur}, dan saya tingal di ${alamat}');

//     }
// }

// const mhs = new Mahasiswa();



//OBBJECT LITERAL 
// (ARROW FUNCTION TIDAK BISA MENGUNAKAN KEYWORD THIS)

// const mhs1 = {
//     nama: 'Ahmat Davit Ari ',
//     umur: 20,
//     alamat: 'Balung',
//     hello: function() {
//         console.log('Hallo, nama saya ${nama}, dan saya umur ${umur}, dan saya tingal di ${alamat}');
//     }
// }




// Constructor function
// const Mahasiswa = function() {
//     this.nama = 'Ahmat Davit',
//         this.umur = 22,
//         this.alamat = 'Balung'
//     this.hello = function() {
//         console.log('Hallo, nama saya ${nama}, dan saya umur ${umur}, dan saya tingal di ${alamat}');
//     }


//     setInterval(() => {
//         console.log(this.umur++)
//     }, 1000);
// }

// const mhs = new Mahasiswa();






const box = document.querySelector('.box');
box.addEventListener('click', function() {
    this.classList.toggle('size');
    setTimeout(() => {

        this.classList.toggle('caption');

    }, 600);
});