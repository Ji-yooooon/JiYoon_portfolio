// alert()
$(document).ready(function () {
   
    $(".top-btn").click(function(){
        $("html, body").stop().animate({
            scrollTop: 0
        },600)
    });
    $(window).scroll(function(){

        let pos = $(window).scrollTop();
        if (pos >= 300) {
          $(".top-btn").show();
        } else {
          $(".top-btn").hide();
        }
        
      })


    const content = "꾸준히 오르는 디자이너 이지윤입니다. \n 감사합니다.";
    const text = document.querySelector(".footer-title .txt");
    let i = 0;
        
    function typing(){
        let txt = content[i++];
        text.innerHTML += txt=== "\n" ? "<br/>": txt;
        if (i > content.length) {
            text.textContent = "";
            i = 0;
        }
    }
    setInterval(typing, 150);


        

    let Count = 0;

    function opacitySlide(){
        $(".content .content-wrap .content1 .h-img img").eq(Count).css("opacity", 0)
        Count++;
        if(Count >= $(".content .content-wrap .content1 .h-img img").length){
            Count = 0;
        }
        $(".content .content-wrap .content1 .h-img img").eq(Count).css("opacity", 1)
    }
    setInterval(opacitySlide, 3000)

});
