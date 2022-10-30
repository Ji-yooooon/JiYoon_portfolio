// alert()
$(document).ready(function () {

    $(".top-btn").click(function(){
        fullpage_api.moveTo(1, 1);
    });
    
    let page = new fullpage(".fullpage",{
        sectionsColor: ["#fffde7", "#fffde7", "#fffde7", "#fffde7"],
        anchors: ["menu1", "menu2", "menu3", "menu4"],
        navigation: true,
        navigationPosition: "left",
        // navigationTooltips: ["메뉴1", "스킬부분", "컨텐츠","할인공간", "기타"],
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
});