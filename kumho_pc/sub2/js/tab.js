$(document).ready(function(){
    $(".tab_box01>.tab_btn>a").click(function(){
        let idx = $(this).index();
        $(".tab_box01>.tab_btn>a").removeClass('on');
        $(this).addClass("on");
        $(".tab_box01 .tab").eq(idx).show().siblings(".tab_box01 .tab").hide();
    });
});

$(document).ready(function(){
    $(".tab_box02>.tab_btn>a").click(function(){
        let idx = $(this).index();
        $(".tab_box02>.tab_btn>a").removeClass('on');
        $(this).addClass("on");
        $(".tab_box02 .tab").eq(idx).show().siblings(".tab_box02 .tab").hide();
    });
});

