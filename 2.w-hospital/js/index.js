
$(document).ready(function () {
    
    const swiper = new Swiper(".swiper",{
        autoplay: {delay:5000},
        loop: true,
        pagination:{
            el: ".swiper-pagination",
            clickable: true,  
        },

    })

    // 네비게이션
    $(".header .header-wrap .nav ul li").mouseover(function (e) {
        let  i = $(this).index()
        $(".header .nav-menu").addClass("on");
        // $(".header").addClass("on");

        $(".header .header-wrap .nav ul li a").removeClass().eq(i).addClass("on");
        
        $(".header .header-wrap .nav ul li").mouseout(function(){
            // $(".header").removeClass("on");
            $(".header .header-wrap .nav ul li a").removeClass("on");
        })
        
        
        $(".header .header-wrap .nav ul li").mouseout(function(e){
            $(".header .nav-menu").removeClass("on")    
        })
        $(".header .nav-menu").mouseover(function(){
            $(".header .nav-menu").addClass("on")
        }).mouseout(function(){
            $(".header .nav-menu").removeClass("on")  
        })


        $(".header .nav-menu .nav-wrap .menu-list ul").mouseover(function(){
            let  i = $(this).index()
            // alert(i)
            $(".header .header-wrap .nav ul li").eq(i).find("a").addClass("on")
            // $(".header").addClass("on");
            
    
        })
        $(".header .nav-menu .nav-wrap ul").mouseout(function(){
            let  i = $(this).index()
            // alert(i)
            $(".header .header-wrap .nav ul li").eq(i).find("a").removeClass("on")
            // $(".header").removeClass("on");
    
        })
    })

    // 컨텐츠3

    // 네비 스크롤
    $(window).scroll(function () { 
        let pos = $(window).scrollTop();
        console.log("")
        if (pos >= 500){
            $(".header").hide();
        }else{
            $(".header").show();
        }
    });




});
