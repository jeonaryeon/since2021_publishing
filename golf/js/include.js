$(function(){
  // 모바일버전
  var documentW = $(document).width();
  if(documentW <= 961){
    $('#rnb>ul>li>p').on('click', function(){
      if(!$(this).hasClass('current')){
        $(this).parent().siblings().find('.lnb').hide();
        $(this).parent().siblings().find('p').removeClass('current');
        $(this).addClass('current');
        $(this).siblings('.lnb').show();
      }else{
        $(this).removeClass('current');
        $(this).siblings('.lnb').hide();
      }
    });
  }
}); 