import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import { initDetail } from './detail';
import { initOverview } from './overview';
import queryString from 'query-string';


var overviewcontainer = document.querySelector("#overviewcontainer");
export var overviewdiv = document.querySelector("#overview");


export var detailContainer = document.querySelector("#detailContainer");





const parsed = queryString.parse(location.search);
console.log(parsed);


if (parsed.movie) {
    // Hide / show relevant div
    overviewcontainer.style.display = "none";
    detailContainer.style.display = "block";

    initDetail(parsed.movie);
} else {
    // Hide / show relevant div
    overviewcontainer.style.display = "block";
    detailContainer.style.display = "none";

    initOverview();
}