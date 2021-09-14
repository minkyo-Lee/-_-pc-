$(document).ready(function(){
    $("#gnb").hover(
        function(){
            $(".sub_menu").stop().slideDown('slow');
            $(".nav_box").stop().slideDown('slow');
        },
        function(){
            $(".sub_menu").stop().slideUp();
            $(".nav_box").stop().slideUp();
        }
    );
});

$(document).ready(function(){
    $('.select .arrow').toggle(
        function(){
            $('.select .family_site').fadeIn('fast');
            $('.select .arrow').css({'background-image':"url(common/images/down-arrow.png)"});
        },
        function(){
            $('.select .family_site').fadeOut('fast');
            $('.select .arrow').css({'background-image':"url(common/images/up-arrow.png)"});
        }
    );
});