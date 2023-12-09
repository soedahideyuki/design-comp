$(function() {
  // カルーセル
  $('.carousel').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  autoplayspeed: 3000,
  arrows: false,
  fade: true,
});
// topボタン
$('div>a').on('mouseover',function(){
  $(this).css('opacity', '0.5');
});
$('div>a').on('mouseout',function(){
  $(this).css('opacity', '1');
});

$(window).on('scroll',function(){
  const scrollValue= $(window).scrollTop();
if(scrollValue >= 200){
  $('#button').css('display','block')
}else {
  $('#button').css('display','none')
}
});

// リンククリック
$('a[href^="#"]').on('click',function(){
  let speed = 500;
  let href = $(this).attr('href');
  let target = $(href =="#" || href == "" ? "html" : href)
  let position = target.offset().top;
  $('html,body').animate({scrollTop:position},
    speed, "swing");
});

// $(window).on('scroll' , function(){
//   $('#aboutSection').each(function(){
//     let position = $(this).offset().top;
//     let scroll = $(window).scrollTop();
//     if(scroll == position){
//       $(this).fadein(200);
  //   };
  // });
// 
// sectionのフェード院
$(window).on('scroll' , function(){
  let scrollValue = $(window).scrollTop();
  $('section').each(function(){
    let position = $(this).offset().top;
    if(scrollValue  > position - 200){
      $(this).addClass('fadein');
    };
  });
});

// モーダルウィンドウ
$('#close').on('click',function(){
  $(this).hide();
  $('#main-modal').hide(); 
  $('#back-modal').hide();
});
$('img.works-img').on('click', function(){
  $('#close').show();
  $('#back-modal').show();
  $('#main-modal').show().html('<img src='+$(this).attr('src')+'>');
});

})