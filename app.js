const API_KEY = `ADjWyZc2f6MLtYnwNtfZanSiEmnJs44i`

async function searchGiphy(query) {
  // TODO: Make an ajax request to the searchShows api.  Remove
  // hard coded data.
  let response = await axios.get("http://api.giphy.com/v1/gifs/search?q=" + query +"&api_key=" + API_KEY);
  return(response.data.data)
}

$("#search-form").on("submit", async function handleSearch (evt) {
  evt.preventDefault();

  let query = $("#search-query").val();
  if (!query) return;

  $("#episodes-area").hide();

  let gif = await searchGiphy(query);
  populateGifs(gif)
});

$("#remove-btn").on("click", async function handleButtonClick (evt) {
    evt.preventDefault();
    const $gifList = $("#gif-list");
    $gifList.empty();
});

function populateGifs(gifs) {
    const $gifList = $("#gif-list");
    for (gif of gifs) {
        console.log(gif)
        let $item = $(
            `<div class="col-md-6 col-lg-3">
                <div class="card">
                    <div class="card-body">
                        <img class="img-fluid card-img-top" src="${gif.images.original.url}">
                    </div>
                </div>
            </div>
            `);
      $gifList.append($item);
    }
}