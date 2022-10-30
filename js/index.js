// alert()
$(document).ready(function () {
    let zindex = $(".content").css("z-index");
    

    
    $(".content-wrap .content ").mouseover(function(){
        
        $(".content-wrap .content").eq($(".content-wrap .content ").index(this)).addClass("on")
        //첫번째꺼 안움직이게 할거임
        $(".content-wrap .content").eq(0).removeClass("on")
    }).mouseout(function(){
        $(".content-wrap .content").removeClass("on")
        
    })


});