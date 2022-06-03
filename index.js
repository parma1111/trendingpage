async function serchMovies() {
    try {

        let response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=036f71ef773319a577e4e3c4607c7632`
        );
        let data = await response.json();
        console.log("data:", data);
        showmovie(data.results)
    } catch (error) {
        console.log("error", error)
    }

}

serchMovies()
let maindiv = document.getElementById('container');

function showmovie(data) {
    data.map(({
        original_title,
        poster_path,
        release_date,
        vote_average,
        overview
    }) => {
        let div = document.createElement("div");
        let poster = document.createElement("img");
        let title = document.createElement("h2");
        let release = document.createElement("h3");
        let rating = document.createElement("h3");


        rating.innerText = vote_average
        title.innerText = original_title;
        poster.src = `https://image.tmdb.org/t/p/w500${poster_path}`;
        release.innerText = release_date;

        div.append(poster, title, release, rating);
        maindiv.append(div);

    })
}