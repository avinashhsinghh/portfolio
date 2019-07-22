function drawBar(id) {
    var bar = new ProgressBar.Line(id, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
    });

    bar.animate(1.0);  // Number from 0.0 to 1.0
}

function displayAboutSection() {
    var width = $(window).width();
    if (width <= 1199) {
        $('#about-desktop').hide();
        $('#about-mobile').show();
    } else {
        $('#about-desktop').show();
        $('#about-mobile').hide();
    }
}
