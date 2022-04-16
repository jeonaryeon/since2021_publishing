$(function(){
  var documentW = $(document).width();
  if(documentW > 960){}
  
  $(window).scroll(function(){
    var t = $("html").scrollTop();
    var mainH = $('#MAIN').height();
    if(t > 200){
      $('nav').addClass('fix');
    }else{
      $('nav').removeClass('fix');
    }
  });
  
  
  if(documentW <= 960){
    $('.Hmenu').on('click',function(){
      $('nav').toggleClass('on');
      $('nav h1').toggle();
      $('nav .bg').toggle();
    });
    $('nav a').on('click',function(){
      $('nav').removeClass('on');
      $('nav h1').show();
      $('nav .bg').hide();
    });
  }
  
//  $('nav.on .Hmenu').on('click',function(){
//    $('nav').reomveClass('on');
//    $('nav .bg').hide();
//  });
}); 



