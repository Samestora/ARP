import {dropdownHide, showPricing, showAbout, showRes} from './navbar.js';

document.getElementById('pricing-dropbtn').addEventListener('click', showPricing);
document.getElementById('about-dropbtn').addEventListener('click', showAbout);
document.getElementById('res-dropbtn').addEventListener('click', showRes);

// Wait until the page loads before working with HTML elements
window.addEventListener('load', function() {
    document.addEventListener('click', dropdownHide);
});