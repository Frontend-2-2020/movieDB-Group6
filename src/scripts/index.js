
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import { initTim } from './tim';

const number = Math.random();
if(number > 0.5){
    initTim();
}
