$(document).ready(function() {
    var name = $('.name');
    var container = $('.fade');
    var header = $('.header');
    var footer = $('.footer');
    var page = $('.page');
    var nameHeight = name.height();
    var containerHeight = container.height();

    name.css('margin-top', containerHeight/2 - nameHeight/2)
    container.hide(0).delay(500).fadeIn(2000);
    name.delay(3000).animate({
            'margin-top': 0
    }, 1000);
    container.removeClass('textCenterPage');

    header.hide(0).delay(4000).fadeIn(2000);
    footer.hide(0).delay(4000).fadeIn(2000);
    page.hide(0).delay(4000).fadeIn(2000);

});