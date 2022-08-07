const nav = document.getElementById("nav");
const header = document.getElementById("header");
const hamburger = document.getElementById("nav-hamburger");

hamburger.addEventListener("click" , OpenNav);

var isOpen = false;
//Funksjon som åpner og lukker navbaren
function OpenNav() {
    if (isOpen) {
        console.log("lukker nav");
        nav.style.top = "-5rem";
        header.style.top = "0rem";
        hamburger.innerHTML = "MENY ↓";
        isOpen = false;
    } else {
        console.log("åpner nav");
        nav.style.top = "0";
        header.style.top = "5rem";
        hamburger.innerHTML = "MENY ↑";    
        isOpen = true;
    }

}