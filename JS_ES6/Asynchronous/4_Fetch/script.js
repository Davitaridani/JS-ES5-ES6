// Fetch

// ======================= Contoh FETCH ==================
const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=" + inputKeyword.value)
    .then((response) => response.json())
    .then((response) => {
      const film = response.Search;
      let cards = "";
      film.forEach((films) => (cards += tampilCard(films)));
      const filmItems = document.querySelector(".items-film");
      filmItems.innerHTML = cards;

      // Ketika TOmbol Detiail DI  klik
      const modalDetailButton = document.querySelectorAll(
        ".modal-detail-botton"
      );
      modalDetailButton.forEach((itemsBtn) => {
        itemsBtn.addEventListener("click", function () {
          const imdbid = this.dataset.imdbid;
          fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=" + imdbid)
            .then((response) => response.json())
            .then((response) => {
              const filmDetail = tampilDetailFilm(response);
              const modalBody = document.querySelector(".modal-body");
              modalBody.innerHTML = filmDetail;
            });
        });
      });
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

function tampilDetailFilm(filmDetail) {
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src="${filmDetail.Poster}" class="img-fluid">
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><strong>Released : </strong> ${filmDetail.Released}</li>
                  <li class="list-group-item"><strong>Runtime :  ${filmDetail.Runtime}</strong></li>
                  <li class="list-group-item"><strong>Director :  ${filmDetail.Director}</strong></li>
                  <li class="list-group-item"><strong>Actors :  ${filmDetail.Actors}</strong></li>
                  <li class="list-group-item"><strong>Plot :  ${filmDetail.Plot}</strong></li>
                </ul>
              </div>
            </div>
          </div>`;
}
