$(document).ready(function(){
    $(window).resize(function(){
        let w=$(window).width();
        if(w>=1281){
            $(".top_btn").click(function(){
                $('html,body').stop().animate({"scrollTop":0},1000);
            });
            $("#gnb").hover(
                function(){
                    $(".sub_menu").stop().fadeIn('slow');
                    $(".menu_box").stop().slideDown();
                },
                function(){
                    $(".sub_menu").stop().fadeOut('slow');
                    $(".menu_box").stop().slideUp();
                }
            );
            $(window).on("scroll",function(){
                let scroll=$(window).scrollTop();
                if(scroll>=1000){
                    $("#header").css('background-color',"#fff");
                    $(".top_btn").fadeIn('slow');
                }
                else{
                    $("#header").css('background-color',"transparent");
                    $(".top_btn").fadeOut('slow');
                }
            });
        }
        else{
            $(".m_nav_icon").click(function(){
                let documentHeight = $(document).height();
                let windowHeight = $(window).height();
                $('.menu_bg').css('height',documentHeight);
                $("#gnb").css('height',windowHeight);
                $('.menu_bg').show();
                $("#gnb").animate({left:"0", opacity: "1"},"slow");
            });
            $(".close_btn, .menu_bg").click(function(){
                $('.menu_bg').hide();
                $("#gnb").animate({left:"-100%"},"fast");
            });
            $("#gnb .depth").click(function(){
                $('.sub_menu').hide();
                $(this).next(".sub_menu").slideDown('slow');
            });
            $(".top_btn").hide();
        }
    });
    $(window).trigger("resize"); //강제로 호출하는 함수
});


