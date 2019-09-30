import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import { initDetail } from './detail';
import { initOverview } from './overview';

import queryString  from 'query-string';
import { API_key } from './parameters';
import { format } from 'url';
import Axios from 'axios';

// console.log(API_key);

const parsed = queryString.parse(location.search);
console.log(parsed);


if(parsed.movie){
    initDetail(API_key);
}else{
    initOverview();
}
