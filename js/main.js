setTimeout(function() {
    document.body.style.overflowY = "scroll";
    document.getElementById("float").style.display ="none"
    document.querySelector('header').style.opacity = 1;

}, 2900);


history.scrollRestoration = 'manual';

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

