$(function(){
  // 모바일버전
  var documentW = $(document).width();
  if(documentW <= 961){
    $('#rnb>ul>li>p').on('click', function(){
      $(this).parent().siblings().find('.lnb').hide();
      $(this).siblings().toggle();
      $(this).parent().siblings().find('p').removeClass('current');
      $(this).addClass('current');
    });
  }
}); 