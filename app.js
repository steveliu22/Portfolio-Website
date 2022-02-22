var text = "Hi, welcome to my website! Let me introduce myself:";
var textPosition = 0;
var tracker = 0;
var speed = 60;
const getDoc = document.getElementById("about-me-header");
function typewriter() {
    
    getDoc.innerHTML = "<strong>" + text.substring(0, textPosition) + "<span></span>" + "</strong>";

    if(tracker != text.length) {
        textPosition += 1;
        tracker += 1;
        setTimeout(typewriter, speed);
    }

    else {
        setTimeout(erase, 6000);
    }

}

function erase() {
    
    getDoc.innerHTML = "";

    
}

window.addEventListener("load", typewriter);



