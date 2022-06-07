let menuOpen = false;
var menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }

    document.getElementById("sidebar").classList.toggle("active");
});