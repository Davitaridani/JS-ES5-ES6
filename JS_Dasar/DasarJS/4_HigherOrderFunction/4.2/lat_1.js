// Ambil semua elemen
const dataVidio = Array.from(document.querySelectorAll("data-duration"));
// Pilih hanya yang javascript
const jsLanutan = dataVidio
  .filter((vidio) => vidio.textContent("JAVASCRIPT LANJUTAN"))
  // Ambil masing masing durasu vidio
  .map((items) => items.dataset.duration)
  // Ubah menit menjadi detik
  .map((waktu) => {});

// Jumlahkan semua detik

// ubah format menjadi jam, menit, detik

// Simpan DOM

console.log(jsLanutan);
