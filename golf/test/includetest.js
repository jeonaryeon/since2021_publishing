$(function(){
  // 모바일버전
  var documentW = $(document).width();
  if(documentW <= 961){
    $('#rnb>ul>li>p').on('click', function(){
      if($(this).next().css('display')=='none'){
        $('#rnb .lnb').slideUp();
        $('#rnb>ul>li>p').removeClass('current');
        $(this).siblings('#rnb .lnb').slideDown();
        $(this).addClass('current');
      }else{
        $('#rnb .lnb').slideUp();
        $(this).removeClass('current');
      }
    });
    
    $('#rnb>ul>li>p').on('click', function(){
      
    });
  }
}); 



