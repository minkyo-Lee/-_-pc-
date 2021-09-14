// modal 창
// 기능1 : modal 창 외부의 검은 영역 클릭시 Modal close
// 기능2 : modal 창 내부의 x 버튼 클릭시 Modal close
// 기능3 : 5개 article의 자세히 보기 버튼 클릭시 해당 Modal open

$(document).ready(function(){
    $(".rule_btn").click(function(){
        $(this).next().css("display","block");
    });

    $(".pop_close").click(function(){
        $(".rule_pop_box").css("display","none");
    });

});
