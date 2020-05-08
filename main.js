$(document).ready(function(){
    




    $('#target').skippr({
        transition: 'fade',
            speed: 1000,
            easing: 'easeOutQuart',
            navType: 'bubble',
            childrenElementType: 'div',
            arrows: true,
            autoPlay: true,
            autoPlayDuration: 2000,
            keyboardOnAlways: true,
            hidePrevious: false
    });
})