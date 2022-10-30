$(document).ready(function () {
    
    // $(".top-btn").click(function(){
    //     fullpage_api.moveTo(1, 1);
    // });

    $(".header .header-wrap .logo").click(function(){
        fullpage_api.moveTo(1, 1);
        $(".header .header-wrap .nav ul li a").removeClass("on")
    })

    // 네비 클릭 페이지 이동
    $(".header .header-wrap .nav ul li").click(function(){
        let i = $(this).index();
        fullpage_api.moveTo(i + 2)

        $(".header .header-wrap .nav ul li a").removeClass("on").eq(i).addClass("on");
    })
    

    let page = new fullpage(".fullpage",{
        sectionsColor: ["#000", "#000", "#fdfde9", "#ffade0", "#fffde7", "#fff"],
        anchors: ["menu1", "menu2", "menu3", "menu4", "menu5", "menu6"],
        navigation: true,
        navigationPosition: "left",
        navigationTooltips: ["","High Jewelry", "Jewelry", "Watch","LifeStyle", "News"],
        slidesNavigation: true,
        onLeave: function(origin, destination, derection){
            // 구역을 떠나고 새로운 구역으로 이동 도중 이벤트 실행
            // orgin - 활성화된 구역
            // destination - 목적지 구역
            // direction - 마우스 휠 방향
            // $("#fp-nav ul li .fp-tooltip").removeClass("on").eq(destination.index).addClass("on")
        },
        // afterLoad: function(origin, destination){
        //     if(destination.index == 0){
        //         $("#fp-nav ul li .fp-tooltip").eq(0).addClass("on")
        //     }
        //     //  구역을 불러들이고 나서 스트롤이 끝나면 이벤트가 실행
        // }
    })

    

    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        console.log("")
        // if (pos)
    })

    
    



});