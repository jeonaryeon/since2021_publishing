$(function(){
  // 모바일버전
  var documentW = $(document).width();
  if(documentW <= 961){
    $('#rnb>ul>li>p').on('click', function(){
      $(this).parent().siblings().find('.lnb').slideUp();
      $(this).siblings().slideToggle();
      $(this).parent().siblings().find('p').removeClass('current');
      $(this).toggleClass('current');
    });
  }
}); 