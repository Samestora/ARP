/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
var now;

function showPricing() {
    document.getElementById("pricing-dd").classList.toggle("show");
    now = 0;
}

function showAbout() {
    document.getElementById("about-dd").classList.toggle("show");
    now = 1;
}

function showRes() {
    document.getElementById("res-dd").classList.toggle("show");
    now = 2;
}

// Close the dropdown menu if the user clicks outside of it
function dropdownHide(event) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
        if(i !== now){
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if(!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-content')) {
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

export {showPricing, dropdownHide, showAbout, showRes};