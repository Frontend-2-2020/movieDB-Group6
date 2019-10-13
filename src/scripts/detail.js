import { URL_detail } from './parameters';
import { API_key } from './parameters';
import Axios from 'axios';
import { detailContainer } from ".";


export function initDetail(movieid) {
    //gegevens uit de epi gaan ophalen
    Axios.get(URL_detail + movieid + "?api_key=" + API_key)
        .then(function(response) {

            //gegevens opslaan in een dataobject 
            let dataObject = response.data;
            let productionCompanies = dataObject.production_companies;
            let backdrop = 'https://image.tmdb.org/t/p/w1280/' + dataObject.backdrop_path;
            let poster = 'https://image.tmdb.org/t/p/w300/' + dataObject.poster_path;


            //html opvullen + gebruik maken van data in het dataobject
            detailContainer.innerHTML +=
                `
                <div class="d-flex justify-content-between bg-dark p-4">
                    <div class="Title p-1 mb-2 h-auto">
                        <h3 class="text-white">${dataObject.title}</h3>      
                        <p class="text-warning">Release Date: <span class="text-white">${dataObject.release_date}</span></p>
                    </div>
                     <div class="p-3 mb-2">
                        <h3 class="text-warning">Score: <span class="text-white small">${dataObject.vote_average}/10</span></h3>
                    </div> 
                </div>
                <div class="jumbotron jumbotron-fluid" style="background: url(${backdrop});background-size: cover; height: auto">
                    <div class="d-flex justify-content-around h-100">
                        <img src="${poster}" class="img-fluid img-thumbnail h-100">
                    <div class="w-50 p-3">
                    <blockquote class="blockquote">
                        <p class="text-white text-center font-weight-bold">${dataObject.overview}</p>
                    </blockquote>
                    </div>
                    </div>
                </div>
                <footer>
                <div id="production" class="row mt-5">

                </div>
                </footer>
            `;

            //production companies toevoegen aan de pagina
            addProduction(productionCompanies);

        });

    function addProduction(productionCompanies) {
        //Alle production companies overlopen en hierbij de html opvullen
        productionCompanies.forEach(company => {
            //als er geen afbeelding beschikbaar is voor de production company, dan een placehold image gebruiken
            var posterURL;
            if (company.logo_path) {
                posterURL = "https://image.tmdb.org/t/p/w300/" + company.logo_path;
            } else(posterURL = "https://via.placeholder.com/300/");

            //wegschrijven naar de pagina
            document.querySelector('#production').innerHTML +=
                `
                    <div class="col-4 p-4">
                        <div class="card w-100 h-100 m-0 ><img src="${posterURL}" class="card-img-top">
                            <div class="card-body">
                                <h6 class="card-title">${company.name}</h6>
                                <p class="card-text">Origin: ${company.origin_country}</p>
                            </div>
                        </div>
                    </div>
                `;
        });

    };
}