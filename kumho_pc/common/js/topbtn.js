$(document).ready(function(){

    $(".top_btn").click(function(){
        $('html,body').stop().animate({"scrollTop":0},1000);
    });

    $(window).on("scroll",function(){
        let scroll=$(window).scrollTop();
        if(scroll>=1200){
            $(".top_btn").fadeIn('slow');
        }
        else{
            $(".top_btn").fadeOut('slow');
        }
    });
});
