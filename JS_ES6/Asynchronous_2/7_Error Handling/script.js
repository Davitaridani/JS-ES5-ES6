// ======================== Error Handling =====================
const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", async function () {
  try {
    const inputKeyword = document.querySelector(".input-keyword");
    const movies = await getMovie(inputKeyword.value);
    updateTampilan(movies);
  } catch (err) {
    alert(err);
  }
});

function getMovie(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=" + keyword)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      if (response.Response === "false") {
        throw new Error(response.Error);
      }
      return response.Search;
    });
}

function updateTampilan(movies) {
  let cards = "";
  movies.forEach((m) => (cards += tampilCard(m)));
  const itemsMovie = document.querySelector(".item-movie");
  itemsMovie.innerHTML = cards;
}

// EVENT BINDING
document.addEventListener("click", async function (element) {
  if (element.target.classList.contains("modal-detail-button")) {
    const imdbid = element.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateTampilanDetail(movieDetail);
  }
});

function getMovieDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=dca61bcc&i=" + imdbid)
    .then((response) => response.json())
    .then((m) => m);
}

function updateTampilanDetail(m) {
  const movieDetail = detailMovie(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}

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
  return ` <div class="container-fluid">
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
