$(function() {
    var $name = $('.name');
    var $container = $('.fade');
    var $header = $('.header');
    var $footer = $('.footer');
    var $page = $('.page');
    var $nameHeight = $name.height();
    var $containerHeight = $container.height();

    $name.css('margin-top', $containerHeight/2 - $nameHeight/2)

    $(document).ready(function(){
        $container.hide(0).delay(500).fadeIn(2000);
        $name.delay(3000).animate({
                'margin-top': 0
        }, 1000);
        $container.removeClass('textCenterPage');

        $header.hide(0).delay(4000).fadeIn(2000);
        $footer.hide(0).delay(4000).fadeIn(2000);
        $page.hide(0).delay(4000).fadeIn(2000);

    });

    var $slide_index = 0;
    var $current_slide, $new_slide;


    $('.next_arrow img').click(function() {
        if ($slide_index == 0){
            $current_slide = $('.waterloo');
            $new_slide = $('.shad');
            $slide_index++;
        }
        else if($slide_index == 1){
            $current_slide = $('.shad');
            $new_slide = $('.basketball');
            $slide_index++;
        }
        else if($slide_index == 2){
            $current_slide = $('.basketball');
            $new_slide = $('.waterloo');
            $slide_index=0;
        }

        $current_slide.fadeOut(1000);
        $new_slide.fadeIn(1000);
    });

    $('.previous_arrow img').click(function() {
        if ($slide_index == 0){
            $current_slide = $('.waterloo');
            $new_slide = $('.basketball');
            $slide_index++;
        }
        else if($slide_index == 1){
            $current_slide = $('.shad');
            $new_slide = $('.waterloo');
            $slide_index++;
        }
        else if($slide_index == 2){
            $current_slide = $('.basketball');
            $new_slide = $('.shad');
            $slide_index=0;
        }

        $current_slide.fadeOut(1000);
        $new_slide.fadeIn(1000);
    });
});