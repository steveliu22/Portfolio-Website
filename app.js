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
        setTimeout(erase, 5000);
    }

}

function erase() {
    
    getDoc.innerHTML = "";
    window.scrollTo({
  top: 0,
  behavior: 'smooth',
})

    
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            e.preventDefault();
            let href = this.getAttribute("href");
            let elem = document.querySelector(href)||document.querySelector("a[name="+href.substring(1, href.length)+"]");
            window.scroll({
                top: elem.offsetTop, 
                left: 0, 
                behavior: 'smooth' 
            });
        });
    });

window.addEventListener("load", typewriter);
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}



