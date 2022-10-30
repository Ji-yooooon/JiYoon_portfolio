$(document).ready(function () {
    $(".top-btn").click(function(){
        $("html, body").stop().animate({
            scrollTop: 0
        },600);        
    });
    // $(".header .nav ul li").eq(0).addClass("on")
    $(".header .nav ul li").click(function () { 
        let i = $(this).index()
        $(".header .nav ul li").eq(i).addClass("on")
        
    });
    


})

