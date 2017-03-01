$(document).ready(function() {
    $('.back_to_top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });
});