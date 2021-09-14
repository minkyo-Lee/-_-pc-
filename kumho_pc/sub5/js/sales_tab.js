$(document).ready(function(){
    $(".tab_btn_box>a").click(function(){
        let idx = $(this).index();
        $(".tab_btn_box>a").removeClass('on');
        $(this).addClass("on");
        $(".sales_tab_box>.tab").eq(idx).show().siblings(".sales_tab_box>.tab").hide();
    });
});