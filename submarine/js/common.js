$(function(){
  document.addEventListener('scroll', function() {
    var currentST = document.documentElement.scrollTop;
    var mainH = $('header').height();
    
    if(currentST > mainH){
      $('nav').addClass('fix');
    }else{
      $('nav').removeClass('fix');
    }
  });
  
  $('nav li a').on('click',function(){
    event.preventDefault();
    $(this).addClass('current').siblings().removeClass('current');
    var sect=$(this).attr('href');
    var topPosition=Math.round($(sect).offset().top);
    $('html,body').animate({scrollTop:topPosition},500);
  });
}); 



