// Import stylesheets
import './style.css';
import { jsonPath } from './jsonpath.js';

var json = require('./guasti.json');  
//jsonPath()
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = json ;
