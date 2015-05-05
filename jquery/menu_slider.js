$(function() {

    var $menu_item, leftPos, newWidth,
        $menu = $("#target");

    var $padding = 20;
    var $left = 10;
    
    $menu.append("<li class='magic-line'></li>");
    var $magicLine = $(".magic-line");
    
    $magicLine
        .width($(".current_page_item").width() - $padding)
        .css("left", $(".current_page_item a").position().left + $left);
        
    $("#target li a").click(function() {
        $menu_item = $(this);
        $current_item = $('.current_page_item');
        $leftPos = $menu_item.position().left + $left;
        $newWidth = $menu_item.parent().width() - $padding;
        $magicLine.stop().animate({
            left: $leftPos,
            width: $newWidth
        });

        $currentPage = $(".current_page_item a").text().split(" ")[0]; //take first word of the menu name
        $newPage = $menu_item.text().split(" ")[0];

        if($currentPage != $newPage){
            $('.'+$currentPage).fadeOut(2000,function(){
                $('.'+$newPage).fadeIn(2000);
            });
            
            $current_item.removeClass('current_page_item');
            $menu_item.parent().addClass('current_page_item');
        }
    });
});