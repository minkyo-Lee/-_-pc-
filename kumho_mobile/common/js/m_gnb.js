$(document).ready(function(){
    $(".menu_icon").toggle(
        function(){
            let documentHeight=$(document).height();
            let windowHeight=$(window).height();
            
            $(".menu_bg").css('height',documentHeight);
            $(".menu_bg").show();
            $("#gnb").stop().slideDown('slow');
        },function(){
            $(".menu_bg").hide();
            $("#gnb").stop().slideUp('slow');
            $(".sub_menu").slideUp('slow');
        }
    );
    $(".menu_bg").click(function(){
        $(".menu_bg").hide();
        $("#gnb").stop().slideUp('slow');
        $(".sub_menu").slideUp('slow');
    });
});

$(document).ready(function(){
    $(".depth").click(function(){
        $(".sub_menu").not($(this).next(".sub_menu")).slideUp('slow');
        $(this).next(".sub_menu").slideDown('slow');   
    });
});
