$(function() {
  $('.carousel').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  autoplayspeed: 3000,
  arrows: false,
  fade: true,
});

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
})