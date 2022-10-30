// alert()

$(document).ready(function () {
    $(".side").click(function(){
        $("html, body").stop().animate({
            scrollTop: 0
        }, 900)
    });

    // 메뉴 네비 호버 시작
    
    $(".header .header-wrap .nav ul li").mouseover(function (e) { 
        let  i = $(this).index()
        // alert(i)

        $(".header .nav-menu").addClass("on"); 
        $(".header .header-wrap .nav ul li a").removeClass().eq(i).addClass("on");       
    }).mouseout(function(){
        $(".header .header-wrap .nav ul li a").removeClass("on")
    })

    $(".header .nav ul li").mouseout(function (e) { 
        $(".header .nav-menu").removeClass("on");
                
    })
    
    $(".header .nav-menu").mouseover(function(){
        $(".header .nav-menu").addClass("on")
        
    }).mouseout(function(){
        $(".header .nav-menu").removeClass("on")  
    })

    $(".header .nav-menu .nav-menu-wrap ul").mouseover(function(){
        let  i = $(this).index()
        // alert(i)
        $(".header .header-wrap .nav ul li").eq(i).find("a").addClass("on")

    })
    $(".header .nav-menu .nav-menu-wrap ul").mouseout(function(){
        let  i = $(this).index()
        // alert(i)
        $(".header .header-wrap .nav ul li").eq(i).find("a").removeClass("on")

    })

    



    // 배너 슬라이드
    const banner = new Swiper(".swiper.banner-slide",{
        autoplay: {delay:5000},
        loop: true,
        pagination:{
            el: ".swiper-pagination",
            clickable: true,  
        },
    })



    function MenuSwiper(id){

        const circle = new Swiper(id,{
            slidesPerView: 3,
            centeredSlides: true,
            loop: true,
            navigation:{
                nextEl : ".swiper-button-next",
                prevEl : ".swiper-button-prev"
            },
        })
    }

    MenuSwiper(".menu-swiper-1.swiper")

    // 스와이퍼 + 탭메뉴 = 작동안함-> 탭먼저 설정 후 탭 눌럿을때 스와이퍼 따로 적용되도록 설정
    $(".menu-content .menu-txt ul li").click(function (e) { 
        e.preventDefault();
        let i = $(this).index();
        MenuSwiper(`.menu-swiper-${i+1}.swiper`)

        $(".menu-content .menu-txt ul li").removeClass("on").eq(i).addClass("on")
        $(".menu-content .content-wrap").find(".menu-content .content-wrap .menu-img")
        $(".menu-content .content-wrap .menu-img").hide().eq(i).show()
    });

});

