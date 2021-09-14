$(document).ready(function(){
    $(".tab_ct01 .gallery ul").after($(".tab_ct01 .gallery ul").clone());
    $(".tab_ct02 .gallery ul").after($(".tab_ct02 .gallery ul").clone());
    $(".tab_ct03 .gallery ul").after($(".tab_ct03 .gallery ul").clone());
    $(".tab_ct04 .gallery ul").after($(".tab_ct04 .gallery ul").clone());
    $(".tab_ct05 .gallery ul").after($(".tab_ct05 .gallery ul").clone());
    let position=0;
    let position2=0;
    let movesize=370;

    $(".tab_box01 .btn_box>.arrow_btn").click(function(event){ 
        let $target = $(event.target);
        if($target.is('.lft_btn')){
            if(position==-2220){
               $(".gallery").css('left',0);
               position=0;
            }
            position-=movesize;
            $(".tab_box01 .gallery").stop().animate({'left':position},'slow');
        }
        else{
            if(position==0){
                $(".gallery").css('left',-2220);
               position=-2220;
            }
            position+=movesize;
            $(".tab_box01 .gallery").stop().animate({'left':position},'slow');

        }
    });

    $(".tab_box02 .btn_box>.arrow_btn").click(function(event){
        let $target = $(event.target);
        if($target.is('.lft_btn')){
            if(position2==-2220){
                $(".gallery").css('left',0);
                position2=0;
             }
            position2-=movesize;
            $(".tab_box02 .gallery").stop().animate({'left':position2},'slow');
        }
        else{
            if(position2==0){
                $(".gallery").css('left',-2220);
               position2=-2220;
            }
            position2+=movesize;
            $(".tab_box02 .gallery").stop().animate({'left':position2},'slow');

        }
    });

});
