var oldOrientation = ""
var currentOrientation = ""

function changeMenu(){
    var navLandscape = document.getElementById("navLandscape");
    var menuBtn = document.getElementById("menuBtn");

    if(window.innerHeight > window.innerWidth){
        currentOrientation = "portrait"
    } else {
        currentOrientation = "landscape"
    }

    if(oldOrientation != currentOrientation){
        if(currentOrientation == "portrait"){
            navLandscape.style.visibility = "hidden";
            navLandscape.style.height = "0px";
        }
        else {
            navLandscape.style.visibility = "visible";
            navLandscape.style.height = "auto";

            //Remove sideBar
            document.getElementById("sidebar").classList.remove("active");

            //Reset btn burger
            menuBtn.classList.remove('open');
        }
        oldOrientation = currentOrientation;
        console.log("change orientation : " + currentOrientation);
    }
}

changeMenu()

window.onresize = function(event) {
    changeMenu();
};