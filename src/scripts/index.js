
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import './parameters.js';
import { initTim, initOverview } from './detail';

console.log(API_key);

const number = Math.random();
if(number > 0.5){
    initOverview();
    
}
