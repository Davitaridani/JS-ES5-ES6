// Callback

$(".search-button").on("click", function () {
  $.ajax({
    url:
      "http://www.omdbapi.com/?apikey=dca61bcc&s=" + $(".input-keyword").val(),
    success: (results) => {
      const film = results.Search; // unutk menjadikan data object dalam arrat

      let cards = "";
      film.forEach((film) => {
        cards += tampilCard(film);
      });
      $(".items-film").html(cards);

      // Ketika tombol detail di klik, muncul data berdarakan di Film
      $(".modal-detail-botton").on("click", function () {
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=dca61bcc&i=" +
            $(this).data("imdbid"),
          success: (dataDetail) => {
            const detailFilm = tampilDetailFilm(dataDetail);
            $(".modal-body").html(detailFilm);
          },
          error: (err) => console.log(err),
        });
      });
    },
    error: (err) => console.log(err),
  });
});

function tampilCard(film) {
  return `<div class="col-md-4 my-4">
            <div class="card" >
              <img src="${film.Poster}" class="card-img-top" >
              <div class="card-body">
                <h5 class="card-title">${film.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${film.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-botton" data-bs-toggle="modal" data-bs-target="#detailModal" data-imdbid="${film.imdbID}">Lihat Detail</a>
              </div>
            </div>
          </div>`;
}

function tampilDetailFilm(dataDetail) {
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src="${dataDetail.Poster}" class="img-fluid">
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><strong>Released : </strong> ${dataDetail.Released}</li>
                  <li class="list-group-item"><strong>Runtime :  ${dataDetail.Runtime}</strong></li>
                  <li class="list-group-item"><strong>Director :  ${dataDetail.Director}</strong></li>
                  <li class="list-group-item"><strong>Actors :  ${dataDetail.Actors}</strong></li>
                  <li class="list-group-item"><strong>Plot :  ${dataDetail.Plot}</strong></li>
                </ul>
              </div>
            </div>
          </div>`;
}
