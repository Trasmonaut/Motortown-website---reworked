window.addEventListener("load", function () {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true,
    });

    var sidenavElems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavElems);

    // Auto-slide every 8 seconds
    setInterval(function () {
        instances.forEach(carousel => {
            carousel.next();
        });
    }, 8000);
});

//Preloader functionality
window.addEventListener("load", function () {
    var preloader = document.querySelector(".preloader-wrapper");
    if (preloader) {
        preloader.style.display = "none";
    }


}   );

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
