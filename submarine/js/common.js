$(function(){
  document.addEventListener('scroll', function() {
    var currentST = document.documentElement.scrollTop;
    var mainH = $('header').height();
    var documentW = $(document).width();
    
    if(currentST > mainH){
      $('nav').addClass('fix');
    }else{
      $('nav').removeClass('fix');
    }
    
    if(currentST <= $('#event2').offset().top-80){
      $('nav li:nth-child(1)').addClass('current').siblings().removeClass('current');
    }else if(currentST <= $('#preview').offset().top-80){
      $('nav li:nth-child(2)').addClass('current').siblings().removeClass('current');
    }else if(currentST >= $('#preview').offset().top-80){
      $('nav li:nth-child(3)').addClass('current').siblings().removeClass('current');
    } 
    
    if(documentW <= 1024){
      if(currentST >= $('#event2 ul li:nth-child(3)').offset().top-80){
        $('nav li:nth-child(3)').addClass('current').siblings().removeClass('current');
      }else if(currentST >= $('#event2').offset().top-80){
        $('nav li:nth-child(2)').addClass('current').siblings().removeClass('current');
      }else{
        $('nav li:nth-child(1)').addClass('current').siblings().removeClass('current');
      }
    }
  });
  
  $('nav li').on('click',function(){
    event.preventDefault();
//    $(this).addClass('current').siblings().removeClass('current');
    var sect=$(this).children('a').attr('href');
    var topPosition=Math.round($(sect).offset().top);
    $('html,body').animate({scrollTop:topPosition - 80},500);
  });
}); 



