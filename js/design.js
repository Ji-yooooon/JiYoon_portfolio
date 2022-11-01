// alert()
$(document).ready(function () {
    
    let page = new fullpage(".fullpage",{
        sectionsColor: ["#fffde7", "#fff"],
        anchors: ["menu1", "menu2"],
        // navigation: true,
        // navigationPosition: "left",
        // navigationTooltips: [],
        slidesNavigation: true,
        onLeave: function(origin, destination, derection){
            // 구역을 떠나고 새로운 구역으로 이동 도중 이벤트 실행
            // orgin - 활성화된 구역
            // destination - 목적지 구역
            // direction - 마우스 휠 방향
            $("#fp-nav ul li .fp-tooltip").removeClass("on").eq(destination.index).addClass("on")
        },
        afterLoad: function(origin, destination){
            if(destination.index == 0){
                $("#fp-nav ul li .fp-tooltip").eq(0).addClass("on")
            }
            //  구역을 불러들이고 나서 스트롤이 끝나면 이벤트가 실행
        }
    })

// 슬릭 슬라이드
    $(".slick").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".slider-nav",
        dots: false,
        focusOnSelect: true,
        
    });    
    $(".slider-nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".slick",
        dots: true,
        centerMode: true,
        focusOnSelect: true,
    
    });
    
    // $(".content .content-wrap .slider-nav .slick-slide").click(function(){
    //     var dataId = $('.slick-current').attr("data-slick-index");    
    //     console.log(dataId);
    //     let i = $(this).index()
    //     // alert(i)
    //     // // console.log(i);
    //     $(".content .content-wrap .d-title").eq(i).addClass("on");
    // })
    $(".content .content-wrap .d-title").eq(0).addClass("on");
    $('.slick').on('beforeChange click', function(event, slick, currentSlide, nextSlide){
        console.log(nextSlide);
        $(".content .content-wrap .d-title").removeClass("on").eq(nextSlide).addClass("on");
      });

    //   $(".content .content-wrap .slick .slick-item").mouseover(function(){
    //     $(".content .content-wrap .slick .slick-item").addClass("on")
    //   })
    //   $(".content .content-wrap .slick .slick-item").mouseout(function(){
    //     $(".content .content-wrap .slick .slick-item").removeClass("on")
    //   })



    
// 프로세스

    $(".content .content-wrap .d-title .process").click(function(){
        let i = $(".content .content-wrap .d-title .process").index(this)
        
        $(".window").fadeIn();
        $(".window-content").eq(i).slideDown().scrollTop(0);

       
    //모달 스크롤할때 body멈춤 
        $('body').on('scroll touchmove mousewheel', function(event) {
        event.stopPropagation();
        });
    })

// 모달
    $(".window").click(function(){
        $(".window").fadeOut();
        $(".window-content").slideUp();


        $('body').off('scroll touchmove mousewheel');
        });
    });

    