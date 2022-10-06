// Callback

// Search button card
$(".search-button").on("click", function () {
  // Data Card
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=dca61bcc&s=" + $(".input-keyword").val(),
    success: (hasil) => {
      const movie = hasil.Search;
      let cards = "";

      // Jika Request data berhasil
      movie.forEach((m) => {
        cards += tampilCard(m);
      });
      $(".item-movie").html(cards);

      // Ketika Tombol Button di Klik
      $(".modal-detail-button").on("click", function () {
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=dca61bcc&i=" +
            $(this).data("imdbid"),
          success: (m) => {
            const movieDetail = detailMovie(m);
            $(".modal-body").html(movieDetail);
          },
          error: (err) => console.log(err.responseText), // Jika Request data tidak berhasil /ERROR
        });
      });
    },
    error: (err) => console.log(err), // Jika Request data tidak berhasil /ERROR
  });
});

function tampilCard(m) {
  return `<div class="col-md-3 my-2">
            <div class="card" >
              <img src="${m.Poster}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Judul Film : ${m.Title}</h5>
                <p class="card-text disabled">Tahun : ${m.Year}</p>
                <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#detailModal" data-imdbid="${m.imdbID}">Lihat Detail</a>
              </div>
            </div>
          </div>`;
}

function detailMovie(m) {
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid">
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><h4>${m.Title}</h4></li>
                  <li class="list-group-item"><strong>Released : ${m.Released}</strong></li>
                  <li class="list-group-item"><strong>Genre : ${m.Genre}</strong></li>
                  <li class="list-group-item"><strong>Director : ${m.Director}</strong></li>
                  <li class="list-group-item"><strong>Actors : ${m.Actors}</strong></li>
                </ul>
              </div>
            </div>
          </div>`;
}
