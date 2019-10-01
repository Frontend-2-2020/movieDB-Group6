import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import { initDetail } from './detail';
import { initOverview } from './overview';
import queryString  from 'query-string';
import { API_key } from './parameters';

// console.log(API_key);
var overviewcontainer = document.querySelector("#overviewcontainer");
export var overviewdiv = document.querySelector("#overview");
export var detaildiv = document.querySelector("#detail");

const parsed = queryString.parse(location.search);
console.log(parsed);


if(parsed.movie){
    // Hide / show relevant div
    overviewdiv.style.display = "none";
    detaildiv.style.display = "block";

    initDetail(parsed.movie);
}else{
    // Hide / show relevant div
    overviewcontainer.style.display = "block";
    detaildiv.style.display = "none";

    initOverview();
}
