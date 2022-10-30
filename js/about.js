// about me

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

// summary 반복
  // $(".summary .summary-wrap .txt-wrap .txt-area").stop().animate({
  //   left: "-1445px"
  // }, 15000, "linear")
  
  // setInterval(() => {
  //   $(".summary .summary-wrap .txt-wrap .txt-area").css("left", "0")
  //   $(".summary .summary-wrap .txt-wrap .txt-area").stop().animate({
  //     left: "-1445px"
  //   }, 15000, "linear")
  // }, 14999);  

  // // 마우스오버
  // $(".summary .summary-wrap .txt-wrap").mouseover(function(){
  //     $(".summary .summary-wrap .txt-wrap .txt-area").stop();
  // }).mouseout(function(){
  //   $(".summary .summary-wrap .txt-wrap .txt-area").stop().animate({
  //     left: "-1445px"
  //   }, 15000, "linear")
    
  //   setInterval(() => {
  //     $(".summary .summary-wrap .txt-wrap .txt-area").css("left", "0")
  //     $(".summary .summary-wrap .txt-wrap .txt-area").stop().animate({
  //       left: "-1445px"
  //     }, 15000, "linear")
  //   }, 14999); 
  // })


  // possi 반복
//   $(".possibility .poss-wrap .content-wrap .content-bg").stop().animate({
//     left: "-1640px"
//   }, 15000, "linear")
  
//   setInterval(() => {
//     $(".possibility .poss-wrap .content-wrap .content-bg").css("left", "0")
//     $(".possibility .poss-wrap .content-wrap .content-bg").stop().animate({
//       left: "-1640px"
//     }, 15000, "linear")
//   }, 14999);  

// // 마우스오버
//   $(".possibility .poss-wrap .content-wrap .content-bg").mouseover(function(){
//     $(".possibility .poss-wrap .content-wrap .content-bg").stop();
//   }).mouseout(function(){
//     $(".possibility .poss-wrap .content-wrap .content-bg").stop().animate({
//       left: "-1640px"
//     }, 15000, "linear")
    
//     setInterval(() => {
//       $(".possibility .poss-wrap .content-wrap .content-bg").css("left", "0")
//       $(".possibility .poss-wrap .content-wrap .content-bg").stop().animate({
//         left: "-1640px"
//       }, 15000, "linear")
//     }, 14999);  
//   })

  
  
})

