import { URL_overview, URL_image, URL_website } from "./parameters";
import Axios from "axios";
import { overviewdiv } from ".";



export function initOverview() {
    Axios.get(URL_overview)
        .then(function(response) {
            for (var i = 0; i < response.data.results.length; i++) {
                var movieObject = response.data.results[i];
                var posterURL = URL_image + "w342" + movieObject.poster_path;
                overviewdiv.innerHTML +=
                    `
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <div class="card">
                        <img src=${posterURL} class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${movieObject.title}</h5>
                            <p class="card-text">Score: ${movieObject.vote_average}</p>
                            <p class="card-text">Release Date: ${movieObject.release_date}</p>
                            <a href="${URL_website + "?movie=" + movieObject.id}" class="btn btn-primary">Movie Detail</a>
                        </div>
                    </div>
                </div>
            `;
                console.log(movieObject);
            }
        });
}