$(function(){
  /*$('.Hmenu').on('click', function(){
    if($(this).hasClass('open')){
      $('#Allmenu').removeClass('hidden');
      $('.Hmenu').addClass('close');
      $('.Hmenu').removeClass('open');
      $('.close span:first-child').css({
        transform: 'rotate(45deg)',
        transition: 'all ease 0.4s 0s'
      });
      $('.close span:last-child').css({
        transform: 'rotate(-45deg)',
        transition: 'all ease 0.4s 0s'
      });
    }else{
      $('#Allmenu').addClass('hidden');
      $('.Hmenu').removeClass('close');
      $('.Hmenu').addClass('open');
      $('.open span').css({
        transform: 'rotate(0)',
      });
    }
  });
  */
  
  $('.open').on('click',function(){
//    $(this).removeClass('open').addClass('close');
    $('#Allmenu').removeClass('hidden');
    $('.close').addClass('rotate');
  });
  
  $('.close').on('click',function(){
//    $(this).removeClass('close').addClass('open');
    $('#Allmenu').addClass('hidden');
    $('.close').removeClass('rotate');
  });
  
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



