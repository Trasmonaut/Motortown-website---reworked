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