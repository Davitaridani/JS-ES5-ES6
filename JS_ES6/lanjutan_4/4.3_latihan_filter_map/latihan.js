// ambil elemen semua vidio

const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilh hanya PHP Dasar
let phpDasar = videos.filter(video => video.textContent.includes('PHP Dasar'))


// ambil durasi masing2 vidio
.map(item => item.dataset.duration)


// ubah durasi menjadi interger, lalu ubah menit menjadi detik
.map(waktu => {
    // 10:20 => [10,20] INI NAMANYA DI SPLIT 
    const parts = waktu.split(":").map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
})


// jumlahkan semua detik
.reduce((total, detik) => total + detik);


// ubah formatnya, menjadi jam menit detik
const jam = Math.floor(phpDasar / 3600);
phpDasar = phpDasar - jam * 3600;
const menit = Math.floor(phpDasar / 60);
const detik = phpDasar - menit * 60;


// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;
const jmlVideos = videos.filter(video => video.textContent.includes('PHP Dasar')).length;
const pJmlVideos = document.querySelector('.jumlah-vidio');
pJmlVideos.textContent = `${jmlvideos} Video.`;



console.log(pDurasi)