// 1. HTML Fragment

// const mhs = {
//   nama: "Davit Ari Dani",
//   umur: 22,
//   alamat: "Jember",
// };

// const el = `<div class="mhs">
// 	<h3>Nama ${mhs.nama}</h3>
// 	<p>${mhs.umur}</p>
// 	<p>${mhs.alamat}</p>
// </div>`;

// =============== DENGAN MENGGUNAKAN LOPPING ==================

// 2. Lopping
const mhs = [
  {
    nama: "Davit Ari Dani",
    umur: 22,
    alamat: "Jember",
  },
  {
    nama: "Dimas Saputra",
    umur: 22,
    alamat: "Bandung",
  },
  {
    nama: "Angga Dimas",
    umur: 33,
    alamat: "Lumajang",
  },
];

const el = `<div class="mhs">
	<h3>${mhs
    .map(
      (m) => `<ul>
	 <li>${m.nama}</li>
	 <li>${m.umur}</li>
	 <li>${m.alamat}</li>
	</ul>`
    )
    .join("")}</h3>

</div>`;

document.body.innerHTML = el;
